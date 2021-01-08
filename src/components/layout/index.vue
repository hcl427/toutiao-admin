<template>
    <div class="layout-container">
      <Sidebar></Sidebar>
      <Container></Container>
    </div>
</template>
<script>
import Sidebar from '@/components/sidebar/index.vue'
import Container from '@/components/container/index.vue'
export default {
  name: 'layout',
  data () {
    return {}
  },
  components: {
    Sidebar,
    Container
  }
}
</script>
<style lang="less" scoped>
  .layout-container{
    display: flex;
  }
</style>
