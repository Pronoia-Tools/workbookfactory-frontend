<template>
  <c-flex direction="row" w="100%" min-h="95vh">
    <!-- side bar -->
    <side-bar>
      <c-flex direction="column" w="100%" align="center" as="nav" class="nav">
        <c-box class="sidebar-left w-full">
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
      <c-box class="m-5 py-5 bg-white">
        <c-box class="px-2">
          <c-box>
            <c-heading as="h2" size="md"> eWorkbook Information </c-heading>
          </c-box>

          <c-box class="py-10">
            <c-grid template-columns="repeat(3, 1fr)" gap="6">
              <c-grid-item col-span="1">
                <c-image
                  :src="require('@/static/cover.png')"
                  alt="workbook"
                  class="mx-auto"
                />
              </c-grid-item>

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

                  <c-flex class="items-center">
                    <c-text class="font-semibold w-24"> Tags: </c-text>
                    <c-stack
                      v-if="workbook.tags && workbook.tags.length > 0"
                      :spacing="4"
                      align-items="start"
                      is-inline
                    >
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
  data() {
    return {
      workbook: {
        tags: [],
      },
    }
  },
  async fetch() {
    try {
      const id = this.$route.params.id

      this.workbook = await this.$axios.$get(`api/v1/workbooks/${id}`)
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
