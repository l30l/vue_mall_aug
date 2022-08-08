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

<style lang="less">
.top-bar {
  display: flex;
  width: 100%;
  height: 44px;
  background: var(--color-tint);
  line-height: 44px;
  vertical-align: middle;
  text-align: center;
  color: #fff;
}
.left,
.right {
  width: 60px;
}
.middle {
  flex: 1;
}
</style>
