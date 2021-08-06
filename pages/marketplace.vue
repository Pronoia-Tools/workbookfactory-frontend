<template>
  <c-box class="container mx-auto py-24">
    <c-box class="px-6 md:px-12">
      <!-- New releases -->
      <!--<c-box class="mb-12">
        <c-text class="mb-3" font-size="28px">New releases</c-text>
        <c-box
          class="border border-gray-200 p-4"
          box-shadow="0px 0px 1px 1px #E2E8F0"
        >
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
        </c-box>
      </c-box> -->

      <!-- Most popular -->
      <!-- <c-box class="mb-12">
        <c-text class="mb-3" font-size="28px" x>Most popular</c-text>
        <c-box
          class="boder border-gray-200 p-4"
          box-shadow="0px 0px 1px 1px #E2E8F0"
        >
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <swiper-slide>
              <c-image
                :src="require('@/static/default.png')"
                alt="new-release"
              />
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
        </c-box>
      </c-box> -->

      <!-- All workbooks -->
      <c-box>
        <c-text class="mb-5 text-3xl">All workbooks</c-text>
        <c-box
          class="border border-gray-200"
          box-shadow="0px 0px 1px 1px #E2E8F0"
        >
          <c-box class="mb-10 p-8 border-bottom border-gray-100">
            <c-flex class="mb-6 items-center">
              <c-image
                :src="require('@/static/icons/filter.svg')"
                alt="filter"
                class="w-4 h-4"
              />
              <c-text class="font-semibold ml-2 text-xl">Filter</c-text>
            </c-flex>

            <!-- filter form -->
            <c-flex class="items-center mb-8 flex-wrap">
              <c-box
                class="w-full mb-3 px-4 md:px-10 lg:w-1/2 xl:w-1/3 xl:mb-0"
              >
                <c-input class="mb-3" placeholder="Title" />
                <c-input placeholder="Author" />
              </c-box>

              <c-box
                class="w-full mb-3 px-4 md:px-10 lg:w-1/2 xl:w-1/3 xl:mb-0"
              >
                <c-select class="mb-3" placeholder="Select language">
                  <option value="english">English</option>
                  <option value="germany">Germany</option>
                  <option value="vietnamese">Vietnamese</option>
                </c-select>

                <c-select placeholder="Select category">
                  <option value="hisotry">History</option>
                  <option value="conqueor">Conqueor</option>
                  <option value="physics">Physics</option>
                </c-select>
              </c-box>

              <c-box
                class="
                  w-full
                  px-4
                  mb-3
                  md:px-10
                  lg:flex
                  xl:inline-block xl:w-1/3 xl:mb-0
                "
              >
                <c-flex
                  class="
                    items-center
                    mb-3
                    lg:w-1/2 lg:pr-10 lg:mb-0
                    xl:w-full xl:pr-0 xl:mb-3
                  "
                >
                  <c-flex class="items-center">
                    <c-text class="text-gray-600 mr-3" font-size="1.4rem">
                      $
                    </c-text>
                    <c-number-input :min="0">
                      <c-number-input-field />
                      <c-number-input-stepper>
                        <c-number-increment-stepper />
                        <c-number-decrement-stepper />
                      </c-number-input-stepper>
                    </c-number-input>
                  </c-flex>

                  <c-image
                    :src="require('@/static/icons/dash.svg')"
                    alt="dash"
                    class="w-9 h-4 mx-4"
                  />

                  <c-flex class="items-center">
                    <c-text class="text-gray-600 mr-3" font-size="1.4rem">
                      $
                    </c-text>
                    <c-number-input :min="0">
                      <c-number-input-field />
                      <c-number-input-stepper>
                        <c-number-increment-stepper />
                        <c-number-decrement-stepper />
                      </c-number-input-stepper>
                    </c-number-input>
                  </c-flex>
                </c-flex>

                <c-box class="lg:w-1/2 lg:pl-10 xl:w-full xl:pl-0">
                  <c-select placeholder="Arrange by">
                    <option value="release-date">Release date</option>
                    <option value="most-views">Most views</option>
                    <option value="price">Price</option>
                  </c-select>
                </c-box>
              </c-box>
            </c-flex>

            <!-- button submit -->
            <c-flex class="w-full justify-end items-center -ml-10">
              <c-button variant-color="blue" variant="outline" class="mr-4">
                Cancel
              </c-button>
              <c-button variant-color="blue">Apply Filters</c-button>
            </c-flex>
          </c-box>

          <c-flex
            v-if="sortedWorkbooks().length"
            class="items-center flex-wrap p-8"
          >
            <c-box
              v-for="workbook in sortedWorkbooks()"
              :key="workbook.id"
              class="
                workbook
                relative
                w-full
                p-3
                md:w-1/3 md:p-2
                lg:w-1/4 lg:p-4
              "
              @mouseover.native="workbookID = workbook.id"
              @mouseleave.native="workbookID = 0"
              @mousemove="coordinateMouse"
            >
              <nuxt-link :to="`/workbooks/${workbook.id}`">
                <c-image
                  :src="require('@/static/workbook.jpg')"
                  alt="img-workbooks"
                  class="h-96"
                />
              </nuxt-link>
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
                  Title: {{ workbook.title || 'updating...' }} {{ workbook.id }}
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
                <c-text class="mb-4">
                  Price: {{ workbook.price || 0 }} $
                </c-text>
              </c-box>
            </c-box>
          </c-flex>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 50,
        freeMode: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      workbooks: [],
      workbookID: 0,
      coordinateX: 0,
      coordinateY: 0,
    }
  },
  async fetch() {
    this.workbooks = await this.$axios.$get('/api/v1/public/workbooks')
  },
  methods: {
    coordinateMouse(event) {
      this.coordinateX = event.clientX
      this.coordinateY = event.clientY
    },
    sortedWorkbooks() {
      return this.workbooks.slice().sort((previous, next) => {
        return previous.id > next.id ? 1 : -1
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  // height: 300px;
  width: 100%;
  .swiper-slide {
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
}

.workbook:hover {
  .bubble-menu {
    animation-name: showInfor;
    animation-duration: 1s;
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
