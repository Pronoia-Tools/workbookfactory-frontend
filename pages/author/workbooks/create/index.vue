<template>
  <c-flex direction="row" w="100%">
    <!-- side bar -->
    <side-bar>
      <c-flex direction="column" w="100%" align="center" as="nav" class="nav">
        <c-box class="w-full">
          <c-box as="ul" class="mt-4 text-sm">
            <c-box as="li" class="">
              <nuxt-link to="" class="p-4 flex">
                <c-flex class="w-full items-center">
                  <span class="flex-1"> Sale</span>
                </c-flex>
              </nuxt-link>
            </c-box>
            <c-box as="li" class="">
              <nuxt-link to="author/workbooks" class="p-4 flex">
                <c-flex class="w-full items-center">
                  <span class="flex-1"> Workbooks</span>
                  <c-icon w="5" name="chevronRight" class="icon" />
                </c-flex>
              </nuxt-link>
              <c-box as="ul">
                <c-box as="li" class="">
                  <nuxt-link
                    to="/author/workbooks/create"
                    class="p-4 flex items-center"
                  >
                    <span class="ml-2 flex-1 font-bold">
                      Create New Workbook
                      <c-icon w="5" name="plus" class="icon" />
                    </span>
                  </nuxt-link>
                </c-box>
              </c-box>
            </c-box>
            <c-box as="li" class="">
              <nuxt-link to="/" class="p-4 flex">
                <c-flex class="w-full items-center">
                  <span class="flex-1"> Customer</span>
                </c-flex>
              </nuxt-link>
            </c-box>
          </c-box>
        </c-box>
      </c-flex>
    </side-bar>

    <!-- content -->
    <c-box w="80%">
      <c-box class="py-5 m-5">
        <c-box class="px-2">
          <c-box>
            <c-heading as="h2" size="md">Workbook Information </c-heading>
          </c-box>

          <c-box class="py-10">
            <c-grid template-columns="repeat(3, 1fr)" gap="6">
              <c-grid-item col-span="1" bg="blue.300" />
              <c-grid-item col-span="2">
                <c-stack :spacing="5">
                  <!-- title -->
                  <c-form-control is-required class="flex items-center">
                    <c-form-label width="100px"> Title </c-form-label>
                    <c-input v-model="workbookTitle" flex="1" type="text" />
                  </c-form-control>

                  <c-flex>
                    <c-form-control is-required class="flex">
                      <!-- price -->
                      <c-flex class="items-center w-4/5">
                        <c-form-label width="100px">Price</c-form-label>
                        <c-input v-model="workbookPrice" flex="1" type="text" />
                      </c-flex>
                    </c-form-control>
                    <c-form-control is-required>
                      <!-- edition -->
                      <c-flex class="items-center w-1/2 mr-4">
                        <c-form-label width="100px"> Edition </c-form-label>
                        <c-input
                          v-model="workbookEdition"
                          flex="1"
                          type="text"
                        />
                      </c-flex>
                    </c-form-control>
                  </c-flex>

                  <!-- categories -->
                  <c-form-control is-required class="flex">
                    <c-form-label width="100px">Categories</c-form-label>
                    <tag-input :tag-list="workbookTags" />
                  </c-form-control>
                </c-stack>
              </c-grid-item>
            </c-grid>

            <c-form-control mt="8">
              <c-form-label class="mb-2"> Description </c-form-label>
              <c-textarea
                v-model="workbookDescription"
                placeholder="Description"
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
</template>

<script>
import TagInput from '@/components/TagInput'
import SideBar from '@/components/SideBar.vue'
import { LANGUAGES, CURRENCY_UNITS } from '~/utils/constants'

export default {
  fetchOnServer: false,
  components: {
    'side-bar': SideBar,
    'tag-input': TagInput,
  },
  data() {
    return {
      workbookTitle: '',
      workbookLanguage: '',
      workbookEdition: 1,
      workbookPrice: 0.0,
      workbookDescription: '',
      workbookTags: [],
      supportedLanguages: LANGUAGES,
      supportCurrencies: CURRENCY_UNITS,
    }
  },
  methods: {
    async submitForm() {
      this.isLoading = true
      try {
        const params = {
          title: this.workbookTitle,
          language: this.workbookLanguage,
          edition: this.workbookEdition,
          price: this.workbookPrice,
          tags: this.workbookTags,
          description: this.workbookDescription,
        }

        const response = await this.$axios.$post('api/v1/workbooks', params)

        if (response) {
          this.$toast({
            title: 'Success',
            description: "You're created workbook successfully.",
            status: 'success',
            duration: 2000,
            position: 'top-right',
          })
          this.$router.push('/author/workbooks')
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
      this.isLoading = false
    },
  },
}
</script>
