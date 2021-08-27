<template>
  <c-box>
    <c-box v-if="isLoading">
      <loading-screen />
    </c-box>

    <c-flex v-else class="flex-row w-full" h="94vh">
      <side-bar>
        <c-box class="w-full">
          <c-box class="p-6">
            <c-box class="mb-4">
              <!-- workbook cover -->
              <c-text class="mb-3 text-base font-semibold text-eerieBlack">
                Workbook cover
              </c-text>
              <c-box class="relative w-40 workbook-cover h-60">
                <c-flex class="absolute justify-center w-full h-full">
                  <c-image
                    v-if="workbook.cover_image"
                    :src="workbook.cover_image"
                    alt="workbook-cover"
                    class="rounded-md"
                  />
                  <c-flex
                    v-else
                    alt="workbook-cover"
                    class="
                      flex-col
                      items-center
                      justify-center
                      w-full
                      h-full
                      rounded-md
                      bg-vapers
                    "
                  >
                    <c-image
                      class="w-4 h-4"
                      :src="require('@/static/icons/iconUpload.svg')"
                      alt="icons"
                    />
                    <span class="pt-2 text-sm">Upload</span>
                  </c-flex>
                </c-flex>
                <c-input
                  type="file"
                  class="absolute z-10 p-10 text-center opacity-0"
                  accept="image/*"
                  @change="onFileChange"
                />
              </c-box>
            </c-box>

            <!-- workbook title -->
            <c-box>
              <c-text class="mb-3 text-base font-semibold text-eerieBlack">
                Workbook title
              </c-text>
              <c-input
                id="wtitle"
                v-model="workbook.title"
                placeholder="Workbook title..."
                is-disabled
              />
            </c-box>
          </c-box>

          <c-divider />
        </c-box>

        <!-- table of content -->
        <table-of-content :headings="headings" />
      </side-bar>

      <workbook-editor @update-headings="updateHeadings" />

      <library />
    </c-flex>
  </c-box>
</template>

<script>
import TableOfContent from '@/components/TableOfContent/TableOfContent'
import Library from '~/components/Upload/Library.vue'

export default {
  components: {
    library: Library,
    'table-of-content': TableOfContent,
  },
  data() {
    return {
      isLoading: false,
      workbook: null,
      workbookCover: null,
      headings: [],
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
    } catch (error) {
      console.log('error', error)
    } finally {
      this.isLoading = false
    }
  },

  methods: {
    updateHeadings(event) {
      this.headings = event
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
