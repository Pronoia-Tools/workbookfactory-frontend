<template>
  <c-flex
    :key="componentKey"
    direction="column"
    w="320px"
    as="nav"
    background-color="#FEFBF5"
    class="border-l border-gray-200 py-5"
  >
    <upload-image @update-key="updateKey" />
    <hr />

    <c-box h="55vh" class="px-4 py-5">
      <c-box as="p" class="text-sm font-semibold">Images</c-box>

      <c-flex class="py-5 space-x-2" align-items="center">
        <c-input-group w="210px">
          <c-input-left-element>
            <c-icon name="searchIcon" color="gray.400" text="sm" />
          </c-input-left-element>
          <c-input type="phone" placeholder="Search" />
        </c-input-group>
        <c-icon name="grid" color="blue.700" />
        <c-icon name="list" color="blue.700" />
      </c-flex>

      <images />
    </c-box>
  </c-flex>
</template>

<script>
import UploadImage from '@/components/Upload/UploadImage.vue'
import Images from '@/components/Upload/Images.vue'

export default {
  name: 'Library',
  components: {
    UploadImage,
    Images,
  },
  data() {
    return {
      componentKey: 0,
    }
  },

  // change key of component to re-render after upload image
  methods: {
    updateKey(event) {
      if (this.componentKey > 0) {
        this.componentKey = event - 1
      } else {
        this.componentKey = event + 1
      }
    },
  },
}
</script>
