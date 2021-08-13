<template>
  <client-only>
    <div class="tag-input">
      <div v-for="(tag, index) in tags" :key="index" class="tag-input__tag">
        <span @click="removeTag(index)">x</span>
        {{ tag }}
      </div>
      <input
        type="text"
        placeholder="Enter a Tag"
        class="tag-input__text"
        @keyup.enter="addTag"
        @keyup.188="addTag"
        @keydown.delete="removeLastTag"
      />
      {{ tags }}
    </div>
  </client-only>
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
    console.log('SET tag list', this.tagList, this.tagList.length)
    return {
      tags: this.$set(this.tagList),
    }
  },

  beforeMount() {
    console.log('====> tags', this.tag)
  },

  methods: {
    addTag(event) {
      event.preventDefault()

      const value = event.target.value.trim()

      if (value.length > 0) {
        this.tags.push(value)
        event.target.value = ''
      }

      console.log('tags', this.tags)
      console.log('tagList', this.tagList)
    },

    removeTag(index) {
      this.tags.splice(index, 1)
    },

    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.tags.length - 1)
      }
    },
  },
}
</script>

<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>
