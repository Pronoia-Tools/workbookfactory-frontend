<template>
  <c-flex direction="row" w="100%">
    <side-bar>
      <editor-sidebar />
      <table-of-content :headings="headings" />
    </side-bar>
    <c-box w="60%" p="10" class="editor h-full border border-gray-200 m-10">
      <bubble-menu v-if="editor" class="bubble-menu" :editor="editor">
        <button
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <c-image
            :src="require('@/static/icons/bold-solid.svg')"
            alt="bold"
            class="w-4 h-4"
          />
        </button>
        <button
          :class="{ 'is-active roun': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <c-image
            :src="require('@/static/icons/italic-solid.svg')"
            alt="italic"
            class="w-4 h-4"
          />
        </button>
        <button
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <c-image
            :src="require('@/static/icons/strikethrough-solid.svg')"
            alt="strikethrough"
            class="w-4 h-4"
          />
        </button>
      </bubble-menu>

      <editor-content h="100%" :editor="editor" />
    </c-box>
    <library />
  </c-flex>
</template>

<script>
import tippy from 'tippy.js'

import Library from '@/components/Upload/Library.vue'
import StarterKit from '@tiptap/starter-kit'
import SideBar from '@/components/SideBar.vue'
import Component from '@/components/TableOfContent/Component.vue'
import { Editor, EditorContent, BubbleMenu, VueRenderer } from '@tiptap/vue-2'
import EditorSidebar from '@/components/SideBar/EditorSidebar.vue'
import SlashCommands from '@/components/SlashCommand'
import SlashComponent from '@/components/SlashCommand/Component.vue'

export default {
  components: {
    'side-bar': SideBar,
    'table-of-content': Component,
    'editor-sidebar': EditorSidebar,
    library: Library,
    EditorContent,
    BubbleMenu,
  },
  data() {
    return {
      preDefinedComponents: [],
      editor: null,
      editable: false,
      headings: [],
    }
  },

  mounted() {
    this.editor = new Editor({
      content: `
      <toc></toc>
      <h1>1 heading</h1>
      <p>paragraph</p>
      <h2>1.1 heading</h2>
      <p>paragraph</p>
      <h2>1.2 heading</h2>
      <p>paragraph</p>
      <h1>2 heading</h1>
      <p>paragraph</p>
      <h2>2.1 heading</h2>
      <p>paragraph</p>`,
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
    this.editor.on('update', this.handleUpdate)
    this.$nextTick(this.handleUpdate)
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
      this.headings = headings
    },
  },
}
</script>

<style lang="scss">
.editor {
  /* Basic editor styles */
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
    outline: none;
  }

  .bubble-menu {
    display: flex;
    background-color: #d3d3d3;
    border-radius: 0.25rem;

    button {
      border: none;
      background: none;
      color: #000;
      font-size: 0.85rem;
      font-weight: 500;
      padding: 0.4rem 0.6rem;
      line-height: 1;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
