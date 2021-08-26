<template>
  <c-box
    class="w-full lg:w-80 fixed top-0 left-0 lg:relative lg:flex z-10 lg:z-0"
  >
    <c-box class="block lg:hidden fixed left-2 top-16">
      <c-button
        _hover="{backgroundColor:white }"
        _active="{backgroundColor:white}"
        _focus="{outline:none}"
        background-color="white"
        outline="none"
        p="2"
        title="Show Sidebar"
        @click="showSideBar"
      >
        <c-icon name="chevronRight" />
      </c-button>
    </c-box>

    <c-box
      :class="{ hidden: !isShowSidebar }"
      class="fixed w-full h-full top-0 left-0 z-10 lg:relative lg:flex"
    >
      <c-box
        class="block bg-black h-full w-full opacity-20 lg:hidden"
        @click="hideSideBar"
      ></c-box>
      <c-box
        class="
          w-3/4
          absolute
          left-0
          top-0
          flex-col
          bg-dark-gray
          h-full
          z-20
          lg:relative lg:w-full
          border-r border-gray-200
        "
        direction="column"
      >
        <slot></slot>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isShowSidebar: false,
    }
  },
  methods: {
    showSideBar() {
      this.isShowSidebar = true
    },

    hideSideBar() {
      this.isShowSidebar = false
    },
  },
}
</script>
