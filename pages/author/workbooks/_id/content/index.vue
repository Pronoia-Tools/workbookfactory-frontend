<template>
  <c-box class="container mx-auto my-20">
    <c-box v-if="isLoading">
      <loading-screen />
    </c-box>

    <c-flex v-else class="justify-center">
      <c-box class="w-[800px]">
        <c-box
          as="p"
          class="text-4xl text-eerieBlack font-ibm font-semibold mb-8"
        >
          {{ workbook.title }}
        </c-box>

        <c-stack
          v-if="workbook.tags && workbook.tags.length > 0"
          :spacing="4"
          align-items="start"
          is-inline
          class="mb-4"
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

        <c-flex class="items-center mb-10">
          <c-avatar src="https://bit.ly/chakra-evan-you" class="mr-2" />
          <c-box class="text-xs text-darkLava">
            <c-box as="p" class="text-sm font-semibold">
              {{ workbook.owner ? workbook.owner.username : 'updating...' }}
            </c-box>
            <c-box as="p">
              Created: {{ $dayjs(workbook.created).format('MM/DD/YYYY') }}
            </c-box>
            <c-box as="p">
              Modified:
              {{ $dayjs(workbook.modified).format('MM/DD/YYYY HH:mm:ss') }}
            </c-box>
          </c-box>
        </c-flex>

        <c-divider />

        <c-box class="editor mt-10">
          <editor-content :editor="editor" />
        </c-box>
      </c-box>
    </c-flex>
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
      isLoading: true,
    }
  },

  async fetch() {
    try {
      this.isLoading = true

      const id = this.$route.params.id
      this.workbook = await this.$axios.$get(`/api/v1/workbooks/${id}`)

      this.editor.commands.setContent(this.workbook.content)
    } catch (error) {
      this.$toast({
        title: 'Failed',
        description: 'Something wrong happen',
        status: 'error',
        duration: 2000,
        position: 'top-right',
      })
    } finally {
      this.isLoading = false
    }
  },

  mounted() {
    this.editor = new Editor({
      editable: false,
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
  font-size: 1.55em;
  color: #4d4535;
}
</style>
