<template>
  <c-box class="container mx-auto my-8">
    <c-box>
      <h1 class="text-3xl font-ibm">Your Library</h1>
    </c-box>
    <c-box
      v-cloak
      v-if="libraries && libraries.length"
      class="my-6 grid grid-flow-col lg:grid-cols-4 lg:gap-4 products"
    >
      <c-box
        v-for="library in libraries"
        :key="library.id"
        class="product-item"
      >
        <workbook-item :workbooks="library.workbooks" />
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import WorkbookItem from '@/components/ItemWorkBook'
export default {
  components: {
    WorkbookItem,
  },
  data() {
    return {
      libraries: [],
    }
  },
  async fetch() {
    const response = await this.$axios.$get('api/v1/libraries')
    this.libraries = response
  },
}
</script>

<style lang="scss">
.product-img:hover .overlay {
  opacity: 1;
}
</style>
