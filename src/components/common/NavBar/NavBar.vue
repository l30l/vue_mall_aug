<template>
  <div class="nav-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less">
.nav-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 49px;
  background: #f6f6f6;
  box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.04);
}
</style>
