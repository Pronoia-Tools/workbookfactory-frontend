<template>
  <c-flex class="flex-wrap items-center">
    <c-list class="w-full mb-4 lg:w-2/3 lg:mb-0">
      <c-flex class="items-center justify-center lg:justify-start">
        <c-flex class="border border-gray-200 rounded-full">
          <c-list-item
            v-if="hasPrev()"
            class="
              hover:bg-gray-200
              rounded-l-full
              px-3
              py-2
              md:px-4 md:py-3
              my-auto
            "
          >
            <a href="#" class="nav-link" @click.prevent="changePage(prevPage)">
              <c-flex class="items-center justify-center rotate-45">
                <c-box class="-rotate-45">
                  <c-image
                    :src="require('@/static/icons/chevronLeft.svg')"
                    alt="chevron-left"
                    class="w-4"
                  />
                </c-box>
              </c-flex>
            </a>
          </c-list-item>

          <c-list-item v-if="hasFirst()">
            <a href="#" @click.prevent="changePage(1)">
              <c-flex
                class="
                  items-center
                  justify-center
                  rotate-45
                  px-3
                  py-1
                  md:px-4 md:py-2
                  hover:bg-gray-200
                "
              >
                <c-text class="-rotate-45"> 1 </c-text>
              </c-flex>
            </a>
          </c-list-item>

          <c-list-item v-if="hasFirst()" class="px-3 py-1 md:px-4 md:py-2"
            >...</c-list-item
          >

          <c-list-item v-for="(page, index) in pages" :key="index">
            <a href="#" @click.prevent="changePage(page)">
              <c-flex
                :class="{
                  'bg-gray-200 text-blue-600': currentPage === page,
                }"
                class="
                  items-center
                  justify-center
                  rotate-45
                  px-3
                  py-1
                  md:px-4 md:py-2
                  hover:bg-gray-200
                "
              >
                <c-text class="-rotate-45">{{ page }}</c-text>
              </c-flex>
            </a>
          </c-list-item>

          <c-list-item v-if="hasLast()" class="px-3 py-1 md:px-4 md:py-2"
            >...</c-list-item
          >

          <c-list-item v-if="hasLast()">
            <a href="#" @click.prevent="changePage(totalPages)">
              <c-flex
                class="
                  items-center
                  justify-center
                  rotate-45
                  px-3
                  py-1
                  md:px-4 md:py-2
                  hover:bg-gray-200
                "
              >
                <c-text class="-rotate-45">{{ totalPages }}</c-text>
              </c-flex>
            </a>
          </c-list-item>

          <c-list-item
            v-if="hasNext()"
            class="
              hover:bg-gray-200
              rounded-r-full
              px-3
              py-2
              md:px-4 md:py-3
              my-auto
            "
          >
            <a href="#" @click.prevent="changePage(nextPage)">
              <c-flex class="items-center justify-center rotate-45">
                <c-box class="-rotate-45">
                  <c-image
                    :src="require('@/static/icons/chevronRight.svg')"
                    class="w-4"
                    alt="chevron-right"
                  />
                </c-box>
              </c-flex>
            </a>
          </c-list-item>
        </c-flex>
      </c-flex>
    </c-list>

    <c-flex
      v-if="totalPages !== 1"
      class="w-full justify-center items-center pr-4 lg:w-1/3 lg:justify-end"
    >
      <c-box class="pr-2">
        <c-text class="text-gray-400 font-semibold">
          {{ textBeforeInput }}
        </c-text>
      </c-box>

      <c-box class="w-20 pr-3">
        <c-input v-model.number="input" type="text" />
      </c-box>

      <c-button
        class="text-black"
        variant-color="blue"
        variant="outline"
        @click.prevent="changePage(input)"
      >
        {{ textAfterInput }}
      </c-button>
    </c-flex>
  </c-flex>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 9,
    },
    pageRange: {
      type: Number,
      default: 5,
    },
    textBeforeInput: {
      type: String,
      default: 'Go to page',
    },
    textAfterInput: {
      type: String,
      default: 'Go',
    },
  },
  data() {
    return {
      input: '',
    }
  },
  computed: {
    pages() {
      const pages = []
      if (this.totalPages === 1) {
        return pages
      }

      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    rangeStart() {
      if (
        this.currentPage > this.totalPages - this.pageRange &&
        this.totalPages > this.pageRange
      ) {
        return this.totalPages - this.pageRange - 1
      } else {
        return this.currentPage - this.pageRange >= 1 ? this.currentPage - 2 : 1
      }
    },
    rangeEnd() {
      if (
        this.currentPage <= this.pageRange &&
        this.totalPages > this.pageRange
      ) {
        return this.pageRange + 2
      } else {
        return this.currentPage > this.totalPages - this.pageRange
          ? this.totalPages
          : this.currentPage + 2
      }
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    nextPage() {
      return this.currentPage + 1
    },
    prevPage() {
      return this.currentPage - 1
    },
  },
  methods: {
    hasFirst() {
      return this.pages.length !== 0 ? this.rangeStart !== 1 : null
    },
    hasLast() {
      return this.rangeEnd < this.totalPages
    },
    hasPrev() {
      return this.pages.length !== 0 ? this.currentPage >= 1 : null
    },
    hasNext() {
      return this.pages.length !== 0
        ? this.currentPage <= this.totalPages
        : null
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit('page-changed', page)
      }
    },
  },
}
</script>
