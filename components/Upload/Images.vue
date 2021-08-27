<template>
  <c-box class="image-scroll h-4/5 overflow-y-auto">
    <c-box v-if="isLoading" class="text-eerieBlack">
      <load-more />
    </c-box>

    <c-box
      v-if="images && images.length"
      class="grid grid-cols-2 gap-4 auto-rows-auto"
    >
      <c-box v-for="image in images" :key="image.id" w="100%">
        <c-image
          class="border border-gray-200 rounded-md shadow-sm"
          :src="image.image"
          alt=""
        />
        <!-- <p class="mt-2 text-xs">
          <span
            class="
              block
              overflow-hidden
              font-semibold
              whitespace-nowrap
              overflow-ellipsis
            "
          >
            {{ image.title }}
          </span>
        </p> -->
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import LoadMore from '@/components/Loading/LoadMore.vue'

export default {
  components: { LoadMore },
  data() {
    return {
      images: [],
      isLoading: true,
    }
  },
  async fetch() {
    try {
      this.isLoading = true
      this.images = await this.$axios.$get('/api/v1/images')
    } catch (error) {
      console.log('Error', error)
    } finally {
      this.isLoading = false
    }
  },
}
</script>

<style scoped>
.image-scroll::-webkit-scrollbar {
  display: none;
}
</style>
