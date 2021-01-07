<template>
  <div class="content">
    <div class="header">
      <Header></Header>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from './header/index.vue'
export default {
  data () {
    return {}
  },
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
  .content{
    width: 100%;
    background-color: #E9EEF3;
    .container{
      padding: 20px 30px;
    }
  }
</style>
