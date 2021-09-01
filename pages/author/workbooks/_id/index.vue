<template>
  <c-box>
    <c-box v-if="isLoading">
      <loading-screen />
    </c-box>

    <c-flex v-else direction="row" w="100%" min-h="94vh">
      <!-- side bar -->
      <side-bar>
        <c-flex direction="column" w="100%" align="center" as="nav" class="nav">
          <c-box class="w-full sidebar-left">
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

      <!-- content -->
      <c-box w="80%">
        <c-box class="py-5 m-5">
          <c-box class="px-2">
            <c-box>
              <c-heading as="h2" size="md"> eWorkbook Information </c-heading>
            </c-box>

            <c-box class="py-10">
              <c-grid template-columns="repeat(3, 1fr)" gap="6">
                <c-grid-item col-span="1">
                  <c-image
                    :src="workbook.cover_image"
                    alt="workbook"
                    class="mx-auto rounded-md"
                    h="450px"
                  />
                </c-grid-item>

                <c-grid-item col-span="2">
                  <!-- title -->
                  <c-flex
                    class="
                      items-center
                      mb-2
                      text-2xl text-eerieBlack
                      font-semibold font-ibm
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
                      font-semibold font-ibm
                      uppercase
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
                    <c-box as="p" class="mr-2 font-semibold"> Edition: </c-box>
                    <c-box as="p">{{ workbook.edition }}</c-box>
                  </c-flex>

                  <!-- language -->
                  <c-flex
                    class="
                      items-center
                      mb-1
                      text-base text-darkLava
                      font-ibm-momo
                    "
                  >
                    <c-box as="p" class="mr-2 font-semibold"> Language: </c-box>
                    <c-box as="p">{{
                      workbook.language || 'updating...'
                    }}</c-box>
                  </c-flex>

                  <!-- published -->
                  <c-flex
                    class="
                      items-center
                      mb-1
                      text-base text-darkLava
                      font-ibm-momo
                    "
                  >
                    <c-box as="p" class="mr-2 font-semibold">
                      Published:
                    </c-box>
                    <c-box as="p">
                      {{ $dayjs(workbook.created).format('MM/DD/YYYY') }}
                    </c-box>
                  </c-flex>

                  <!-- price -->
                  <c-flex
                    class="
                      items-center
                      mb-1
                      text-base text-darkLava
                      font-ibm-momo
                    "
                  >
                    <c-box as="p" class="mr-2 font-semibold"> Price: </c-box>
                    <c-box as="p">${{ workbook.price }}</c-box>
                  </c-flex>

                  <!-- categories -->
                  <c-flex
                    class="
                      items-center
                      mb-1
                      text-base text-darkLava
                      font-ibm-momo
                    "
                  >
                    <c-box as="p" class="mr-2 font-semibold"> Tags: </c-box>
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
                      mb-4
                      text-base text-darkLava
                      font-ibm-momo
                    "
                  >
                    <c-box as="p" class="mr-2 font-semibold">
                      Share with:
                    </c-box>
                    <c-box as="p">
                      {{ workbook.share ? workbook.share : '' }}
                    </c-box>
                  </c-flex>

                  <!-- description -->
                  <c-box class="text-base text-darkLava font-ibm-momo mb-10">
                    <c-box as="p" class="mb-2 font-semibold">
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

                  <!-- content button -->
                  <nuxt-link :to="`/author/workbooks/${workbook.id}/content`">
                    <c-button variant-color="blue"> Read content </c-button>
                  </nuxt-link>
                </c-grid-item>
              </c-grid>
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-flex>
  </c-box>
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
      this.isLoading = true
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
    } finally {
      this.isLoading = false
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
