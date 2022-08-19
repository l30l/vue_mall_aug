<template>
  <div class="basic-info" v-if="Object.keys(goodsDetail).length !== 0">
    <div class="goods-title">{{ goodsDetail.title }}</div>
    <div class="goods-price">
      <span class="n-price">{{ goodsDetail.price }}</span>
      <span class="o-price">{{ goodsDetail.oldPrice }}</span>
      <span class="discount" :style="{ background: goodsDetail.discountBgColor }">{{ goodsDetail.discountDesc }}</span>
    </div>
    <div class="goods-columns">
      <span>{{ goodsDetail.columns[0] }}</span>
      <span>{{ goodsDetail.columns[1] }}</span>
      <span>{{ goodsDetail.services[goodsDetail.services.length - 1].name }}</span>
    </div>
    <div class="goods-services">
      <span v-for="index in goodsDetail.services.length - 1" :key="index">
        <!-- 此处 index 是从 1 开始的 -->
        <img :src="goodsDetail.services[index - 1].icon" alt="" v-if="index - 1" />
        <span>{{ goodsDetail.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBasicInfo',
  props: {
    goodsDetail: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.basic-info {
  width: 100%;
  padding: 10px;
  border-bottom: 10px solid #eee;
}
.goods-title {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  text-align: justify;
}
.goods-price {
  padding: 10px 0;
  .n-price {
    font-size: 20px;
    font-weight: 700;
    color: var(--color-high-text);
  }
  .o-price {
    padding: 0 5px;
    font-size: 15px;
    text-decoration: line-through;
  }
  .discount {
    position: relative;
    top: -8px;
    padding: 3px 6px;
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
  }
}
.goods-columns {
  display: flex;
  justify-content: space-between;
  padding: 0 0 5px;
  border-bottom: 2px solid #eee;
  font-size: 15px;
}
.goods-services {
  display: flex;
  padding: 20px 0 10px;
  font-size: 12px;
  img {
    position: relative;
    top: 2px;
    width: 12px;
  }
  span {
    margin-left: 3px;
  }
}
</style>
