<template>
  <c-box
    class="
      editor
      flex-1
      w-[60%]
      h-[850px]
      m-10
      p-10
      border border-gray-200
      overflow-hidden overflow-y-auto
      rounded-md
    "
  >
    <bubble-menu v-if="editor" class="bubble-menu" :editor="editor">
      <!-- bold -->
      <c-button
        :class="{ 'is-active': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <c-image
          :src="require('@/static/icons/bold-solid.svg')"
          alt="bold"
          class="w-4 h-4"
        />
      </c-button>

      <!-- italic -->
      <c-button
        :class="{ 'is-active roun': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <c-image
          :src="require('@/static/icons/italic-solid.svg')"
          alt="italic"
          class="w-4 h-4"
        />
      </c-button>

      <!-- strike -->
      <c-button
        :class="{ 'is-active': editor.isActive('strike') }"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        <c-image
          :src="require('@/static/icons/strikethrough-solid.svg')"
          alt="strikethrough"
          class="w-4 h-4"
        />
      </c-button>
    </bubble-menu>

    <editor-content h="100%" :editor="editor" />
  </c-box>
</template>

<script>
import tippy from 'tippy.js'
import { debounce } from 'lodash'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent, BubbleMenu, VueRenderer } from '@tiptap/vue-2'
import SlashCommands from '@/components/SlashCommand'
import SlashComponent from '@/components/SlashCommand/Component.vue'

export default {
  components: {
    EditorContent,
    BubbleMenu,
  },
  data() {
    return {
      editor: null,
      editable: false,
      newHeadings: [],
    }
  },
  async fetch() {
    try {
      this.isLoading = true

      const {
        params: { id },
      } = this.$route

      const { data } = await this.$axios.get(`api/v1/workbooks/${id}`)

      this.workbook = data
      this.editor.commands.setContent(this.workbook.content)
      this.handleUpdate()
    } catch (error) {
      console.log('error', error)
    } finally {
      this.isLoading = false
    }
  },

  computed: {
    chapters() {
      return this.workbook?.chapter_set || []
    },
    level1Headings() {
      return this.chapters.map((chapter, index) => {
        return {
          level: 0,
          text: `${index}. ${chapter.title}`,
          id: `heading-${index + 1}`,
        }
      })
    },
  },

  mounted() {
    this.editor = new Editor({
      content: null,
      extensions: [
        StarterKit,
        SlashCommands.configure({
          suggestion: {
            items: (query) => {
              return [
                {
                  title: 'Text',
                  description: 'Just start writing with plain text.',
                  command: ({ editor, range }) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setNode('paragraph')
                      .run()
                  },
                },
                {
                  title: 'Heading 1',
                  description: 'Big section heading.',
                  command: ({ editor, range }) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setNode('heading', { level: 1 })
                      .run()
                  },
                },
                {
                  title: 'Heading 2',
                  description: 'Medium section heading.',
                  command: ({ editor, range }) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setNode('heading', { level: 2 })
                      .run()
                  },
                },
                {
                  title: 'Heading 3',
                  description: 'Small section heading.',
                  command: ({ editor, range }) => {
                    editor
                      .chain()
                      .focus()
                      .deleteRange(range)
                      .setNode('heading', { level: 3 })
                      .run()
                  },
                },
              ]
                .filter((item) =>
                  item.title.toLowerCase().startsWith(query.toLowerCase())
                )
                .slice(0, 10)
            },
            render: () => {
              let component
              let popup

              return {
                onStart: (props) => {
                  component = new VueRenderer(SlashComponent, {
                    parent: this,
                    propsData: props,
                  })

                  popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                  })
                },
                onUpdate(props) {
                  component.updateProps(props)

                  popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                  })
                },
                onKeyDown(props) {
                  return component.ref?.onKeyDown(props)
                },
                onExit() {
                  popup[0].destroy()
                  component.destroy()
                },
              }
            },
          },
        }),
      ],
    })

    this.editor.on(
      'update',
      debounce(() => {
        this.handleUpdate()
      }, 3000)
    )
  },

  beforeDestroy() {
    this.editor.destroy()
  },

  methods: {
    handleUpdate() {
      const headings = []
      const transaction = this.editor.state.tr
      this.editor.state.doc.descendants((node, pos) => {
        if (node.type.name === 'heading') {
          const id = `heading-${headings.length + 1}`
          if (node.attrs.id !== id) {
            transaction.setNodeMarkup(pos, undefined, {
              ...node.attrs,
              id,
            })
          }
          headings.push({
            level: node.attrs.level,
            text: node.textContent,
            id,
          })
        }
      })
      transaction.setMeta('preventUpdate', true)
      this.editor.view.dispatch(transaction)
      this.newHeadings = [...headings]
      this.$emit('update-headings', this.newHeadings)
      this.updateWorkbookContent()
    },

    async updateWorkbookContent() {
      try {
        const workbookId = this.workbook.id

        await this.$axios.patch(`api/v1/workbooks/${workbookId}`, {
          content: this.editor.getJSON(),
        })
      } catch (error) {
        console.log('updateWorkbookContent', error)
      }
    },
  },
}
</script>

<style lang="scss">
.editor {
  /* Basic editor styles */
  &::-webkit-scrollbar {
    display: none;
  }

  .ProseMirror {
    > * + * {
      margin-top: 0.75em;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }
  }

  .ProseMirror-focused {
    outline: none !important;
  }

  .bubble-menu {
    display: flex;
    background-color: #d2d2d2;
    border-radius: 0.25rem;
    border: 1px solid #999;

    button {
      background: none;
      padding: 0.2rem;

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: #666;
      }
    }
  }

  .workbook-cover {
    .css-vz7w1a-Yn {
      height: 100%;
    }
  }
}
</style>
