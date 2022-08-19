<template>
  <div class="shop-info">
    <div class="shop-basic-info">
      <img :src="shopInfo.shopLogo" class="shop-logo" />
      <span class="shop-title">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-detail">
      <div class="detail-left">
        <div>
          <span>{{ totalSell }}</span>
          <p>总销量</p>
        </div>
        <div>
          <span>{{ shopInfo.cGoods }}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="detail-right">
        <!-- <span v-for="(item, index) in shopInfo.score" :key="index"></span> -->
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td :style="{ color: item.isBetter ? '#E73838' : '#4AA94A' }">{{ item.score.toFixed(2) }}</td>
            <td>
              <span :style="{ background: item.isBetter ? '#E73838' : '#4AA94A' }">{{ item.isBetter ? '高' : '低' }} </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-btn">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    totalSell() {
      if (this.shopInfo.cSells > 10000) {
        return (this.shopInfo.cSells / 10000).toFixed(1) + '万'
      } else {
        return this.shopInfo.cSells
      }
    }
  }
}
</script>

<style lang="less" scoped>
.shop-info {
  padding: 10px;
  border-bottom: 5px solid #eee;
  font-size: 15px;
}
.shop-basic-info {
  font-size: 18px;
  img {
    width: 22vw;
    padding: 0 10px;
    vertical-align: middle;
  }
}
.shop-detail {
  display: flex;
  padding: 10px;
  .detail-left,
  .detail-right {
    flex: 1;
  }
  .detail-left {
    display: flex;
    padding: 10px 0;
    div {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    p {
      padding: 10px;
      white-space: nowrap;
    }
  }
  .detail-left::after {
    content: '';
    height: 60px;
    border-right: 2px solid #eee;
  }
  .detail-right {
    margin-left: 30px;
    td {
      padding: 5px 3px;
    }
    span {
      padding: 2px;
      border-radius: 4px;
      font-size: 12px;
      color: #fff;
    }
  }
}
.shop-btn {
  padding: 25px 0;
  text-align: center;
  font-size: 15px;
  span {
    padding: 8px 30px;
    border-radius: 8px;
    background: #eee;
  }
}
</style>
