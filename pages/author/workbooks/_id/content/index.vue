<template>
  <c-box class="container mx-auto my-20">
    <c-box as="p" class="text-3xl text-eerieBlack font-ibm font-semibold mb-4">
      {{ workbook.title }}
    </c-box>

    <c-stack
      v-if="workbook.tags && workbook.tags.length > 0"
      :spacing="4"
      align-items="start"
      is-inline
      class="mb-6"
    >
      <c-tag
        v-for="(tag, index) in workbook.tags"
        :key="index"
        size="sm"
        variant-color="vue"
      >
        {{ tag }}
      </c-tag>
    </c-stack>

    <c-box class="editor">
      <editor-content :editor="editor" class="px-10" />
    </c-box>
  </c-box>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      workbook: {},
      editor: null,
      editable: false,
    }
  },

  async fetch() {
    try {
      const id = this.$route.params.id

      this.workbook = await this.$axios.$get(`api/v1/workbooks/${id}`)

      this.editor.commands.setContent(this.workbook.content)
    } catch (error) {
      this.$toast({
        title: 'Failed',
        description: 'Something wrong happen',
        status: 'error',
        duration: 2000,
        position: 'top-right',
      })
    }
  },

  mounted() {
    this.editor = new Editor({
      editable: this.editable,
      content: this.workbook.content,
      extensions: [StarterKit],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}

.editor {
  font-size: 1.25em;
}

[contenteditable='false'] {
  color: #999;
  cursor: not-allowed;
}
</style>
