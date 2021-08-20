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

    <loading-screen v-if="isLoading" />
    <!-- content -->
    <c-box v-else w="80%">
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
                <!-- title -->
                <c-flex
                  class="
                    items-center
                    text-2xl text-eerieBlack
                    font-semibold font-ibm
                    mb-2
                  "
                >
                  <c-box as="p" class="mr-2"> Title: </c-box>
                  <c-box as="p">{{ workbook.title }}</c-box>
                </c-flex>

                <!-- author -->
                <c-flex
                  class="
                    items-center
                    text-base text-darkSilver
                    uppercase
                    font-semibold font-ibm
                    mb-4
                  "
                >
                  <c-box as="p" class="mr-2"> By: </c-box>
                  <c-box as="p">
                    {{
                      workbook.owner ? workbook.owner.username : 'updating...'
                    }}
                  </c-box>
                </c-flex>

                <!-- edition -->
                <c-flex
                  class="
                    items-center
                    text-base text-darkLava
                    font-ibm-momo
                    mb-1
                  "
                >
                  <c-box as="p" class="font-semibold mr-2"> Edition: </c-box>
                  <c-box as="p">{{ workbook.edition }}</c-box>
                </c-flex>

                <!-- language -->
                <c-flex
                  class="
                    items-center
                    text-base text-darkLava
                    font-ibm-momo
                    mb-1
                  "
                >
                  <c-box as="p" class="font-semibold mr-2"> Language: </c-box>
                  <c-box as="p">{{ workbook.language || 'updating...' }}</c-box>
                </c-flex>

                <!-- published -->
                <c-flex
                  class="
                    items-center
                    text-base text-darkLava
                    font-ibm-momo
                    mb-1
                  "
                >
                  <c-box as="p" class="font-semibold mr-2"> Published: </c-box>
                  <c-box as="p">
                    {{ $dayjs(workbook.created).format('MM/DD/YYYY') }}
                  </c-box>
                </c-flex>

                <!-- price -->
                <c-flex
                  class="
                    items-center
                    text-base text-darkLava
                    font-ibm-momo
                    mb-1
                  "
                >
                  <c-box as="p" class="font-semibold mr-2"> Price: </c-box>
                  <c-box as="p">${{ workbook.price }}</c-box>
                </c-flex>

                <!-- categories -->
                <c-flex
                  class="
                    items-center
                    text-base text-darkLava
                    font-ibm-momo
                    mb-1
                  "
                >
                  <c-box as="p" class="font-semibold mr-2"> Tags: </c-box>
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

                <!-- share with -->
                <c-flex
                  class="
                    items-center
                    text-base text-darkLava
                    font-ibm-momo
                    mb-4
                  "
                >
                  <c-box as="p" class="font-semibold mr-2"> Share with: </c-box>
                  <c-box as="p">
                    {{ workbook.share ? workbook.share : '' }}
                  </c-box>
                </c-flex>

                <!-- description -->
                <c-box class="text-darkLava text-base font-ibm-momo">
                  <c-box as="p" class="font-semibold mb-2">
                    Description:
                  </c-box>
                  <c-box
                    as="p"
                    class="font-normal"
                    :class="[
                      readMore ? 'wb-description-show' : 'wb-description',
                    ]"
                  >
                    {{ workbook.description }}
                  </c-box>
                  <c-pseudo-box
                    as="button"
                    class="text-blue-500 underline focus:outline-none"
                    @click="readMore = !readMore"
                  >
                    {{ !readMore ? 'Read more' : 'Hide less' }}
                  </c-pseudo-box>
                </c-box>
              </c-grid-item>
            </c-grid>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import LoadingScreen from '~/components/Loading/LoadingScreen.vue'

export default {
  components: {
    'side-bar': SideBar,
    LoadingScreen,
  },
  data() {
    return {
      workbook: {
        tags: [],
      },
      isLoading: true,
      readMore: false,
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
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },
}
</script>

<style scoped>
.wb-description {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}

.wb-description-show {
  -webkit-line-clamp: 3;
  -webkit-box-orient: horizontal;
  display: -webkit-box;
  overflow: hidden;
}
</style>
