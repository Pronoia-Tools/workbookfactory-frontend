<template>
  <c-flex
    as="ul"
    class="pt-5 lg:p-0 flex flex-col lg:flex-row h-full lg:h-auto text-sm"
  >
    <c-box as="li" class="px-8 py-3 lg:px-4 lg:py-0">
      <nuxt-link to="/"> <span>Your Library</span> </nuxt-link>
    </c-box>
    <c-box as="li" class="px-8 py-3 lg:px-4 lg:py-0">
      <nuxt-link to="/author/workbooks">
        <span>Workbook Factory</span></nuxt-link
      >
    </c-box>
    <c-box as="li" class="px-8 py-3 lg:px-4 lg:py-0">
      <nuxt-link to="/"> <span>Coach's Dashboard</span></nuxt-link>
    </c-box>
    <c-box as="li" class="px-8 py-3 lg:px-4 lg:py-0">
      <nuxt-link to="/marketplace"><span> Marketplace</span></nuxt-link>
    </c-box>
  </c-flex>
</template>

<style scoped>
a.nuxt-link-exact-active {
  color: #3699ff;
}
</style>
