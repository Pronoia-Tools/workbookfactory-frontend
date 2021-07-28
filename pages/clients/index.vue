<template>
  <c-flex direction="row" w="100%" h="95vh">
    <!-- sidebar with slot -->
    <side-bar>
      <clients-sidebar />
    </side-bar>

    <!-- table clients -->
    <c-box class="w-full mx-3 my-10 overflow-hidden">
      <c-text class="text-3xl mb-32">Client List</c-text>

      <c-box class="w-full overflow-x-auto mb-10" min-height="300px">
        <c-box as="table" class="w-full border border-gray-200">
          <c-box as="thead" class="text-gray-600">
            <c-box as="tr">
              <c-box as="th" class="w-1/12">ID</c-box>
              <c-box as="th" class="w-2/12">Name</c-box>
              <c-box as="th" class="w-2/12">Email</c-box>
              <c-box as="th" class="w-2/12">Start Date</c-box>
              <c-box as="th" class="w-2/12">Last Login</c-box>
              <c-box as="th" class="w-1/12">Outcomes</c-box>
              <c-box as="th" class="w-2/12">Action</c-box>
            </c-box>
          </c-box>
          <c-box as="tbody">
            <c-box v-for="item in paginate" :key="item.id" as="tr">
              <c-box as="td">{{ item.id }}</c-box>
              <c-box as="td">{{ item.name }}-{{ item.id }}</c-box>
              <c-box as="td">{{ item.email }}</c-box>
              <c-box as="td">{{ item.start_date }}</c-box>
              <c-box as="td">{{ item.last_login }}</c-box>
              <c-box as="td">{{ item.outcomes }}</c-box>
              <c-box as="td">
                <c-button variant-color="blue">
                  <nuxt-link
                    :to="{
                      name: 'clients-id',
                      params: { id: item.id },
                    }"
                    class="nav-link"
                  >
                    Details
                  </nuxt-link>
                </c-button>
              </c-box>
            </c-box>
          </c-box>
        </c-box>
      </c-box>

      <pagination
        :current-page="currentPage"
        :total="items.length"
        :per-page="itemsPerPage"
        text-before-input="Go to page"
        text-after-input="Go"
        @page-changed="currentPage = $event"
      />
    </c-box>
  </c-flex>
</template>

<script>
import ClientsSidebar from '../../components/SideBar/ClientsSidebar.vue'

export default {
  components: {
    'clients-sidebar': ClientsSidebar,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 2,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 3,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 4,

          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 5,

          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 6,

          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 7,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 8,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 9,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 10,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 11,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 12,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 13,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 14,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 15,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 16,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 17,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 18,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 19,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
        {
          id: 20,
          name: 'mrAky',
          email: 'mraky09@just.engineer',
          start_date: '06/02/2020',
          last_login: '09/02/2020',
          workBook: 'Yesterday',
          outcomes: '129',
        },
      ],
      currentPage: 1,
      itemsPerPage: 2,
    }
  },
  // async fetch() {
  //   this.items = await this.$axios.$get('/api/v1/workbooks')
  // },
  computed: {
    paginate() {
      if (this.items.length <= this.itemsPerPage) {
        return this.items
      } else {
        const index = this.currentPage * this.itemsPerPage - this.itemsPerPage
        return this.items.slice(index, index + this.itemsPerPage)
      }
    },
  },
}
</script>

<style scoped>
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
