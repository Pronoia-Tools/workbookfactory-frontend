<template>
  <c-flex direction="row" w="100%">
    <side-bar>
      <editor-sidebar />
    </side-bar>
    <c-box w="60%" px="10" py="10"> </c-box>
    <library />
  </c-flex>
</template>

<script>
import Library from '@/components/Upload/Library.vue'
import SideBar from '../components/SideBar.vue'
import EditorSidebar from '../components/SideBar/EditorSidebar.vue'

export default {
  components: {
    'side-bar': SideBar,
    'editor-sidebar': EditorSidebar,
    library: Library,
  },
  data() {
    return {
      preDefinedComponents: [],
      content: `<toc></toc>
        <h2>1 heading</h2>
        <p>paragraph</p>
        <h3>1.1 heading</h3>
        <p>paragraph</p>
        <h3>1.2 heading</h3>
        <p>paragraph</p>
        <h2>2 heading</h2>
        <p>paragraph</p>
        <h3>2.1 heading</h3>
        <p>paragraph</p>`,
    }
  },
}
</script>
