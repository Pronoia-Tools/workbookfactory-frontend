<template>
  <c-flex direction="row" w="100%" h="95vh">
    <side-bar>
      <clients-sidebar />
    </side-bar>
    <client-answers />
  </c-flex>
</template>

<script>
import ClientsSidebar from '../../components/SideBar/ClientsSidebar.vue'
import ClientAnswers from '../../components/Clients/ClientAnswers.vue'

export default {
  components: {
    'clients-sidebar': ClientsSidebar,
    'client-answers': ClientAnswers,
  },
}
</script>
