<template font-size="sm">
  <c-box class="container mx-auto" my="10">
    <loading-screen v-if="isLoading" />

    <c-box v-else class="w-full">
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
        <c-box as="p" class="mb-10 text-3xl font-semibold font-ibm">
          Cart
        </c-box>
        <c-box v-if="cart.length === 0" as="p" class="font-ibm-momo">
          There are no items in cart.
        </c-box>

        <c-flex v-else class="items-start my-10">
          <!-- items list -->
          <c-flex class="flex-wrap w-2/3 p-4">
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

          <!-- summary -->
          <c-flex class="w-1/3 p-5">
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

                <c-button variant-color="blue"> Checkout </c-button>
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

export default {
  components: {},
  data() {
    return {
      workbooks: [],
      isLoading: true,
    }
  },

  computed: {
    ...mapGetters('cart', {
      cart: 'getCart',
    }),
    totalPrice() {
      console.log('cart', this.cart)
      const response = this.cart.reduce((prev, item) => {
        return prev + item.workbook.price * item.quantity
      }, 0)

      return response
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
  },
}
</script>
