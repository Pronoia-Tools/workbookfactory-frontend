<template>
  <c-flex
    direction="column"
    w="320px"
    as="nav"
    background-color="#FEFBF5"
    class="border py-5"
  >
    <upload-image />
    <hr />

    <c-box class="px-4 py-5">
      <c-flex class="justify-between font-semibold">
        <c-text size="sm" class="text-sm">Images</c-text>
        <c-heading as="h4" size="sm" class="text-sm text-blue-700">
          <c-icon w="5" name="plus" class="icon" />
          Upload
        </c-heading>
      </c-flex>

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

      <c-box class="">
        <images />
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import UploadImage from '@/components/Upload/UploadImage.vue'
import Images from '@/components/Upload/Images.vue'

export default {
  components: {
    UploadImage,
    Images,
  },
}
</script>
