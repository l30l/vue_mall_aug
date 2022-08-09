<template>
  <div id="app">
    <router-view></router-view>
    <main-nav-bar></main-nav-bar>
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
