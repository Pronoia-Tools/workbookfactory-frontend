<template>
  <c-flex direction="row" w="100%" min-h="95vh">
    <c-box w="20%">
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
    </c-box>
    <c-box w="80%">
      <c-box mx="4" my="5" py="5" background-color="#fff">
        <c-box px="2rem">
          <c-box>
            <c-heading as="h2" size="md"> eWorkbook Information </c-heading>
          </c-box>

          <c-box py="10">
            <c-grid template-columns="repeat(3, 1fr)" gap="6">
              <c-grid-item col-span="1" bg="blue.300" />
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
                        type="text"
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
                      <c-input v-model="workbook.price" flex="1" type="text" />
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
                  <c-form-control class="flex items-center">
                    <c-form-label width="100px"> Categories </c-form-label>
                    <c-input flex="1" type="text" />
                  </c-form-control>
                </c-stack>
              </c-grid-item>
            </c-grid>

            <c-box mt="8">
              <c-textarea
                v-model="workbook.description"
                :value="workbook.description"
                placeholder="Description"
              />
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
import { LANGUAGES, CURRENCY_UNITS } from '~/utils/constants'

export default {
  components: {
    'side-bar': SideBar,
  },
  data() {
    return {
      workbook: {
        title: '',
        language: '',
        price: '',
        currency: '',
        description: '',
        categories: '',
        image: '',
      },
      languages: LANGUAGES,
      currencies: CURRENCY_UNITS,
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
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id
        const params = {
          title: this.workbook.title,
          language: this.workbook.language,
          edition: this.workbook.edition,
          price: this.workbook.price,
          description: this.workbook.description,
          currency: this.workbook.currency,
          categories: this.workbook.categories,
        }
        const response = await this.$axios.$put(
          `api/v1/workbooks/${id}`,
          params
        )
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
  },
}
</script>
