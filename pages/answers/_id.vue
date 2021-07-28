<template>
  <c-flex direction="row" w="100%" h="95vh">
    <side-bar>
      <clients-sidebar />
    </side-bar>
    <c-box class="w-full mx-3 my-10">
      <c-flex my="10" direction="row" justify="space-between" align="center">
        <c-text font-size="30px">Book's name</c-text>
        <c-button variant-color="blue">Submission</c-button>
      </c-flex>
      <c-box
        class="scrollbar"
        border="1px"
        border-color="gray.200"
        height="750px"
        mb="10"
        p="5"
        overflow-y="auto"
      >
        <c-list>
          <c-list-item
            v-for="(item, index) in items"
            :id="index"
            :key="index"
            margin-bottom="10px"
          >
            <c-box>
              <c-text>{{ index + 1 }}&#8228;&nbsp; {{ item.question }}</c-text>
              <c-flex mb="3">
                <c-text pl="5" pr="3">Answer&#58;</c-text>
                <c-text>{{ item.answer }}</c-text>
              </c-flex>
              <points mb="3" />
              <comment />
            </c-box>
          </c-list-item>
        </c-list>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import ClientsSidebar from '@/components/SideBar/ClientsSidebar.vue'
import Comment from '@/components/Clients/Comment.vue'
import Points from '@/components/Clients/Points.vue'

export default {
  components: {
    'clients-sidebar': ClientsSidebar,
    comment: Comment,
    points: Points,
  },
  data() {
    return {
      items: [],
    }
  },
  async fetch() {
    const response = await this.$axios.$get('/api/v1/questions')
    return (this.items = response)
  },
}
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
