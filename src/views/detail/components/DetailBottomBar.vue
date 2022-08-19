<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div class="item service">
        <span class="icon"></span>
        <span class="title">客服</span>
      </div>
      <div class="item shop">
        <span class="icon"></span>
        <span class="title">店铺</span>
      </div>
      <div class="item collect">
        <span class="icon"></span>
        <span class="title">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart-btn">加入购物车</div>
      <div class="purchase-btn">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar'
}
</script>

<style lang="less" scoped>
.detail-bottom-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 49px;
  box-shadow: 0 -1px 1px rgb(100 100 100 / 10%);
  background: #f6f6f6;
  text-align: center;
}
.left {
  display: flex;
  flex: 1;
  font-size: 15px;
}
.item {
  flex: 1;
  align-items: center;
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 0;
    background: url('@/assets/img/detail/detail_bottom.png') 0 0/100% repeat;
  }
}

.service .icon {
  background-position: 0 98px;
}
.shop .icon {
  background-position: 0 52px;
}
.collect .icon {
  background-position: 0 0px;
}

.right {
  flex: 1;
  display: flex;
  line-height: 49px;
  .cart-btn {
    flex: 1;
    background: #ffdd00;
  }
  .purchase-btn {
    flex: 1;
    background: var(--color-tint);
    color: #fff;
  }
}
</style>
