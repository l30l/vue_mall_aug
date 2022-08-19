<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-all-btn></check-all-btn>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：</span>
    </div>
    <div class="check-out">去支付()</div>
  </div>
</template>

<script>
import CheckAllBtn from '@/components/common/checkAllBtn/CheckAllBtn.vue'
export default {
  name: 'CartBottomBar',
  components: {
    CheckAllBtn
  }
}
</script>

<style lang="less" scoped>
.cart-bottom-bar {
  display: flex;
  position: fixed;
  bottom: 49px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #eee;
}
.check-all {
  flex: 1;
  display: flex;
  margin-left: 15px;
  font-size: 14px;
}
.total-price {
  flex: 1;
  color: var(--color-high-text);
}
.check-out {
  padding: 0 20px;
  background: #ff6422;
  color: #fff;
}
</style>
