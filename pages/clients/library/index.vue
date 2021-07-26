<template>
  <c-box class="container mx-auto py-24">
    <c-box class="px-6 md:px-12">
      <c-flex class="items-center justify-center mb-8 lg:justify-start">
        <c-image
          :src="require('@/static/icons/books.svg')"
          class="mr-4 lg:mr-8"
          alt="icons"
        />
        <c-text class="text-3xl">Library</c-text>
      </c-flex>

      <!-- search -->
      <c-flex class="items-center justify-end mb-8">
        <c-flex class="w-full lg:w-1/3">
          <c-input class="mr-3" placeholder="Search" />
          <c-button variant-color="blue" variant="solid"> Search </c-button>
        </c-flex>
      </c-flex>

      <!-- search results -->
      <c-flex class="items-center flex-wrap border border-gray-200">
        <c-flex
          v-for="workbook in workbooks"
          :key="workbook.id"
          class="w-full lg:w-1/2 p-4"
        >
          <c-image
            :src="require('@/static/default.png')"
            class="w-2/5 mr-4 md:mr-8 lg:mr-4"
          />
          <c-box class="w-3/5 pr-3">
            <c-text
              class="
                my-2
                text-sm
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
                md:text-base md:my-4
                xl:text-lg xl:my-6
              "
            >
              Title:&nbsp;{{ workbook.title }}
            </c-text>
            <c-text
              class="
                my-3
                text-sm
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
                md:text-base md:my-4
                xl:text-lg xl:my-6
              "
            >
              Author:&nbsp;{{ workbook.author }}
            </c-text>
            <c-text
              class="
                my-3
                text-sm
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
                md:text-base md:my-4
                xl:text-lg xl:my-6
              "
            >
              Last opened:&nbsp;{{ workbook.last_opened }}
            </c-text>
            <c-text
              class="
                my-3
                text-sm
                whitespace-nowrap
                overflow-hidden overflow-ellipsis
                md:text-base md:my-4
                xl:text-lg xl:my-6
              "
            >
              Chapter:&nbsp;{{ workbook.chapter }}
            </c-text>
            <c-flex class="items-center mt-4 md:mt-6 xl:mt-8">
              <c-text class="text-xs text-blue-400 mr-2 md:text-sm lg:mr-4">
                <nuxt-link
                  :to="{
                    name: 'clients-library-id',
                    params: { id: workbook.id },
                  }"
                  class="nav-link"
                >
                  Open eWorkbook
                </nuxt-link>
              </c-text>
              <c-image
                class="w-4 h-4"
                :src="require('@/static/icons/arrowRight.svg')"
                alt="icons"
              />
            </c-flex>
          </c-box>
        </c-flex>
      </c-flex>
    </c-box>
  </c-box>
</template>

<script>
export default {
  data() {
    return {
      workbooks: [
        {
          id: 1,
          pathImg: 'static/default.png',
          title: 'MrAky',
          author: 'Mikey',
          last_opened: '06/02/2020',
          chapter: 5,
        },
        {
          id: 2,
          pathImg: 'static/default.png',
          title: 'MrAky',
          author: 'Mikey',
          last_opened: '06/02/2020',
          chapter: 5,
        },
        {
          id: 3,
          pathImg: 'static/default.png',
          title: 'MrAky',
          author: 'Mikey',
          last_opened: '06/02/2020',
          chapter: 5,
        },
        {
          id: 4,
          pathImg: 'static/default.png',
          title: 'MrAky',
          author: 'Mikey',
          last_opened: '06/02/2020',
          chapter: 5,
        },
        {
          id: 5,
          pathImg: 'static/default.png',
          title: 'MrAky',
          author: 'Mikey',
          last_opened: '06/02/2020',
          chapter: 5,
        },
        {
          id: 6,
          pathImg: 'static/default.png',
          title: 'MrAky',
          author: 'Mikey',
          last_opened: '06/02/2020',
          chapter: 5,
        },
      ],
    }
  },
}
</script>
