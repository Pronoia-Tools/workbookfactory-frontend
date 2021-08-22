<template>
  <c-box class="container mx-auto py-24">
    <loading-screen v-if="isLoading" />

    <c-box v-else class="px-6 md:px-12">
      <c-box as="p" class="text-3xl font-ibm mb-6">Marketplace</c-box>

      <!-- search, filter -->
      <c-box class="mb-9">
        <!-- search -->
        <c-flex class="flex-wrap w-full">
          <c-flex class="w-1/2 items-center">
            <c-box class="w-2/3 mr-4">
              <c-input-group>
                <c-input-left-element>
                  <c-icon name="search" size="24px" color="gray.300" />
                </c-input-left-element>
                <c-input
                  type="text"
                  placeholder="Search workbook name, author"
                />
              </c-input-group>
            </c-box>

            <c-box class="w-1/3">
              <c-button class="w-full font-ibm-momo" variant-color="blue">
                Search
              </c-button>
            </c-box>
          </c-flex>

          <c-flex class="w-1/2 items-center justify-end">
            <c-box class="mr-4">
              <c-select
                border-color="blue.500"
                default="popular"
                placeholder="Select"
                _hover="{border-color: blue.300}"
              >
                <option default value="popular">Popular</option>
                <option value="private">Private</option>
                <option value="author">Author</option>
              </c-select>
            </c-box>

            <c-box>
              <c-button
                :left-icon="!isFilterCollapse ? 'filter' : 'closeIcon'"
                variant="outline"
                variant-color="blue"
                class="w-24"
                @click="isFilterCollapse = !isFilterCollapse"
              >
                {{ !isFilterCollapse ? 'Filter' : 'Close' }}
              </c-button>
            </c-box>
          </c-flex>
        </c-flex>

        <c-collapse
          class="w-full"
          mt="10"
          :starting-height="20"
          :is-open="isFilterCollapse"
        >
          <c-flex class="items-center">
            <!-- language -->
            <c-box class="w-1/4 mr-4">
              <c-text
                class="text-lg font-ibm-momo font-semibold"
                for="language"
              >
                Language
              </c-text>

              <c-select id="language" placeholder="Select language">
                <option value="english">English</option>
                <option value="germany">Germany</option>
                <option value="vietnamese">Vietnamese</option>
              </c-select>
            </c-box>

            <!-- categories -->
            <c-box class="w-1/4 mr-4">
              <c-text
                class="text-lg font-ibm-momo font-semibold"
                for="categories"
              >
                Categories
              </c-text>

              <c-select id="categories" placeholder="Select category">
                <option value="hisotry">History</option>
                <option value="conqueor">Conqueor</option>
                <option value="physics">Physics</option>
              </c-select>
            </c-box>

            <!-- price from -->
            <c-box class="w-1/4 mr-4">
              <c-text
                class="text-lg font-ibm-momo font-semibold"
                for="categories"
              >
                Price from
              </c-text>

              <c-input type="number" />
            </c-box>

            <!-- price to -->
            <c-box class="w-1/4">
              <c-text
                class="text-lg font-ibm-momo font-semibold"
                for="categories"
              >
                Price to
              </c-text>

              <c-input type="number" />
            </c-box>
          </c-flex>
        </c-collapse>
      </c-box>

      <!-- All workbooks -->
      <c-flex v-if="!isEmpty" class="items-center flex-wrap p-8">
        <c-box
          v-for="workbook in sortedWorkbooks"
          :key="workbook.id"
          class="
            workbook
            relative
            w-full
            p-3
            mb-16
            md:w-1/3 md:p-2
            lg:w-1/4 lg:p-4
          "
          @mouseover.native="workbookID = workbook.id"
          @mouseleave.native="workbookID = 0"
          @mousemove="coordinateMouse"
        >
          <nuxt-link :to="`/workbooks/${workbook.id}`">
            <c-image
              :src="require('@/static/cover.png')"
              alt="img-workbooks"
              class="workbook-image h-96 rounded-md"
            />
            <c-box class="product-infomation flex flex-col space-y-1 pt-4">
              <p
                class="text-[20px] text-eerieBlack leading-[26px] font-semibold"
              >
                {{ workbook.title }}
              </p>

              <p class="text-darkSilver text-[13px] uppercase font-semibold">
                {{ workbook.owner.username }}
              </p>
            </c-box>
          </nuxt-link>

          <!-- menu display on hover -->
          <c-box
            v-if="workbookID === workbook.id"
            class="
              bubble-menu
              fixed
              block
              overflow-hidden
              w-60
              border border-gray-200
              rounded-md
              bg-gray-100
              p-4
              z-10
            "
            :top="coordinateY + 10"
            :left="coordinateX + 10"
          >
            <c-text class="mb-4">
              Title: {{ workbook.title || 'updating...' }}
            </c-text>
            <c-text class="mb-4">
              Author:
              {{ workbook.owner ? workbook.owner.username : 'updating...' }}
            </c-text>
            <c-text class="mb-4">
              Language: {{ workbook.language || 'updating...' }}
            </c-text>
            <c-text class="mb-4">
              Description: {{ workbook.desciption || 'updating...' }}
            </c-text>
            <c-text class="mb-4"> Price: {{ workbook.price || 0 }} $ </c-text>
          </c-box>
        </c-box>
      </c-flex>
    </c-box>
  </c-box>
</template>

<script>
import { isEmpty } from 'lodash'
import LoadingScreen from '~/components/Loading/LoadingScreen.vue'

export default {
  components: { LoadingScreen },
  data() {
    return {
      workbooks: [],
      workbookID: 0,
      coordinateX: 0,
      coordinateY: 0,
      isEmpty: false,
      isLoading: true,
      isFilterCollapse: false,
    }
  },

  async fetch() {
    try {
      this.workbooks = await this.$axios.$get('/api/v1/public/workbooks')
      this.isEmpty = isEmpty(this.workbooks)
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

  computed: {
    sortedWorkbooks() {
      return this.workbooks.slice().sort((previous, next) => {
        return previous.id > next.id ? 1 : -1
      })
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },

  methods: {
    coordinateMouse(event) {
      this.coordinateX = event.clientX
      this.coordinateY = event.clientY
    },
  },
}
</script>

<style lang="scss" scoped>
.workbook {
  &:hover {
    .bubble-menu {
      animation-name: showInfor;
      animation-duration: 1s;
    }
  }
}

.workbook-image {
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
}

@keyframes showInfor {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
