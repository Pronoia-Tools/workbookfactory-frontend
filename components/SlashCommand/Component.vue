<template>
  <c-box class="items">
    <c-button
      v-for="(item, index) in items"
      :key="index"
      class="item"
      :class="{ 'is-selected': index === selectedIndex }"
      @click="selectItem(index)"
    >
      <c-flex class="items-center">
        <c-image
          :src="require('@/static/icons/heading-solid.svg')"
          alt="slash-heading"
          class="w-7 h-7 mr-4"
        />

        <c-box>
          <c-text class="text-base font-semibold text-eerieBlack">
            {{ item.title }}
          </c-text>
          <c-text class="text-xs font-normal text-darkSilver">
            {{ item.description }}
          </c-text>
        </c-box>
      </c-flex>
    </c-button>
  </c-box>
</template>

<script>
export default {
  name: 'SlashCommandComponent',
  props: {
    items: {
      type: Array,
      required: true,
    },

    command: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      selectedIndex: 0,
    }
  },

  watch: {
    items() {
      this.selectedIndex = 0
    },
  },

  methods: {
    onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        this.upHandler()
        return true
      }

      if (event.key === 'ArrowDown') {
        this.downHandler()
        return true
      }

      if (event.key === 'Enter') {
        this.enterHandler()
        return true
      }

      return false
    },

    upHandler() {
      this.selectedIndex =
        (this.selectedIndex + this.items.length - 1) % this.items.length
    },

    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length
    },

    enterHandler() {
      this.selectItem(this.selectedIndex)
    },

    selectItem(index) {
      const item = this.items[index]

      if (item) {
        this.command(item)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.items {
  position: relative;
  border-radius: 0.25rem;
  background: white;
  color: rgba(black, 0.8);
  overflow: hidden;
  font-size: 0.9rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
}

.item {
  display: block;
  width: 100%;
  height: 64px;
  text-align: left;
  background: #fff;
  border: none;
  padding: 0.5rem 1rem;
  color: #262015;

  &.is-selected,
  &:hover {
    background-color: #e8e8e8;
  }
}
</style>
