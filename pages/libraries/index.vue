<template>
  <c-box class="container mx-auto my-8 px-4">
    <loading-screen v-if="isLoading" />

    <c-box v-else class="w-full">
      <c-box class="mb-6">
        <h1 class="text-3xl font-ibm">Your Library</h1>
      </c-box>
      <c-flex
        v-cloak
        v-if="libraries && libraries.length"
        class="items-center flex-wrap md:space-x-4 lg:space-x-10"
      >
        <c-box
          v-for="library in libraries"
          :key="library.id"
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-[70px] px-2 md:px-0"
        >
          <workbook-item :workbooks="library.workbooks" />
        </c-box>
      </c-flex>
    </c-box>
  </c-box>
</template>

<script>
import WorkbookItem from '@/components/ItemWorkBook'
import LoadingScreen from '~/components/Loading/LoadingScreen.vue'

export default {
  components: {
    WorkbookItem,
    LoadingScreen,
  },
  data() {
    return {
      libraries: [],
      isLoading: true,
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.$get('api/v1/libraries')
      this.libraries = response
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
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },
}
</script>
