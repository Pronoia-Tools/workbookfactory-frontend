<template>
  <c-flex
    as="ul"
    class="
      pt-5
      lg:p-0
      flex flex-col
      lg:flex-row
      h-full
      lg:h-auto
      text-sm
      font-ibm
      uppercase
      text-quickSilver
    "
  >
    <c-box as="li" class="lg:py-0 h-full">
      <nuxt-link
        class="h-full flex px-4 py-3 lg:px-2 lg:mx-2 items-center"
        to="/"
      >
        <span>Your Library</span>
      </nuxt-link>
    </c-box>
    <c-box as="li" class="lg:py-0 h-full">
      <nuxt-link
        class="h-full flex px-4 py-3 lg:px-2 lg:mx-2 items-center"
        to="/author/workbooks"
      >
        <span>Workbook Factory</span></nuxt-link
      >
    </c-box>
    <c-box as="li" class="lg:py-0 h-full">
      <nuxt-link
        class="h-full flex px-4 py-3 lg:px-2 lg:mx-2 items-center"
        to="/"
      >
        <span>Coach's Dashboard</span></nuxt-link
      >
    </c-box>
    <c-box as="li" class="lg:py-0 h-full">
      <nuxt-link
        class="h-full flex px-4 py-3 lg:px-2 lg:mx-2 items-center"
        to="/marketplace"
        ><span> Marketplace</span></nuxt-link
      >
    </c-box>
  </c-flex>
</template>

<style scoped>
a.nuxt-link-exact-active {
  border-bottom: 3px #215ed8 solid;
}
</style>
