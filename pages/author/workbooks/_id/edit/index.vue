<template>
  <c-box>
    <loading-screen v-if="isLoading" />

    <c-flex v-else class="flex-row w-full" min-h="94vh">
      <!-- side bar -->
      <side-bar>
        <c-flex direction="column" w="100%" align="center" as="nav" class="nav">
          <c-box class="w-full">
            <c-box as="ul" class="mt-4 text-sm">
              <c-box as="li" class="">
                <nuxt-link to="" class="flex p-4">
                  <c-flex class="items-center w-full">
                    <span class="flex-1"> Sale</span>
                  </c-flex>
                </nuxt-link>
              </c-box>
              <c-box as="li" class="">
                <nuxt-link to="author/workbooks" class="flex p-4">
                  <c-flex class="items-center w-full">
                    <span class="flex-1"> Workbooks</span>
                    <c-icon w="5" name="chevronRight" class="icon" />
                  </c-flex>
                </nuxt-link>
                <c-box as="ul">
                  <c-box as="li" class="">
                    <nuxt-link
                      to="/author/workbooks/create"
                      class="flex items-center p-4"
                    >
                      <span class="flex-1 ml-2 font-bold">
                        Create New Workbook
                        <c-icon w="5" name="plus" class="icon" />
                      </span>
                    </nuxt-link>
                  </c-box>
                </c-box>
              </c-box>
              <c-box as="li" class="">
                <nuxt-link to="/marketplace" class="flex p-4">
                  <c-flex class="items-center w-full">
                    <span class="flex-1"> Customer</span>
                  </c-flex>
                </nuxt-link>
              </c-box>
            </c-box>
          </c-box>
        </c-flex>
      </side-bar>

      <c-box w="80%">
        <c-box mx="4" my="5" py="5" background-color="#fff">
          <c-box px="2rem">
            <c-box>
              <c-heading as="h2" size="md"> eWorkbook Information </c-heading>
            </c-box>

            <c-box py="10">
              <c-grid template-columns="repeat(3, 1fr)" gap="6">
                <!-- workbook image -->
                <c-grid-item col-span="1">
                  <c-box
                    v-if="
                      typeof workbook.cover_image === 'string' && isImageExist
                    "
                    class="relative"
                  >
                    <c-image
                      :src="workbook.cover_image"
                      alt="workbook-cover"
                      class="mx-auto rounded-md mb-2"
                      h="450px"
                    />

                    <c-box class="absolute top-5 right-20">
                      <c-icon-button
                        v-show="isImageExist"
                        variant-color="blue"
                        variant="outline"
                        border-radius="20px"
                        icon="close"
                        aria-label="Delete"
                        size="sm"
                        @click="removeCoverImage"
                      />
                    </c-box>
                  </c-box>

                  <c-box v-else>
                    <upload-images
                      :max="1"
                      max-error="Max files exceed"
                      @changed="handleImages"
                    />
                  </c-box>
                </c-grid-item>

                <c-grid-item col-span="2">
                  <c-stack :spacing="5">
                    <!-- title -->
                    <c-form-control class="flex items-center">
                      <c-form-label width="100px"> Title </c-form-label>
                      <c-input v-model="workbook.title" flex="1" type="text" />
                    </c-form-control>

                    <c-form-control class="flex items-center">
                      <!-- edition -->
                      <c-flex class="items-center w-1/2 mr-4">
                        <c-form-label width="100px"> Edition </c-form-label>
                        <c-input
                          v-model="workbook.edition"
                          flex="1"
                          type="number"
                        />
                      </c-flex>

                      <!-- language -->
                      <c-flex class="items-center w-1/2">
                        <c-form-label width="100px"> Language </c-form-label>
                        <c-select
                          v-model="workbook.language"
                          placeholder="Select Language"
                          flex="1"
                        >
                          <option
                            v-for="language in languages"
                            :key="language.id"
                            :value="language.value"
                          >
                            {{ language.value }}
                          </option>
                        </c-select>
                      </c-flex>
                    </c-form-control>

                    <c-form-control class="flex items-center">
                      <!-- price -->
                      <c-flex class="items-center w-4/5 mr-2">
                        <c-form-label width="100px"> Price </c-form-label>
                        <c-input
                          v-model="workbook.price"
                          flex="1"
                          type="number"
                        />
                      </c-flex>

                      <!-- currency -->
                      <c-flex class="items-center w-1/5">
                        <c-select
                          v-model="workbook.currency"
                          placeholder="Select Unit"
                        >
                          <option
                            v-for="currency in currencies"
                            :key="currency.id"
                          >
                            {{ currency.unit }}
                          </option>
                        </c-select>
                      </c-flex>
                    </c-form-control>

                    <!-- categories -->
                    <c-form-control class="flex">
                      <c-form-label width="100px"> Tags </c-form-label>
                      <tag-input
                        v-if="workbook.tags"
                        :tag-list="workbook.tags"
                      />
                    </c-form-control>
                  </c-stack>
                </c-grid-item>
              </c-grid>

              <c-form-control mt="8">
                <c-form-label class="mb-2"> Description </c-form-label>
                <c-textarea
                  v-model="workbook.description"
                  :value="workbook.description"
                  placeholder="Description"
                  min-h="200px"
                />
              </c-form-control>

              <c-flex mt="8" align-items="center" justify-content="flex-end">
                <c-button
                  :is-loading="isLoading"
                  loading-text="Submitting"
                  variant-color="blue"
                  size="md"
                  @click="submitForm"
                >
                  Submit
                </c-button>
              </c-flex>
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-flex>
  </c-box>
</template>

<script>
import UploadImages from 'vue-upload-drop-images'
import { LANGUAGES, CURRENCY_UNITS } from '~/utils/constants'

export default {
  components: {
    'upload-images': UploadImages,
  },
  data() {
    return {
      workbook: {
        title: '',
        language: '',
        price: '',
        cover_image: null,
        description: '',
        tags: [],
        image: '',
      },
      languages: LANGUAGES,
      currencies: CURRENCY_UNITS,
      isLoading: true,
      isImageExist: true,
    }
  },

  async fetch() {
    try {
      const id = this.$route.params.id
      const workbook = await this.$axios.$get(`api/v1/workbooks/${id}`)
      this.workbook = { ...this.workbook, ...workbook }
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
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },

  methods: {
    handleImages(files) {
      const file = files[0]
      this.workbook.cover_image = file
    },

    removeCoverImage() {
      this.isImageExist = false
      this.workbook.cover_image = null
    },

    async submitForm() {
      try {
        this.isLoading = true

        let data = {
          title: this.workbook.title,
          language: this.workbook.language,
          edition: this.workbook.edition,
          price: this.workbook.price,
          description: this.workbook.description,
          tags: this.workbook.tags,
        }

        // Trying to create an record with both data and file, so using form-data here so only call API 1
        const formData = new FormData()

        if (typeof this.workbook.cover_image !== 'string') {
          data = { ...data, ...{ cover_image: this.workbook.cover_image } }
          formData.append('cover_image', this.workbook.cover_image)
        }
        formData.append('data', JSON.stringify(data))

        const response = await this.$axios({
          url: `api/v1/workbooks/${this.workbook.id}`,
          data: formData,
          method: 'put',
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        if (response) {
          this.$toast({
            title: 'Success',
            description: "You're updated workbook successfully.",
            status: 'success',
            duration: 2000,
            position: 'top-right',
          })
          this.$router.push('/author/workbooks')
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.$toast({
          title: 'Failed',
          description: 'Something wrong happen',
          status: 'error',
          duration: 2000,
          position: 'top-right',
        })
      }
    },
  },
}
</script>
