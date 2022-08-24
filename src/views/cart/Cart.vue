<template>
  <div class="cart">
    <cart-top-bar> </cart-top-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartBottomBar from './components/CartBottomBar.vue'
import CartList from './components/CartList.vue'
import CartTopBar from './components/CartTopBar.vue'
export default {
  components: { CartTopBar, CartBottomBar, CartList },
  name: 'Cart'
}
</script>

<style lang="less" scoped></style>
