<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style lang="less" scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 9;
  width: 43px;
  img {
    width: 100%;
  }
}
</style>
