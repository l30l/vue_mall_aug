<template>
  <div class="goods-list-item">
    <div class="goods-item-img">
      <img :src="goodsListItem.show.img" alt="" />
    </div>
    <p class="goods-item-title">
      {{ goodsListItem.title }}
    </p>
    <div class="goods-item-feature">
      <div class="price">
        <span class="o-price">{{ goodsListItem.orgPrice }}</span>
        <span class="n-price"> ¥{{ goodsListItem.price }}</span>
      </div>
      <span class="collect">
        {{ goodsListItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.goods-list-item {
  flex: 0 1 47%;
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 20px;
}
.goods-item-img {
  width: 100%;
}
.goods-item-img img {
  width: 100%;
  border-radius: 8px;
}
.goods-item-title {
  width: 100%;
  padding: 6px 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-item-feature {
  display: flex;
}
.goods-item-feature .price .o-price {
  text-decoration: line-through;
}
.goods-item-feature .price .n-price {
  color: var(--color-high-text);
}
.goods-item-feature .collect {
  position: relative;
  margin-left: auto;
}
.goods-item-feature .collect::before {
  content: '';
  display: inline-block;
  position: absolute;
  top: 1px;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url('@/assets/img/common/collect.svg') 0/14px no-repeat;
}
</style>
