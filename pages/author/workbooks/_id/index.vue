<template>
  <c-flex direction="row" w="100%" min-h="95vh">
    <side-bar>
      <editor-sidebar />
    </side-bar>
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
                  <c-form-control display="flex" align-items="center">
                    <c-form-label width="100px">Title</c-form-label>
                    <c-input
                      flex="1"
                      type="text"
                      :value="workbook.title"
                      readonly="true"
                    />
                  </c-form-control>

                  <c-form-control display="flex" align-items="center">
                    <c-form-label width="100px">By</c-form-label>
                    <c-input flex="1" type="text" readonly="true" />
                  </c-form-control>

                  <c-form-control display="flex">
                    <c-flex w="50%" align-items="center">
                      <c-form-label width="100px"> Edition </c-form-label>
                      <c-input
                        flex="1"
                        type="text"
                        readonly="true"
                        :value="workbook.edition"
                      />
                    </c-flex>
                    <c-flex w="50%" align-items="center">
                      <c-form-label width="100px" px="2">
                        Language
                      </c-form-label>
                      <c-input
                        flex="1"
                        type="text"
                        readonly="true"
                        :value="workbook.language"
                      />
                    </c-flex>
                  </c-form-control>

                  <c-form-control display="flex">
                    <c-flex display="flex" w="80%" align-items="center">
                      <c-form-label width="100px"> Price </c-form-label>
                      <c-input
                        flex="1"
                        type="text"
                        readonly="true"
                        :value="workbook.price"
                      />
                    </c-flex>
                    <c-box display="flex" w="20%" pl="2">
                      <c-select readonly="true">
                        <option selected>USD</option>
                      </c-select>
                    </c-box>
                  </c-form-control>

                  <c-form-control display="flex" align-items="center">
                    <c-form-label width="100px"> Categories </c-form-label>
                    <c-input
                      flex="1"
                      type="text"
                      readonly="true"
                      :value="workbook.categories"
                    />
                  </c-form-control>
                </c-stack>
              </c-grid-item>
            </c-grid>

            <c-box mt="4">
              <c-textarea readonly="true" placeholder="Description" text->{{
                workbook.content
              }}</c-textarea>
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
import EditorSidebar from '@/components/SideBar/EditorSidebar.vue'

export default {
  components: {
    'side-bar': SideBar,
    'editor-sidebar': EditorSidebar,
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
