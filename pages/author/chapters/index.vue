<template>
  <c-flex direction="row" w="100%" min-h="95vh">
    <c-box class="w-full lg:w-1/5" overflow="hidden"> </c-box>
    <c-box class="w-full lg:w-4/5" overflow="hidden">
      <c-box>
        <editor v-model="content" />
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import Editor from '@/components/Editor'

export default {
  components: {
    Editor,
  },

  data() {
    return {
      content:
        '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>',
    }
  },
}
</script>
