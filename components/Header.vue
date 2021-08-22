<template>
  <c-box box-shadow="0px -1px 0px #AFA99C">
    <c-flex
      class="justify-between h-14 bg-dark-gray border-gray-200 border-b"
      align="center"
      px="15px"
    >
      <c-box display="flex" class="text-sm">
        <nuxt-link to="/">
          <c-image
            w="100%"
            :src="require('@/static/logo.png')"
            alt="Image Logo"
          />
        </nuxt-link>
      </c-box>

      <c-box flex="1" as="nav" pl="10" class="hidden lg:flex h-full">
        <navigator />
      </c-box>

      <c-flex>
        <c-box>
          <c-box class="block lg:hidden">
            <c-button
              _hover="{backgroundColor:transparent }"
              _active="{backgroundColor:transparent}"
              _focus="{outline:none}"
              background-color="transparent"
              outline="none"
              p="2"
              title="Show Navigator"
              @click="showNavigator"
            >
              <c-icon name="menuIcon" />
            </c-button>
          </c-box>
        </c-box>
        <c-box as="ul" class="flex items-center">
          <c-flex class="items-center">
            <!-- cart -->
            <c-box as="li" class="relative px-4">
              <nuxt-link to="/cart">
                <c-image
                  :src="require('@/static/icons/shopping-cart.svg')"
                  alt="shopping-cart"
                  class="w-7 h-7"
                />
              </nuxt-link>
              <c-box
                class="
                  absolute
                  w-5
                  h-5
                  bg-black
                  text-white text-center text-xs
                  border
                  rounded-full
                  -top-1
                  right-1
                "
              >
                {{ cart.length }}
              </c-box>
            </c-box>

            <!-- book -->
            <c-box as="li" class="px-4">
              <c-image
                :src="require('@/static/icons/books.svg')"
                alt="books"
                class="w-7 h-7"
              />
            </c-box>

            <!-- notifications -->
            <c-box as="li" class="px-4">
              <c-image
                :src="require('@/static/icons/bell.svg')"
                alt="bell"
                class="w-7 h-7"
              />
            </c-box>
          </c-flex>

          <c-box as="li" px="2">
            <c-menu>
              <c-menu-button
                _active="{backgroundColor:transparent}"
                _focus="{outline:none}"
                background-color="transparent"
                outline="none"
                px="4"
                py="2"
              >
                <c-image
                  rounded="3px"
                  h="40px"
                  w="40px"
                  src="https://bit.ly/chakra-jonathan-bakebwa"
                  alt="Đặng Kiên"
                />
                <c-icon name="chevron-down" />
              </c-menu-button>
              <c-menu-list>
                <c-menu-divider />
                <c-menu-item>Profile</c-menu-item>
                <c-menu-divider />
                <c-menu-item cursor="pointer" @click="logout()">
                  <span>Logout</span>
                </c-menu-item>
              </c-menu-list>
            </c-menu>
          </c-box>
        </c-box>
      </c-flex>
      <c-box
        v-show="isShowNavigator"
        class="fixed top-0 left-0 h-full w-full z-10"
      >
        <c-box
          class="bg-black h-full w-full opacity-20"
          @click="hideNavigator"
        ></c-box>
        <c-box
          box-shadow="0 1px 9px -3px rgb(0 0 0 / 75%)"
          class="
            absolute
            left-0
            top-0
            flex-col
            bg-dark-gray
            h-full
            w-3/4
            z-20
            lg:w-auto lg:h-auto lg:bg-transparent
          "
        >
          <navigator />
        </c-box>
      </c-box>
    </c-flex>
  </c-box>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navigator from '@/components/Headers/Navigator.vue'

export default {
  components: {
    navigator: Navigator,
  },
  data() {
    return {
      isShowNavigator: false,
    }
  },
  computed: {
    ...mapGetters('cart', {
      cart: 'getCart',
    }),
  },
  methods: {
    ...mapActions('auth', {
      actionLogout: 'logout',
    }),
    logout() {
      this.actionLogout()
      this.$router.go('/login')
    },
    showNavigator() {
      this.isShowNavigator = true
    },
    hideNavigator() {
      this.isShowNavigator = false
    },
  },
}
</script>
