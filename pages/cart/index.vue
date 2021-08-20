<template font-size="sm">
  <c-box class="container mx-auto" my="10">
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
      <c-heading as="h1" size="lg"> Cart </c-heading>

      <c-flex class="my-10">
        <!-- items list -->
        <c-flex class="py-5 px-4" w="70%">
          <c-box class="w-full">
            <c-flex
              v-for="item in cart"
              :key="item.id"
              class="w-full border border-gray-200 rounded-md p-5 mb-4"
            >
              <!-- image -->
              <c-box>
                <c-image
                  size="100px"
                  src="https://bit.ly/chakra-naruto-uzumaki"
                  alt="Jonathan Bakebwa"
                />
              </c-box>
              <!-- workbook information -->
              <c-box class="mx-5 flex-1">
                <!-- title -->
                <c-text class="text-[20px] font-bold font-ibm mb-1">
                  {{ item.workbook.title }}
                </c-text>

                <!-- author -->
                <c-text class="text-xs text-darkSilver mb-2">
                  {{ item.workbook.owner.username }}
                </c-text>

                <!-- workbook price -->
                <c-text class="text-base text-red-500">
                  {{ item.workbook.price * item.quantity }}$
                </c-text>
              </c-box>

              <c-flex class="items-center justify-between w-1/4">
                <c-flex class="items-center w-20">
                  <c-button
                    size="sm"
                    variant-color="blue"
                    variant="outline"
                    @click="incrementItemQuantity(item.id)"
                  >
                    +
                  </c-button>

                  <c-text class="mx-2">{{ item.quantity }}</c-text>

                  <c-button
                    size="sm"
                    variant-color="blue"
                    variant="outline"
                    :is-disabled="item.quantity === 1"
                    @click="decrementItemQuantity(item.id)"
                  >
                    -
                  </c-button>
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
          </c-box>
        </c-flex>

        <!-- summary -->
        <c-flex class="p-5 h-[350px]" w="30%">
          <c-flex class="flex-col w-full border border-gray-200 rounded-md p-5">
            <c-heading as="h3" size="md" class="font-bold">
              Order summary
            </c-heading>
            <c-flex class="flex-col w-full">
              <c-flex class="justify-between my-4">
                <c-text class="text-base font-semibold">Subtotal: </c-text>
                <c-text class="text-base text-darkSilver">
                  {{ totalPrice }}$
                </c-text>
              </c-flex>

              <c-flex class="justify-between my-4">
                <c-text class="text-base font-semibold">Shipping: </c-text>
                <c-text class="text-base text-darkSilver">
                  {{ shipping }}$
                </c-text>
              </c-flex>

              <c-divider />

              <c-flex class="justify-between mt-4 mb-10">
                <c-text class="text-base font-semibold">Total: </c-text>
                <c-text class="text-base text-darkSilver">
                  {{ totalPrice + shipping }}$
                </c-text>
              </c-flex>

              <c-button variant-color="blue"> Checkout </c-button>
            </c-flex>
          </c-flex>
        </c-flex>
      </c-flex>
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
      shipping: 30,
    }
  },
  computed: {
    ...mapGetters('cart', {
      cart: 'getCart',
    }),
    totalPrice() {
      const response = this.cart.reduce((prev, item) => {
        return prev + item.workbook.price * item.quantity
      }, 0)

      return response
    },
  },
  methods: {
    ...mapActions({
      increase: 'cart/incrementQuantity',
      decrease: 'cart/decrementQuantity',
      removeItem: 'cart/removeWorkbook',
    }),
    incrementItemQuantity(itemId) {
      this.increase(itemId)
    },
    decrementItemQuantity(itemId) {
      this.decrease(itemId)
    },
    removeItemFromCart(itemId) {
      this.removeItem(itemId)
    },
  },
  // async fetch() {
  //   try {
  //     this.workbooks = await this.$axios.$get('api/v1/workbooks')
  //   } catch (error) {
  //     this.$toast({
  //       title: 'Failed',
  //       description: 'Something wrong happen',
  //       status: 'error',
  //       duration: 2000,
  //       position: 'top-right',
  //     })
  //   }
  // },
}
</script>
