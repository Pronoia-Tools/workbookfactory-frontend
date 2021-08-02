<template>
  <ul class="toc__list">
    <li
      v-for="(heading, index) in headings"
      :key="index"
      class="toc__item"
      :class="`toc__item--${heading.level}`"
    >
      <a :href="`#${heading.id}`">
        {{ heading.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    headings: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.toc {
  opacity: 0.75;
  border-radius: 0.5rem;
  padding: 0.75rem;
  background: rgba(black, 0.1);

  &__list {
    list-style: none;
    padding: 0;

    &::before {
      display: block;
      content: 'Table of Contents';
      font-weight: 700;
      letter-spacing: 0.025rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      opacity: 0.5;
    }
  }

  &__item {
    a:hover {
      opacity: 0.5;
    }

    &--3 {
      padding-left: 1rem;
    }

    &--4 {
      padding-left: 2rem;
    }

    &--5 {
      padding-left: 3rem;
    }

    &--6 {
      padding-left: 4rem;
    }
  }
}
</style>
