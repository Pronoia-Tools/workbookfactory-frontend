<template font-size="sm">
  <c-box class="container mx-auto" my="10">
    <loading-screen v-if="isLoading" />

    <c-box v-else class="w-full">
      <!-- breadcrumb -->
      <c-box color="#b5b4a1eb">
        <c-breadcrumb separator="›">
          <c-breadcrumb-item>
            <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
          </c-breadcrumb-item>

          <c-breadcrumb-item is-current-page>
            <c-breadcrumb-link href="#">Cart</c-breadcrumb-link>
          </c-breadcrumb-item>
        </c-breadcrumb>
      </c-box>

      <c-box my="5">
        <!-- title -->
        <c-box as="p" class="mb-10 text-3xl font-semibold font-ibm">
          Cart
        </c-box>

        <!-- no items in cart -->
        <c-box v-if="cart.length === 0" as="p" class="font-ibm-momo">
          There are no items in cart.
        </c-box>

        <c-flex v-else class="items-start my-14">
          <!-- items list -->
          <c-flex class="flex-wrap w-2/3 px-4">
            <c-flex
              v-for="item in cart"
              :key="item.id"
              class="
                justify-between
                items-center
                w-full
                border border-gray-200
                rounded-md
                p-5
                mb-4
              "
            >
              <c-flex>
                <!-- image -->
                <c-image
                  size="100px"
                  :src="item.workbook.cover_image"
                  alt="workbook-image"
                  class="rounded-md"
                />
                <!-- workbook information -->
                <c-box class="mx-5 flex-1">
                  <!-- title -->
                  <c-text class="text-[20px] font-bold font-ibm mb-1">
                    {{ item.workbook.title }}
                  </c-text>

                  <!-- author -->
                  <c-text class="text-xs text-darkSilver mb-2">
                    {{ item.workbook.owner.username || 'updating...' }}
                  </c-text>

                  <!-- workbook price -->
                  <c-text class="text-base text-red-500">
                    {{ item.workbook.price * item.quantity }}$
                  </c-text>
                </c-box>
              </c-flex>

              <!-- remove action -->
              <c-box class="mx-5">
                <c-icon-button
                  variant="outline"
                  variant-color="red"
                  icon="trashIcon"
                  aria-label="Trash"
                  size="sm"
                  @click="removeItemFromCart(item.id)"
                />
              </c-box>
            </c-flex>
          </c-flex>

          <!-- checkout -->
          <c-flex class="w-1/3 px-4">
            <c-flex
              class="flex-col w-full border border-gray-200 rounded-md p-5"
            >
              <c-heading as="h3" size="md" class="font-bold">
                Order summary
              </c-heading>

              <c-divider />

              <c-flex class="flex-col w-full">
                <c-flex class="justify-between mt-4 mb-10">
                  <c-text class="text-base font-semibold">Total: </c-text>
                  <c-text class="text-base text-darkSilver">
                    {{ totalPrice }}$
                  </c-text>
                </c-flex>

                <!-- stripe checkout -->
                <c-flex class="justify-center w-full">
                  <stripe-checkout
                    ref="checkoutRef"
                    mode="payment"
                    :pk="publishableKey"
                    :line-items="listPriceId"
                    :success-url="successURL"
                    :cancel-url="cancelURL"
                    @loading="(v) => (loading = v)"
                  />
                  <c-button class="w-1/2" variant-color="blue" @click="submit">
                    Checkout
                  </c-button>
                </c-flex>
              </c-flex>
            </c-flex>
          </c-flex>
        </c-flex>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { StripeCheckout } from '@vue-stripe/vue-stripe'

export default {
  components: { 'stripe-checkout': StripeCheckout },
  data() {
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY

    return {
      workbooks: [],
      isLoading: true,
      loading: false,
      lineItems: [],
      successURL: 'http://localhost:3000/',
      cancelURL: 'http://localhost:3000/',
    }
  },

  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
      loginStatus: 'auth/getLoginStatus',
    }),
    totalPrice() {
      const response = this.cart.reduce((prev, item) => {
        return prev + item.workbook.price * item.quantity
      }, 0)

      return response
    },
    listPriceId() {
      this.cart.map((item) =>
        this.lineItems.push({
          price: item.workbook.cached_stripe_price_id, // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        })
      )

      return this.lineItems
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },

  methods: {
    ...mapActions({
      removeItem: 'cart/removeWorkbook',
    }),

    removeItemFromCart(itemId) {
      this.removeItem(itemId)
    },

    submit() {
      // You will be redirected to Stripe's secure checkout page
      if (this.loginStatus === false) {
        this.$router.push('/login')
      } else {
        this.$refs.checkoutRef.redirectToCheckout()
      }
    },
  },
}
</script>
