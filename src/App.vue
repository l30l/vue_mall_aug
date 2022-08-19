<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-nav-bar v-if="$route.meta.flag"></main-nav-bar>
  </div>
</template>

<script>
import MainNavBar from './components/content/mainNavBar/MainNavBar.vue'

export default {
  name: 'App',
  components: {
    MainNavBar
  }
}
</script>

<style lang="less">
@import './assets/css/base.css';
</style>
