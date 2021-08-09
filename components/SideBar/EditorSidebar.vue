<template>
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
</template>

<script>
export default {
  name: 'EditorSidebar',
  data() {
    return {
      workbookCover: null,
    }
  },
  methods: {
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

<style lang="scss" scoped>
.workbook-cover {
  .css-vz7w1a-Yn {
    height: 100%;
  }
}
</style>
