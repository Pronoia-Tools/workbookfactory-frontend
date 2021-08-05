<template font-size="sm">
  <c-box class="container mx-auto" my="10">
    <c-box color="#b5b4a1eb">
      <c-breadcrumb separator="›">
        <c-breadcrumb-item>
          <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
        </c-breadcrumb-item>

        <c-breadcrumb-item>
          <c-breadcrumb-link href="#">The desire map</c-breadcrumb-link>
        </c-breadcrumb-item>
      </c-breadcrumb>
    </c-box>
    <c-box>
      <c-grid template-columns="repeat(2, 1fr)" gap="6" my="10">
        <c-grid-item class="mx-auto" col-span="1">
          <c-box>
            <!-- https://bit.ly/chakra-naruto-uzumaki -->
            <c-image :src="require('@/static/workbook.jpg')" alt="workbook" />
          </c-box>
        </c-grid-item>
        <c-grid-item col-span="1">
          <c-heading as="h1" size="lg" class="mb-3 uppercase">
            {{ workbookFields.title }}
          </c-heading>
          <c-text mt="1" color="#b5b4a1eb" font-size="sm">
            By {{ workbookFields.owner ? workbookFields.owner.username : null }}
          </c-text>
          <c-box mt="3">
            <c-box mt="4" color="#b5b4a1eb" font-size="sm">
              <span>Description:</span>
              <span>{{ workbookFields.description }}</span>
            </c-box>
            <c-box mt="4" color="#b5b4a1eb" font-size="sm">
              <span>Price: </span>
              <span>${{ workbookFields.price || 0 }}</span>
            </c-box>
          </c-box>
          <c-button
            mt="6"
            size="md"
            height="50px"
            width="250px"
            border="2px"
            border-color="green.500"
          >
            Add to cart
          </c-button>
        </c-grid-item>
      </c-grid>
      <c-box mt="10" font-size="sm">
        <c-heading as="h3" size="lg">About the workbook</c-heading>
        <c-box m="5" border="2px" border-color="#b5b4a1eb">
          <c-grid template-columns="repeat(2, 1fr)" gap="6" py="10">
            <c-grid-item col-span="1" px="3">
              <c-box mt="2">
                <span>Title: </span>
                <span>{{ workbookFields.title }}</span>
              </c-box>
              <c-box mt="2">
                <span>Author: </span>
                <span>
                  <nuxt-link
                    to="/author/1/profile"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {{
                      workbookFields.owner
                        ? workbookFields.owner.username
                        : null
                    }}
                  </nuxt-link>
                </span>
              </c-box>

              <c-box mt="2">
                <span>Categories: </span>
                <span>
                  <nuxt-link
                    to="/author/1/profile"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Category,
                  </nuxt-link>
                  <nuxt-link
                    to="/author/1/profile"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Category 2,
                  </nuxt-link>
                  <nuxt-link
                    to="/author/1/profile"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Category 3
                  </nuxt-link>
                </span>
              </c-box>
            </c-grid-item>
            <c-grid-item col-span="1" px="3">
              <c-box mt="2">
                <span>Language: </span>
                <span>
                  <nuxt-link
                    to="/author/1/profile"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {{ workbookFields.language }}
                  </nuxt-link>
                </span>
              </c-box>
              <c-box mt="2">
                <span>Edition: </span>
                <span>{{ workbookFields.edition }}</span>
              </c-box>
              <c-box mt="2">
                <span>Created: </span>
                <span>
                  {{ new Date(workbookFields.created).toLocaleString() }}
                </span>
              </c-box>
            </c-grid-item>
          </c-grid>
        </c-box>
        <c-box py="16">
          <c-heading as="h3" size="lg">More by "Danielle LaPorte"</c-heading>
          <c-box align="center" flex-wrap="wrap" mx="-5">
            <c-box py="10">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide w="25%" px="5" py="8">
                  <img src="@/static/default.png" alt="img-workbooks" />
                </swiper-slide>
                <swiper-slide w="25%" px="5" py="8">
                  <img src="@/static/default.png" alt="img-workbooks" />
                </swiper-slide>
                <swiper-slide w="25%" px="5" py="8">
                  <img src="@/static/default.png" alt="img-workbooks" />
                </swiper-slide>
                <swiper-slide w="25%" px="5" py="8">
                  <img src="@/static/default.png" alt="img-workbooks" />
                </swiper-slide>
              </swiper>
            </c-box>
          </c-box>
        </c-box>

        <!-- divider -->
        <c-divider />

        <!-- reviews -->
        <c-box class="mt-10 px-10 py-5">
          <c-button class="mb-10" variant="outline" variant-color="blue">
            Reviews
          </c-button>

          <!-- comment-1 -->
          <c-flex
            class="
              w-full
              flex-wrap
              items-center
              px-3
              py-6
              border-b border-gray-200
            "
          >
            <c-box class="w-full mb-4 md:w-1/6">
              <c-avatar
                name="you"
                size="xl"
                :src="require('@/static/default.png')"
              />
            </c-box>
            <c-box class="w-full md:w-5/6">
              <c-text class="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, nulla laborum repudiandae error delectus perferendis
                porro, ea a inventore molestias nisi reprehenderit ipsa nemo
                quae, iusto quidem id officia eligendi.
              </c-text>
            </c-box>
          </c-flex>

          <!-- comment-2 -->
          <c-flex
            class="
              w-full
              flex-wrap
              items-center
              px-3
              py-6
              border-b border-gray-200
            "
          >
            <c-box class="w-full mb-4 md:w-1/6">
              <c-avatar
                name="you"
                size="xl"
                :src="require('@/static/default.png')"
              />
            </c-box>
            <c-box class="w-full md:w-5/6">
              <c-text class="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, nulla laborum repudiandae error delectus perferendis
                porro, ea a inventore molestias nisi reprehenderit ipsa nemo
                quae, iusto quidem id officia eligendi.
              </c-text>
            </c-box>
          </c-flex>

          <!-- read more -->
          <c-box v-show="readMore">
            <c-flex
              class="
                w-full
                flex-wrap
                items-center
                px-3
                py-6
                border-b border-gray-200
              "
            >
              <c-box class="w-full mb-4 md:w-1/6">
                <c-avatar
                  name="you"
                  size="xl"
                  :src="require('@/static/default.png')"
                />
              </c-box>
              <c-box class="w-full md:w-5/6">
                <c-text class="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, nulla laborum repudiandae error delectus perferendis
                  porro, ea a inventore molestias nisi reprehenderit ipsa nemo
                  quae, iusto quidem id officia eligendi.
                </c-text>
              </c-box>
            </c-flex>
          </c-box>
          <c-box class="mt-10 text-center">
            <c-button variant-color="blue" @click="readMore = !readMore">
              Read more
            </c-button>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

SwiperCore.use([Pagination, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 50,
        loop: true,
        freeMode: true,
        navigation: true,
      },
      workbookFields: {
        title: '',
        language: '',
        price: '',
        currency: '',
        description: '',
        categories: '',
        image: '',
        created: '',
      },
      readMore: false,
    }
  },
  async fetch() {
    const workbookId = this.$route.params.id
    const response = await this.$axios.$get(`api/v1/workbooks/${workbookId}`)
    this.workbookFields = { ...this.workbookFields, ...response }
  },
}
</script>
