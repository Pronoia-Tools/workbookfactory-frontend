<template>
  <c-flex direction="row" w="100%" h="95vh">
    <side-bar>
      <c-flex
        direction="column"
        w="100%"
        align="flex-start"
        as="nav"
        class="nav"
      >
        <c-flex
          my="10px"
          w="100%"
          border-bottom="1px"
          border-color="gray.200"
          py="8"
          pl="8"
          justify="space-between"
          align="center"
        >
          <c-text font-size="20px" cursor="default">Clients</c-text>
          <c-image
            :src="require('@/static/icons/chevronDown.svg')"
            alt="chevron-down"
            class="w-4 h-4"
          />
        </c-flex>
        <c-list>
          <c-list-item px="8" py="4">
            <c-box> Client Listing </c-box>
          </c-list-item>
        </c-list>
      </c-flex>
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
import Comment from '@/components/Clients/Comment.vue'
import Points from '@/components/Clients/Points.vue'

export default {
  components: {
    comment: Comment,
    points: Points,
  },
  data() {
    return {
      items: [],
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.$get('/api/v1/questions')
      this.items = response
    } catch (error) {
      this.$toast({
        title: 'Failed',
        description: 'Something wrong happen',
        status: 'error',
        duration: 2000,
        position: 'top-right',
      })
    }
  },
}
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
