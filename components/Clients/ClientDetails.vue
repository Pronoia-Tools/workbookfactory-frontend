<template>
  <c-box class="w-full mx-3 my-10 overflow-hidden">
    <c-flex class="mb-8 flex-wrap items-center md:mb-16">
      <c-box class="w-full mb-6 md:w-2/5">
        <c-image
          :src="require('@/static/default.png')"
          alt="avatar"
          class="
            w-40
            h-40
            md:w-60 md:h-60
            lg:w-80 lg:h-80
            bg-cover bg-no-repeat bg-center
            rounded-full
            mx-auto
          "
        />
      </c-box>

      <c-box class="w-full px-10 md:w-3/5">
        <c-box class="py-1">
          <strong>Name:&nbsp;</strong>{{ clientData.name }}
        </c-box>
        <c-box class="py-1">
          <strong>Date of Birth:&nbsp;</strong>{{ clientData.birth }}
        </c-box>
        <c-box class="py-1">
          <strong>Email:&nbsp;</strong>{{ clientData.email }}
        </c-box>
        <c-box class="py-1">
          <strong>Address:&nbsp;</strong>{{ clientData.address }}
        </c-box>
        <c-box class="py-1">
          <strong>Genre:&nbsp;</strong>{{ clientData.genre }}
        </c-box>
      </c-box>
    </c-flex>

    <c-flex
      class="
        h-52
        hidden-scrollbar
        overflow-x-auto
        mb-10
        overflow-y-auto
        md:h-72
      "
    >
      <c-box as="table" class="w-full border border-gray-200">
        <c-box as="thead" fixed>
          <c-box as="tr">
            <c-box as="th" class="w-1/12">ID</c-box>
            <c-box as="th" class="w-4/12">Book's name</c-box>
            <c-box as="th" class="w-2/12">Buy Date</c-box>
            <c-box as="th" class="w-3/12">Progress</c-box>
            <c-box as="th" class="w-2/12">Solution</c-box>
          </c-box>
        </c-box>
        <c-box as="tbody">
          <c-box v-for="item in paginate" :key="item.id" as="tr">
            <c-box as="td">{{ item.id }}</c-box>
            <c-box as="td">{{ item.name }}</c-box>
            <c-box as="td">{{ item.date }}</c-box>
            <c-box as="td">{{ item.progress }}</c-box>
            <c-box as="td">
              <c-button variant-color="blue">
                <nuxt-link
                  :to="{
                    name: 'answers-id',
                    params: { id: item.id },
                  }"
                  class="nav-link"
                >
                  Go to answer
                </nuxt-link>
              </c-button>
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-flex>

    <pagination
      :current-page="currentPage"
      :total="items.length"
      :per-page="itemsPerPage"
      text-before-input="Go to page"
      text-after-input="Go"
      @page-changed="currentPage = $event"
    />
  </c-box>
</template>

<script>
export default {
  props: {
    clientData: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Yesterday',
          date: '05/02/2020',
          progress: '30/82',
        },
        {
          id: 2,
          name: 'Today',
          date: '05/02/2020',
          progress: '30/82',
        },
        {
          id: 3,
          name: 'Tomorow',
          date: '05/02/2020',
          progress: '30/82',
        },
        {
          id: 4,
          name: 'Yesterday',
          date: '05/02/2020',
          progress: '30/82',
        },
        {
          id: 5,
          name: 'Yesterday',
          date: '05/02/2020',
          progress: '30/82',
        },
        {
          id: 6,
          name: 'Yesterday',
          date: '05/02/2020',
          progress: '30/82',
        },
        {
          id: 7,
          name: 'Yesterday',
          date: '05/02/2020',
          progress: '30/82',
        },
      ],
      currentPage: 1,
      itemsPerPage: 3,
    }
  },
  computed: {
    paginate() {
      const index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.items.slice(index, index + this.itemsPerPage)
    },
  },
}
</script>

<style scoped>
.hidden-scrollbar::-webkit-scrollbar {
  display: none;
}

table > thead > tr > th {
  padding: 10px 0;
}

table > tbody > tr > td {
  text-align: center;
  padding: 6px 0;
}

table > thead > tr:nth-child(odd) {
  background-color: #d3d3d3;
}

table > tbody > tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
