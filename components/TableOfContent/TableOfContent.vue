<template>
  <nav class="mx-6 my-6 toc__list">
    <ul v-if="headings.length > 0" class="px-2 py-4 text-darkSilver">
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
  </nav>
</template>

<script>
export default {
  name: 'TableOfContent',
  props: {
    headings: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {},
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
    }
  }

  &__item {
    font-size: 14px;
    padding-top: 4px;
    a:hover {
      opacity: 0.5;
    }

    &--2 {
      padding-left: 1rem;
    }

    &--3 {
      padding-left: 2rem;
    }

    &--4 {
      padding-left: 3rem;
    }

    &--5 {
      padding-left: 4rem;
    }
  }
}
</style>
