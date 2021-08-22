<template>
  <c-box>
    <c-box
      v-if="images && images.length"
      class="grid grid-cols-2 gap-4 auto-rows-auto"
    >
      <c-box v-for="image in images" :key="image.id" w="100%">
        <c-image
          class="rounded-md shadow-sm"
          :src="image.image"
          alt="Jonathan Bakebwa"
        />
        <p class="mt-2 text-xs">
          <span
            class="block overflow-hidden font-semibold  whitespace-nowrap overflow-ellipsis"
          >
            {{ image.title }}
          </span>
        </p>
      </c-box>
    </c-box>
    <c-box v-if="isLoading" class="text-eerieBlack">
      <load-more />
    </c-box>
  </c-box>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LoadMore from '@/components/Loading/LoadMore.vue'

export default {
  components: {
    LoadMore,
  },
  data() {
    return {
      images: [],
      isLoading: true,
    }
  },
  computed: {
    ...mapGetters('upload', {
      getterLibraries: 'getLibraries',
    }),
  },
  watch: {
    getterLibraries(images) {
      this.images = images
    },
  },
  created() {
    // this.getLibrariesImages()
  },
  methods: {
    ...mapActions('upload', {
      getImages: 'getLibrariesImages',
    }),

    async getLibrariesImages() {
      this.isLoading = true
      await this.getImages({})

      this.isLoading = false
    },
  },
}
</script>
