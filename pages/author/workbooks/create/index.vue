<template>
  <c-flex direction="row" w="100%">
    <!-- side bar -->
    <side-bar>
      <author-sidebar />
    </side-bar>

    <!-- content -->
    <c-box w="80%">
      <c-box class="m-5 py-5 bg-white">
        <c-box class="px-2">
          <c-box>
            <c-heading as="h2" size="md"> eWorkbook Information </c-heading>
          </c-box>

          <c-box class="py-10">
            <c-grid template-columns="repeat(3, 1fr)" gap="6">
              <c-grid-item col-span="1" bg="blue.300" />
              <c-grid-item col-span="2">
                <c-stack :spacing="5">
                  <!-- title -->
                  <c-form-control class="flex items-center">
                    <c-form-label width="100px"> Title </c-form-label>
                    <c-input v-model="workbookTitle" flex="1" type="text" />
                  </c-form-control>

                  <c-form-control class="flex">
                    <!-- edition -->
                    <c-flex class="items-center w-1/2 mr-4">
                      <c-form-label width="100px"> Edition </c-form-label>
                      <c-input v-model="workbookEdition" flex="1" type="text" />
                    </c-flex>

                    <!-- language -->
                    <c-flex class="items-center w-1/2">
                      <c-form-label width="100px"> Language </c-form-label>
                      <c-select
                        v-model="workbookLanguage"
                        placeholder="Select Language"
                        flex="1"
                      >
                        <option
                          v-for="language in languages"
                          :key="language.id"
                        >
                          {{ language.value }}
                        </option>
                      </c-select>
                    </c-flex>
                  </c-form-control>

                  <c-form-control class="flex">
                    <!-- price -->
                    <c-flex class="items-center w-4/5">
                      <c-form-label width="100px"> Price </c-form-label>
                      <c-input v-model="workbookPrice" flex="1" type="text" />
                    </c-flex>

                    <!-- currency unit -->
                    <c-box display="flex" w="20%" pl="2">
                      <c-select
                        v-model="workbookCurrency"
                        placeholder="Select Unit"
                      >
                        <option
                          v-for="currency in currencies"
                          :key="currency.id"
                        >
                          {{ currency.unit }}
                        </option>
                      </c-select>
                    </c-box>
                  </c-form-control>

                  <!-- categories -->
                  <c-form-control class="flex items-center">
                    <c-form-label width="100px"> Categories </c-form-label>
                    <c-input
                      v-model="workbookCategories"
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
import { LANGUAGES, CURRENCY_UNIT } from '@/utils/constants'

export default {
  components: {
    'side-bar': SideBar,
    'author-sidebar': AuthorSideBar,
  },
  data() {
    return {
      workbookTitle: '',
      workbookLanguage: '',
      workbookPrice: '',
      workbookCurrency: '',
      workbookDescription: '',
      workbookCategories: '',
      workbookEdition: '',
      languages: LANGUAGES,
      currencies: CURRENCY_UNIT,
    }
  },
  methods: {
    async submitForm() {
      const params = {
        title: this.workbookTitle,
        language: this.workbookLanguage,
        edition: this.workbookEdition,
        price: this.workbookPrice,
        description: this.workbookDescription,
        currency: this.workbookCurrency,
        categories: this.workbookCategories,
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
