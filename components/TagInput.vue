<template>
  <c-box class="w-full flex-1">
    <c-input
      type="text"
      placeholder="Enter a Tag"
      @keyup.enter="addTag"
      @keyup.188="addTag"
      @keydown.delete="removeLastTag"
    />
    <c-flex
      v-for="(tag, index) in tagProps"
      :key="index"
      class="
        items-center
        float-left
        h-7
        mr-3
        mt-3
        px-1
        rounded-md
        leading-7
        bg-gray-200
      "
    >
      <span class="cursor-pointer opacity-75 mr-3" @click="removeTag(index)">
        <c-icon size="12px" name="close" />
      </span>
      <span>
        {{ tag }}
      </span>
    </c-flex>
  </c-box>
</template>

<script>
export default {
  name: 'TagInput',
  props: {
    tagList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // tagProps: this.$set([],this.tagList),
    }
  },
  computed: {
    tagProps() {
      console.log('tag list', this.tagList)
      return this.tagList
    },
  },
  methods: {
    addTag(event) {
      event.preventDefault()
      const value = event.target.value.trim()
      if (value.length > 0) {
        this.tagProps.push(value)
        event.target.value = ''
      }

      console.log('button tagProps', this.tagProps)
    },
    removeTag(index) {
      this.tagProps.splice(index, 1)
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.tagProps.length - 1)
      }
    },
  },
}
</script>
