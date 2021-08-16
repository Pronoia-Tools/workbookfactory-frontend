<template>
  <c-flex direction="row" w="100%">
    <side-bar>
      <c-box class="w-full">
        <c-box class="p-6">
          <c-box class="mb-4">
            <!-- workbook cover -->
            <c-text class="text-base text-eerieBlack font-semibold mb-3">
              Workbook cover
            </c-text>
            <c-box class="workbook-cover relative h-60 w-40">
              <c-flex class="absolute w-full h-full justify-center">
                <c-image
                  v-if="workbookCover"
                  :src="workbookCover"
                  alt="workbook-cover"
                  class="h-full"
                />
                <c-flex
                  v-else
                  alt="workbook-cover"
                  class="
                    h-full
                    w-full
                    bg-vapers
                    items-center
                    justify-center
                    rounded-md
                    flex-col
                  "
                >
                  <c-image
                    class="w-4 h-4"
                    :src="require('@/static/icons/iconUpload.svg')"
                    alt="icons"
                  />
                  <span class="text-sm pt-2">Upload</span>
                </c-flex>
              </c-flex>
              <c-input
                type="file"
                class="text-center absolute z-10 opacity-0 p-10"
                accept="image/*"
                @change="onFileChange"
              />
            </c-box>
          </c-box>

          <!-- workbook title -->
          <c-box>
            <c-text class="text-base text-eerieBlack font-semibold mb-3">
              Workbook title
            </c-text>
            <c-input id="wtitle" placeholder="Workbook title..." />
          </c-box>
        </c-box>

        <c-divider />
      </c-box>

      <!-- table of content -->
      <table-of-content :headings="headings" />
    </side-bar>
    <c-box
      w="60%"
      p="10"
      class="editor h-full border border-gray-200 m-10 flex-1"
    >
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
import SlashCommands from '@/components/SlashCommand'
import SlashComponent from '@/components/SlashCommand/Component.vue'

export default {
  components: {
    'side-bar': SideBar,
    'table-of-content': Component,
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
      workbookCover: null,
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
    onFileChange(event) {
      // const selectedFile = event.target.files[0]

      // if (selectedFile) {
      //   this.workbookCover = URL.createObjectURL(selectedFile)
      // }

      const input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        const reader = new FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.workbookCover = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
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

  .workbook-cover {
    .css-vz7w1a-Yn {
      height: 100%;
    }
  }
}
</style>
