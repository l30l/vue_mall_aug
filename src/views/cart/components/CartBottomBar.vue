<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-btn :isChecked="isSelectAll" @click.native="checkAllClick"></check-btn>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：{{ totalPrice }}</span>
    </div>
    <div class="check-out">去支付({{ purchaseCount }})</div>
  </div>
</template>

<script>
import CheckBtn from '@/components/common/checkBtn/CheckBtn.vue'
export default {
  name: 'CartBottomBar',
  components: {
    CheckBtn
  },
  methods: {
    checkAllClick() {
      this.$store.dispatch('selectAll', this.isSelectAll)
    }
  },
  computed: {
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.some((item) => !item.checked)
    },
    purchaseCount() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((pre, cur) => {
          return pre + cur.count
        }, 0)
    },
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((pre, cur) => {
          return pre + cur.count * cur.price
        }, 0)
        .toFixed(2)
    }
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
