<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goodsList" :key="item.iid" :goodsListItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  components: { GoodsListItem },
  name: 'GoodsList',

  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
}
</style>
