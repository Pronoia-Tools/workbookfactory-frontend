<template>
  <c-flex direction="row" w="100%" min-h="95vh">
    <c-box w="20%">
      <side-bar>
        <author-sidebar />
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
                        >
                          {{ language.name }}
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

                  <!-- tags -->
                  <c-form-control class="flex items-center">
                    <c-form-label width="100px"> Categories </c-form-label>
                    <!-- <c-input v-model="workbook.tags" flex="1" type="text" /> -->
                    <tag-input v-if="workbook.tags" :tag-list="workbook.tags" />
                  </c-form-control>
                </c-stack>
              </c-grid-item>
            </c-grid>

            <c-box mt="8">
              <c-textarea
                v-model="workbook.description"
                placeholder="Description"
                :value="workbook.description"
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
import AuthorSideBar from '@/components/SideBar/AuthorSidebar.vue'
import TagInput from '@/components/TagInput'
import { LANGUAGES, CURRENCY_UNIT } from '~/utils/constants'

export default {
  components: {
    'side-bar': SideBar,
    'author-sidebar': AuthorSideBar,
    'tag-input': TagInput,
  },
  data() {
    return {
      workbook: {
        title: '',
        language: '',
        price: '',
        currency: '',
        description: '',
        tags: [],
        image: '',
      },
      tagList: [],
      languages: LANGUAGES,
      currencies: CURRENCY_UNIT,
    }
  },

  async fetch() {
    const id = this.$route.params.id
    const workbook = await this.$axios.$get(`api/v1/workbooks/${id}`)

    this.workbook = { ...this.workbook, ...workbook }
  },

  methods: {
    async submitForm() {
      // const id = this.$route.params.id
      // if (typeof this.workbook.tags === 'string') {
      //   this.workbook.tags = this.workbook.tags.split(',')
      // }

      await console.log('2 tags', typeof this.workbook.tags)

      const params = {
        title: this.workbook.title,
        language: this.workbook.language,
        edition: this.workbook.edition,
        price: this.workbook.price,
        description: this.workbook.description,
        currency: this.workbook.currency,
        tags: this.workbook.tags,
      }
      console.log(
        '🚀 ~ file: index.vue ~ line 156 ~ submitForm ~ params',
        params
      )

      console.log('edit tags', this.workbook.tags)

      // const response = await this.$axios.$put(`api/v1/workbooks/${id}`, params)

      // if (response) {
      //   this.$toast({
      //     title: 'Success',
      //     description: "You're updated workbook successfully.",
      //     status: 'success',
      //     duration: 2000,
      //     position: 'top-right',
      //   })
      //   this.$router.push('/author/workbooks')
      // }
    },
  },
}
</script>
