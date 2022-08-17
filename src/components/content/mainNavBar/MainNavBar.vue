<template>
  <div class="main-nav-bar">
    <nav-bar>
      <nav-bar-item path="/home">
        <img src="@/assets/img/navbar/home.svg" alt="" slot="icon" />
        <img src="@/assets/img/navbar/home-active.svg" alt="" slot="icon-acitve" />
        <span slot="text">Home</span>
      </nav-bar-item>
      <nav-bar-item path="/category">
        <img src="@/assets/img/navbar/category.svg" alt="" slot="icon" />
        <img src="@/assets/img/navbar/category-active.svg" alt="" slot="icon-acitve" />
        <span slot="text">Category</span>
      </nav-bar-item>
      <nav-bar-item path="/cart">
        <img src="@/assets/img/navbar/cart.svg" alt="" slot="icon" />
        <img src="@/assets/img/navbar/cart-active.svg" alt="" slot="icon-acitve" />
        <span slot="text">Cart</span>
      </nav-bar-item>
      <nav-bar-item path="/profile">
        <img src="@/assets/img/navbar/profile.svg" alt="" slot="icon" />
        <img src="@/assets/img/navbar/profile-active.svg" alt="" slot="icon-acitve" />
        <span slot="text">Profile</span>
      </nav-bar-item>
    </nav-bar>
  </div>
</template>

<script>
import { NavBar, NavBarItem } from '@/components/common/navBar'
export default {
  components: {
    NavBar,
    NavBarItem
  },
  name: 'MainNavBar'
}
</script>

<style lang="less"></style>
