<template>
  <c-box class="container mx-auto py-24">
    <c-box class="px-6 md:px-12">
      <!-- All workbooks -->
      <c-text class="mb-5 text-3xl">All workbooks</c-text>
      <c-box
        class="border border-gray-200"
        box-shadow="0px 0px 1px 1px #E2E8F0"
      >
        <c-flex v-if="!isEmpty" class="items-center flex-wrap p-8">
          <c-box
            v-for="workbook in sortedWorkbooks"
            :key="workbook.id"
            class="workbook relative w-full p-3 md:w-1/3 md:p-2 lg:w-1/4 lg:p-4"
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
                  class="
                    text-[20px] text-eerieBlack
                    leading-[26px]
                    font-semibold
                  "
                >
                  {{ workbook.title }}
                </p>

                <p class="text-darkSilver text-[13px] uppercase font-semibold">
                  {{ workbook.owner.username }}
                </p>

                <p class="text-darkSilver text-[13px]">
                  Last open:
                  {{ $dayjs(workbook.created).format('MM DD YYYY') }}
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
  </c-box>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  data() {
    return {
      workbooks: [],
      workbookID: 0,
      coordinateX: 0,
      coordinateY: 0,
      isEmpty: false,
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
