<template>
  <c-flex direction="row" w="100%" min-h="95vh">
    <side-bar>
      <author-sidebar />
    </side-bar>
    <c-box class="w-full lg:w-4/5" overflow="hidden">
      <c-box mx="4" my="5" py="5" background-color="#fff">
        <c-box px="2rem">
          <!-- create & search -->
          <c-flex class="items-center mt-5 justify-between">
            <!-- create -->
            <nuxt-link to="/author/workbooks/create">
              <c-button
                right-icon="arrow-forward"
                variant-color="blue"
                variant="outline"
              >
                Create new workbook
              </c-button>
            </nuxt-link>

            <!-- search -->
            <c-input-group>
              <c-input-left-element>
                <c-icon name="searchIcon" color="gray.300" />
              </c-input-left-element>
              <c-input type="text" placeholder="Search" />
            </c-input-group>
          </c-flex>

          <!-- list of workbooks -->
          <c-box min-height="300px" mt="20px" width="100%" overflow-x="auto">
            <c-box as="table" width="100%">
              <!-- table head -->
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
                  <c-box as="th" width="10px"> # </c-box>
                  <c-box as="th" width="400px">Title</c-box>
                  <c-box as="th" width="100px">Published</c-box>
                  <c-box as="th" width="50px">Edition</c-box>
                  <c-box as="th" width="100px">Language</c-box>
                  <c-box as="th" width="100px">Price</c-box>
                  <c-box as="th" width="100px">Status</c-box>
                  <c-box as="th" width="100px"></c-box>
                </c-box>
              </c-box>

              <!-- table body -->
              <c-box
                v-if="workbooks.length > 0"
                as="tbody"
                py="4"
                font-size="sm"
              >
                <c-box v-for="workbook in workbooks" :key="workbook.id" as="tr">
                  <c-box as="td">{{ workbook.id }}</c-box>
                  <c-box as="td">{{ workbook.title }}</c-box>
                  <c-box as="td">{{ workbook.published || '---' }}</c-box>
                  <c-box as="td" class="text-center">
                    {{ workbook.edition }}
                  </c-box>
                  <c-box as="td">{{ workbook.language }}</c-box>
                  <c-box as="td">
                    {{ workbook.price }} {{ workbook.curency }}
                  </c-box>

                  <c-box as="td">
                    <span v-if="workbook.published">
                      Published to marketplace
                    </span>
                    <span v-else-if="!workbook.published && workbook.editable">
                      Uneditable
                    </span>
                    <span v-else> Draft </span>
                  </c-box>

                  <c-flex class="items-center" as="td">
                    <!-- preview -->
                    <c-box class="mx-1">
                      <nuxt-link :to="`/author/workbooks/${workbook.id}`">
                        <c-icon-button
                          variant="outline"
                          variant-color="vue"
                          icon="eyeIcon"
                          aria-label="Detail"
                          size="sm"
                        />
                      </nuxt-link>
                    </c-box>

                    <!-- edit -->
                    <c-box class="mx-1">
                      <nuxt-link :to="`/author/workbooks/${workbook.id}/edit`">
                        <c-icon-button
                          variant="outline"
                          variant-color="vue"
                          icon="editIcon"
                          aria-label="Edit"
                          size="sm"
                        />
                      </nuxt-link>
                    </c-box>

                    <!-- delete -->
                    <c-box class="mx-1">
                      <c-icon-button
                        variant="outline"
                        variant-color="vue"
                        icon="trashIcon"
                        aria-label="Trash"
                        size="sm"
                      />
                    </c-box>
                  </c-flex>
                </c-box>
              </c-box>
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import AuthorSidebar from '@/components/SideBar/AuthorSidebar.vue'

export default {
  components: {
    'side-bar': SideBar,
    'author-sidebar': AuthorSidebar,
  },
  props: {},
  data() {
    return {
      workbooks: [],
    }
  },
  async fetch() {
    const response = await this.$axios.$get('api/v1/workbooks')
    this.workbooks = response || []
  },
}
</script>
