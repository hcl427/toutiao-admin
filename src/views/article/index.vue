<template>
<!-- 发布文章内容页面 -->
  <div class="article-container">
    <!-- 上部内容 -->
    <Card></Card>
    <!-- 数据列列表 -->
    <Tabel></Tabel>
  </div>
</template>
<script>
import Card from './comp/card.vue'
import Tabel from './comp/tabel'
export default {
  data () {
    return {}
  },
  components: {
    Card,
    Tabel
  }
}
</script>
<style lang="less" scoped></style>
