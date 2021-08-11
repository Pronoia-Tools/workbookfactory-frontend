<template>
  <c-flex direction="column" w="100%" align="center" as="nav" class="nav">
    <c-box class="sidebar-left">
      <c-box as="ul" class="mt-4 text-sm">
        <c-box as="li" class="">
          <nuxt-link to="" class="p-4 flex">
            <c-flex class="w-full items-center">
              <span class="flex-1"> Sale</span>
            </c-flex>
          </nuxt-link>
        </c-box>
        <c-box as="li" class="">
          <nuxt-link to="author/workbooks" class="p-4 flex">
            <c-flex class="w-full items-center">
              <span class="flex-1"> Workbooks</span>
              <c-icon w="5" name="chevronRight" class="icon" />
            </c-flex>
          </nuxt-link>
          <c-box as="ul">
            <c-box as="li" class="">
              <nuxt-link
                to="/author/workbooks/create"
                class="p-4 flex items-center"
              >
                <span class="ml-2 flex-1 font-bold">
                  Create New Workbook
                  <c-icon w="5" name="plus" class="icon" />
                </span>
              </nuxt-link>
            </c-box>
          </c-box>
        </c-box>
        <c-box as="li" class="">
          <nuxt-link to="/" class="p-4 flex">
            <c-flex class="w-full items-center">
              <span class="flex-1"> Customer</span>
            </c-flex>
          </nuxt-link>
        </c-box>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
export default {}
</script>

<style scoped>
.sidebar-left li > ul li a {
  @apply pl-10;
}
.sidebar-left li a:hover {
  background-color: #f3f6f9;
}

.nav > div {
  width: 100%;
}

a.nuxt-link-exact-active {
  background-color: #f3f6f9;
}
</style>
