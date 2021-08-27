<template>
  <c-box class="px-4 pb-5" h="35vh">
    <c-box as="p" class="text-sm font-semibold mb-4">
      Drop and drag item
    </c-box>

    <c-box class="h-3/4 mb-4">
      <upload-images
        :max="1"
        max-error="Max files exceed"
        @changed="handleImages"
      />
    </c-box>

    <c-button
      left-icon="plus"
      variant-color="blue"
      size="xs"
      class="float-right"
      :is-disabled="!images"
      @click="handleUpload"
    >
      Upload
    </c-button>
  </c-box>
</template>

<script>
import UploadImages from 'vue-upload-drop-images'

export default {
  components: {
    'upload-images': UploadImages,
  },
  data() {
    return {
      images: null,
      componentKey: 0,
    }
  },
  methods: {
    handleImages(files) {
      const file = files[0]
      this.images = file
    },
    async handleUpload() {
      try {
        const formData = new FormData()
        formData.append('image', this.images)

        const response = await this.$axios({
          url: '/api/v1/images',
          data: formData,
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        if (response) {
          this.$toast({
            title: 'Success',
            description: "You're upload images successfully.",
            status: 'success',
            duration: 2000,
            position: 'top-right',
          })
        }
      } catch (error) {
        this.$toast({
          title: 'Failed',
          description: 'Something wrong happen',
          status: 'error',
          duration: 2000,
          position: 'top-right',
        })
      }

      this.componentKey += 1
      this.$emit('update-key', this.componentKey)
    },
  },
}
</script>
