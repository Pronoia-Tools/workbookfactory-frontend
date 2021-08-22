<template font-size="sm">
  <c-box class="container mx-auto" my="10">
    <loading-screen v-if="isLoading" />

    <c-box v-else class="w-full">
      <!-- bread crumb -->
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

      <!-- content -->
      <c-grid template-columns="repeat(3, 1fr)" gap="6" my="10">
        <c-grid-item col-span="1">
          <!-- workbook image -->
          <c-image
            :src="require('@/static/cover.png')"
            alt="workbook"
            class="mx-auto rounded-md mb-6"
          />

          <!-- add to cart -->
          <c-flex class="w-full justify-center">
            <c-button
              left-icon="cart"
              :is-loading="isLoading"
              loading-text="Adding"
              variant-color="blue"
              @click="addWorkbookToCart(workbookFields)"
            >
              Add to cart
            </c-button>
          </c-flex>
        </c-grid-item>

        <c-grid-item col-span="2">
          <!-- title -->
          <c-heading as="h1" size="lg" class="mb-3 uppercase"> </c-heading>
          <c-flex
            class="
              items-center
              text-2xl text-eerieBlack
              font-semibold font-ibm
              mb-2
            "
          >
            <c-box as="p" class="mr-2"> Title: </c-box>
            <c-box as="p">{{ workbookFields.title }}</c-box>
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
                workbookFields.owner
                  ? workbookFields.owner.username
                  : 'updating...'
              }}
            </c-box>
          </c-flex>

          <!-- edition -->
          <c-flex
            class="items-center text-base text-darkLava font-ibm-momo mb-1"
          >
            <c-box as="p" class="font-semibold mr-2"> Edition: </c-box>
            <c-box as="p">{{ workbookFields.edition }}</c-box>
          </c-flex>

          <!-- language -->
          <c-flex
            class="items-center text-base text-darkLava font-ibm-momo mb-1"
          >
            <c-box as="p" class="font-semibold mr-2"> Language: </c-box>
            <c-box as="p">{{ workbookFields.language || 'updating...' }}</c-box>
          </c-flex>

          <!-- published -->
          <c-flex
            class="items-center text-base text-darkLava font-ibm-momo mb-1"
          >
            <c-box as="p" class="font-semibold mr-2"> Published: </c-box>
            <c-box as="p">
              {{ $dayjs(workbookFields.created).format('MM/DD/YYYY') }}
            </c-box>
          </c-flex>

          <!-- price -->
          <c-flex
            class="items-center text-base text-darkLava font-ibm-momo mb-1"
          >
            <c-box as="p" class="font-semibold mr-2"> Price: </c-box>
            <c-box as="p">${{ workbookFields.price }}</c-box>
          </c-flex>

          <!-- categories -->
          <c-flex
            class="items-center text-base text-darkLava font-ibm-momo mb-1"
          >
            <c-box as="p" class="font-semibold mr-2"> Tags: </c-box>
            <c-stack
              v-if="workbookFields.tags && workbookFields.tags.length > 0"
              :spacing="4"
              align-items="start"
              is-inline
            >
              <c-tag
                v-for="(tag, index) in workbookFields.tags"
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
            class="items-center text-base text-darkLava font-ibm-momo mb-4"
          >
            <c-box as="p" class="font-semibold mr-2"> Share with: </c-box>
            <c-box as="p">
              {{ workbookFields.share ? workbookFields.share : '' }}
            </c-box>
          </c-flex>

          <!-- description -->
          <c-box class="text-darkLava text-base font-ibm-momo">
            <c-box as="p" class="font-semibold mb-2"> Description: </c-box>
            <c-box
              as="p"
              class="font-normal"
              :class="[readMore ? 'wb-description-show' : 'wb-description']"
            >
              {{ workbookFields.description }}
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

      <!-- author's workbook related  -->
      <c-box mt="10" font-size="sm">
        <c-box py="16">
          <c-heading as="h3" size="lg">
            More by
            {{ workbookFields.owner ? workbookFields.owner.username : null }}
          </c-heading>

          <c-box align="center" flex-wrap="wrap" mx="-5">
            <c-box py="4">
              <swiper class="swiper" :options="swiperOption">
                <!-- 1 -->
                <swiper-slide w="25%" px="5" py="8">
                  <img
                    src="@/static/cover.png"
                    alt="img-workbooks"
                    object-fit="cover"
                    class="rounded-md mb-3"
                  />
                  <c-box
                    as="p"
                    class="text-sm text-eerieBlack font-semibold font-ibm"
                  >
                    {{ workbookFields.title }}
                  </c-box>
                </swiper-slide>

                <!-- 2 -->
                <swiper-slide w="25%" px="5" py="8">
                  <img
                    src="@/static/cover.png"
                    alt="img-workbooks"
                    object-fit="cover"
                    class="rounded-md mb-3"
                  />
                  <c-box
                    as="p"
                    class="text-sm text-eerieBlack font-semibold font-ibm"
                  >
                    {{ workbookFields.title }}
                  </c-box>
                </swiper-slide>

                <!-- 3 -->
                <swiper-slide w="25%" px="5" py="8">
                  <img
                    src="@/static/cover.png"
                    alt="img-workbooks"
                    object-fit="cover"
                    class="rounded-md mb-3"
                  />
                  <c-box
                    as="p"
                    class="text-sm text-eerieBlack font-semibold font-ibm"
                  >
                    {{ workbookFields.title }}
                  </c-box>
                </swiper-slide>
              </swiper>
            </c-box>
          </c-box>
        </c-box>

        <c-divider />

        <!-- reviews -->
        <c-box class="mt-10 px-10 py-5">
          <c-box
            as="p"
            class="text-xl text-eerieBlack font-ibm font-semibold mb-4"
          >
            Customer reviews
          </c-box>

          <!-- comment -->
          <c-grid template-columns="repeat(3, 1fr)" gap="6" my="10">
            <!-- 1 -->
            <c-grid-item col-span="1">
              <c-flex class="items-center mb-5">
                <c-image
                  size="50px"
                  object-fit="cover"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  class="rounded-full mr-3"
                />
                <c-box
                  as="p"
                  class="text-base text-eerieBlack font-ibm-momo font-semibold"
                >
                  Herry Cagrill
                </c-box>
              </c-flex>

              <c-box as="p" class="text-sm text-darkLava font-ibm-momo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                recusandae impedit voluptate soluta quas suscipit. Deserunt
                animi id ullam cupiditate facilis sapiente repellendus, culpa
                eligendi ad natus nostrum aliquid aspernatur!
              </c-box>
            </c-grid-item>

            <!-- 2 -->
            <c-grid-item col-span="1">
              <c-flex class="items-center mb-5">
                <c-image
                  size="50px"
                  object-fit="cover"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  class="rounded-full mr-3"
                />
                <c-box
                  as="p"
                  class="text-base text-eerieBlack font-ibm-momo font-semibold"
                >
                  Herry Cagrill
                </c-box>
              </c-flex>

              <c-box as="p" class="text-sm text-darkLava font-ibm-momo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                recusandae impedit voluptate soluta quas suscipit. Deserunt
                animi id ullam cupiditate facilis sapiente repellendus, culpa
                eligendi ad natus nostrum aliquid aspernatur!
              </c-box>
            </c-grid-item>

            <!-- 3 -->
            <c-grid-item col-span="1">
              <c-flex class="items-center mb-5">
                <c-image
                  size="50px"
                  object-fit="cover"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  class="rounded-full mr-3"
                />
                <c-box
                  as="p"
                  class="text-base text-eerieBlack font-ibm-momo font-semibold"
                >
                  Herry Cagrill
                </c-box>
              </c-flex>

              <c-box as="p" class="text-sm text-darkLava font-ibm-momo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                recusandae impedit voluptate soluta quas suscipit. Deserunt
                animi id ullam cupiditate facilis sapiente repellendus, culpa
                eligendi ad natus nostrum aliquid aspernatur!
              </c-box>
            </c-grid-item>
          </c-grid>
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
import { mapActions, mapGetters } from 'vuex'

SwiperCore.use([Pagination, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 50,
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
      isLoading: true,
    }
  },
  async fetch() {
    try {
      const workbookId = this.$route.params.id
      const response = await this.$axios.$get(
        `api/v1/public/workbooks/${workbookId}`
      )
      this.workbookFields = { ...this.workbookFields, ...response }
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
    ...mapGetters('cart', {
      cart: 'getCart',
      isShowmessage: 'getMessage',
    }),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/addWorkbookToCart',
    }),
    async addWorkbookToCart(workbook) {
      this.isLoading = true
      await this.addToCart(workbook)

      if (this.isShowmessage) {
        this.$toast({
          title: 'Failed',
          description: 'This book has been existed in cart.',
          status: 'error',
          duration: 2000,
          position: 'top-right',
        })
        this.isLoading = false
      } else {
        this.isLoading = false
        this.$toast({
          title: 'Success',
          description: 'This book has been added to cart.',
          status: 'success',
          duration: 2000,
          position: 'top-right',
        })
      }
    },
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
