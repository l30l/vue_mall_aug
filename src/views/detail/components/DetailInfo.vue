<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-desc">
      <div class="desc-start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="desc-end"></div>
    </div>
    <div class="detail-title">
      <span>{{ detailInfo.detailImage[0].key }}</span>
    </div>
    <div class="detail-img">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="detailImgLoaded" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    detailImgLoaded() {
      if (this.imgCount < this.detailInfo.detailImage[0].list.length) {
        this.imgCount += 1
      }
      // console.log(this.imgCount)
      if (this.imgCount === this.detailInfo.detailImage[0].list.length) {
        this.$emit('detailImgLoaded')
      }
    }
  },
  data() {
    return {
      imgCount: 1
    }
  }
}
</script>

<style lang="less" scoped>
.detail-info {
  padding: 5px 5px 30px;
  border-bottom: 2px solid #eee;
}
.detail-desc {
  padding: 20px 10px;
  border-bottom: 4px solid #eee;
  .desc-start {
    width: 50%;
    border-top: 1px solid #888;
  }
  .desc-start::before {
    content: '';
    display: block;
    position: relative;
    top: -7px;
    width: 6px;
    height: 6px;
    background: #888;
  }
  .desc {
    padding: 20px 5px;
  }
  .desc-end {
    position: relative;
    float: right;
    width: 50%;
    border-top: 1px solid #888;
  }
  .desc-end::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    width: 6px;
    height: 6px;
    background: #888;
  }
}
.detail-title {
  padding: 20px;
  text-align: center;
  span {
    padding: 8px 30px;
    border-radius: 8px;
    background: #eee;
    font-weight: 700;
    font-size: 20px;
  }
}
.detail-img {
  img {
    width: 100%;
  }
}
</style>
