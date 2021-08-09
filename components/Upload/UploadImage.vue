<template>
  <c-box class="px-4 pb-5">
    <c-box as="h4" size="sm" class="text-sm font-semibold">
      Drop and drag item
    </c-box>
    <c-box class="border rounded-md mt-3 w-full h-20">
      <input
        ref="uploadInput"
        class="opacity-0 h-full w-full"
        type="file"
        style="z-index: 1"
        accept="image/*"
        multiple="false"
        @change="handleChange"
      />
    </c-box>
  </c-box>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {
      error: '',
      files: [],
      dropped: 0,
      Imgs: [],
    }
  },
  methods: {
    ...mapActions('upload', {
      uploadImage: 'uploadImage',
    }),
    async handleChange(event) {
      if (this.dropped === 0) this.files.push(...event.currentTarget.files)
      this.error = ''
      if (!this.files.length) return false
      const image = this.files[0]

      const data = new FormData()
      data.append('image', image)
      await this.uploadImage(data)
      this.files = []
    },
  },
}
</script>
