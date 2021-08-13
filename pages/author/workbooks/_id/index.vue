<template>
  <c-flex direction="row" w="100%" min-h="95vh">
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
                  <c-flex class="items-center">
                    <c-text class="font-semibold w-24"> Title: </c-text>
                    <c-text>{{ workbook.title }}</c-text>
                  </c-flex>

                  <!-- author -->
                  <c-flex class="items-center">
                    <c-text class="font-semibold w-24"> By: </c-text>
                    <c-text>
                      {{
                        workbook.owner ? workbook.owner.username : 'updating...'
                      }}
                    </c-text>
                  </c-flex>

                  <c-flex>
                    <!-- edition -->
                    <c-flex class="w-1/2 items-center">
                      <c-text class="font-semibold w-24"> Edition: </c-text>
                      <c-text>{{ workbook.edition }}</c-text>
                    </c-flex>

                    <!-- language -->
                    <c-flex class="w-1/2 items-center">
                      <c-text class="font-semibold w-24"> Language: </c-text>
                      <c-text>{{ workbook.language || 'updating...' }}</c-text>
                    </c-flex>
                  </c-flex>

                  <c-flex class="items-center">
                    <!-- price -->
                    <c-flex class="items-center w-1/4">
                      <c-text class="font-semibold w-24"> Price: </c-text>
                      <c-text>{{ workbook.price }}</c-text>
                    </c-flex>

                    <!-- currency unit -->
                    <c-box class="w-20">
                      <c-input readonly="true" value="USD" />
                    </c-box>
                  </c-flex>

                  <!-- tags -->
                  <c-flex class="items-center">
                    <c-text class="font-semibold w-24"> Tags: </c-text>
                    <c-stack :spacing="4" align-items="start" is-inline>
                      <c-tag
                        v-for="(tag, index) in workbook.tags"
                        :key="index"
                        class="mr-2"
                        variant-color="vue"
                      >
                        {{ tag || 'updating...' }}
                      </c-tag>
                    </c-stack>
                  </c-flex>
                </c-stack>
              </c-grid-item>
            </c-grid>

            <c-box mt="8">
              <c-text class="font-semibold mb-2"> Description: </c-text>
              <c-textarea
                readonly="true"
                :value="workbook.description"
                placeholder="Description"
              />
            </c-box>

            <c-box my="10">
              <c-heading as="h2" size="md"> For Coaches </c-heading>
              <c-flex my="5">
                <c-box w="50%" px="2">
                  <c-heading as="h4"> Send a copy to a client </c-heading>
                  <c-flex direction="column">
                    <c-checkbox my="2" default-is-checked>
                      Create custom Client Workbook
                    </c-checkbox>
                    <c-checkbox my="2"> Client Pays for Workbook </c-checkbox>
                    <c-form-control display="flex" align-items="center">
                      <c-input flex="1" type="text" />
                    </c-form-control>
                    <c-button mt="10" variant-color="blue">
                      Send invation
                    </c-button>
                  </c-flex>
                </c-box>

                <c-box w="50%" px="2">
                  <c-heading as="h4"> Send a copy to a client </c-heading>
                  <c-flex direction="column">
                    <c-checkbox my="2" default-is-checked>
                      eWorkbook is available for purchase by clients leaving the
                      practice
                    </c-checkbox>
                    <c-text>Active Clients Using this eWorkbook</c-text>
                    <c-box mt="20px" width="100%">
                      <c-box as="table" width="100%">
                        <c-box as="thead">
                          <c-box
                            as="tr"
                            color="#B5B5C3 !important"
                            background-color="#F3F6F9"
                            letter-spacing="1px"
                            px="5px"
                            font-size="0.8rem"
                            text-transform="uppercase"
                            font-weight="600"
                            text-align="left"
                          >
                            <c-box as="th" width="10%">Name</c-box>
                            <c-box as="th" width="10%">Email</c-box>
                            <c-box as="th" width="10%">Answers</c-box>
                          </c-box>
                        </c-box>
                        <c-box as="tbody" py="4">
                          <c-box as="tr">
                            <c-box as="td">Fish Fisherman</c-box>
                            <c-box as="td">fish@fish.com</c-box>
                            <c-box as="td"></c-box>
                          </c-box>
                        </c-box>
                      </c-box>
                    </c-box>
                  </c-flex>
                </c-box>
              </c-flex>
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import AuthorSideBar from '@/components/SideBar/AuthorSidebar.vue'

export default {
  components: {
    'side-bar': SideBar,
    'author-sidebar': AuthorSideBar,
  },

  data() {
    return {
      workbook: {},
    }
  },

  async fetch() {
    const id = this.$route.params.id
    this.workbook = await this.$axios.$get(`api/v1/workbooks/${id}`)
  },
}
</script>
