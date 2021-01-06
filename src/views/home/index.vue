<template>
    <div class="home-container">
      <sidebar></sidebar>
      <container></container>
    </div>
</template>
<script>
import sidebar from '@/components/sidebar/index.vue'
import container from '@/components/container/index.vue'
export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    sidebar,
    container
  }
}
</script>
