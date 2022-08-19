<template>
  <div class="cart">
    <cart-top-bar> </cart-top-bar>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartBottomBar from './components/CartBottomBar.vue'
import CartTopBar from './components/CartTopBar.vue'
export default {
  components: { CartTopBar, CartBottomBar },
  name: 'Cart'
}
</script>

<style lang="less" scoped></style>
