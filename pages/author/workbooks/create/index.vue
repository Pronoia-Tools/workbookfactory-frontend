<template>
  <c-flex direction="row" w="100%">
    <!-- side bar -->
    <side-bar>
      <author-sidebar />
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
                        <c-input v-model="workbookEdition" flex="1" type="text" />
                      </c-flex>
                    </c-form-control>
                  </c-flex>
                  
                  <!-- categories -->
                  <c-form-control is-required class="flex items-center">
                    <c-form-label width="100px">Categories</c-form-label>
                    <c-input
                      v-model="workbookTags"
                      flex="1"
                      type="text"
                    />
                  </c-form-control>
                </c-stack>
              </c-grid-item>
            </c-grid>

            <c-box mt="4">
              <c-textarea
                v-model="workbookDescription"
                placeholder="Description"
                min-height="300px"
              ></c-textarea>
            </c-box>

            <c-flex mt="8" align-items="center" justify-content="flex-end">
              <c-button variant-color="blue" size="md" @click="submitForm">
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
import SideBar from '@/components/SideBar.vue'
import AuthorSideBar from '@/components/SideBar/AuthorSidebar.vue'
import { LANGUAGES, CURRENCY_UNITS } from '~/utils/constants'

export default {
  fetchOnServer: false,
  components: {
    'side-bar': SideBar,
    'author-sidebar': AuthorSideBar,
  },
  data() {
    return {
      workbookTitle: '',
      workbookLanguage: '',
      workbookEdition: 1,
      workbookPrice: 0.0,
      workbookDescription: '',
      workbookTags: 'test',
      supportedLanguages: LANGUAGES,
      supportCurrencies: CURRENCY_UNITS
    }
  },
  methods: {
    async submitForm() {
      const params = {
        title: this.workbookTitle,
        language: this.workbookLanguage,
        edition: this.workbookEdition,
        price: this.workbookPrice,
        tags: ['test'],
        description: this.workbookDescription
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
    },
  },
}
</script>
