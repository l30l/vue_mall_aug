<template>
  <top-bar>
    <span slot="middle">购物车（{{ totalCount }}）</span>
  </top-bar>
</template>

<script>
import TopBar from '@/components/common/topBar/TopBar.vue'
export default {
  name: 'CartTopBar',
  components: {
    TopBar
  },
  computed: {
    totalCount() {
      return 1
    }
  }
}
</script>

<style></style>
