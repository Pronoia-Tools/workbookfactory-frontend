<template>
  <c-flex class="" direction="row" w="100%" min-h="95vh">
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
              <nuxt-link to="/" class="flex p-4">
                <c-flex class="items-center w-full">
                  <span class="flex-1"> Customer</span>
                </c-flex>
              </nuxt-link>
            </c-box>
          </c-box>
        </c-box>
      </c-flex>
    </side-bar>
    <c-box class="w-full font-mono lg:w-4/5" overflow="hidden">
      <c-box mx="4" my="5" py="5">
        <c-box px="2rem">
          <!-- create & search -->
          <c-flex class="items-center justify-between mt-5">
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
                    
                    <!-- go to editor -->
                    <c-box class="mx-1">
                      <nuxt-link :to="`/author/workbooks/${workbook.id}/editor`">
                        <c-icon-button
                          variant="outline"
                          variant-color="vue"
                          icon="arrow-forward"
                          aria-label="Edit"
                          size="sm"
                        />
                      </nuxt-link>
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

export default {
  components: {
    'side-bar': SideBar,
  },
  props: {},
  data() {
    return {
      workbooks: [],
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.$get('api/v1/workbooks')
      this.workbooks = response || []
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
}
</script>
