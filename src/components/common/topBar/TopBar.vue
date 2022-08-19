<template>
  <div class="top-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style lang="less" scoped>
.top-bar {
  display: flex;
  position: relative;
  z-index: 9;
  width: 100%;
  height: 44px;
  background: var(--color-tint);
  line-height: 44px;
  text-align: center;
  color: #fff;
}
.left,
.right {
  width: 60px;
}
.middle {
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
