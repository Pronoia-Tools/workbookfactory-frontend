<template>
  <c-flex direction="row" w="100%">
    <side-bar>
      <editor-sidebar />
      <table-of-content :headings="headings" />
    </side-bar>
    <c-box w="60%" px="10" py="10" class="editor">
      <editor-content h="100%" :editor="editor" />
    </c-box>
    <library />
  </c-flex>
</template>

<script>
import Library from '@/components/Upload/Library.vue'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import SideBar from '@/components/SideBar.vue'
import Component from '@/components/TableOfContent/Component.vue'
import EditorSidebar from '../components/SideBar/EditorSidebar.vue'

export default {
  components: {
    'side-bar': SideBar,
    'table-of-content': Component,
    'editor-sidebar': EditorSidebar,
    library: Library,
    EditorContent,
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
      content: `<h2>1 heading</h2> <p>paragraph</p> <h3>1.1 heading</h3> <p>paragraph</p> <h3>1.2 heading</h3> <p>paragraph</p> <h2>2 heading</h2> <p>paragraph</p> <h3>2.1 heading</h3> <p>paragraph</p>`,
      extensions: [StarterKit],
    })
    this.editor.on('update', this.handleUpdate)
    this.$nextTick(this.handleUpdate)
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

<style>
.editor > div,
.editor .ProseMirror {
  height: 100%;
}
</style>
