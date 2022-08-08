<template>
  <div class="home-top-bar">
    <top-bar>
      <span slot="middle">购物街</span>
    </top-bar>
  </div>
</template>

<script>
import TopBar from '@/components/common/topBar/TopBar.vue'
export default {
  name: 'HomeTopBar',
  components: {
    TopBar
  }
}
</script>

<style lang="less"></style>
