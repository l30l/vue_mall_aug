<template>
  <div class="detail">
    <detail-top-bar @itemClick="itemClick" ref="topBar"></detail-top-bar>
    <scroll :pullUpLoad="true" ref="scroll" @onScroll="onScroll">
      <toast></toast>
      <detail-swiper :swiperImg="swiperImg" @swiperImgLoaded="swiperImgLoaded"></detail-swiper>
      <detail-basic-info :goodsDetail="goodsDetail"></detail-basic-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-info :detailInfo="detailInfo" @detailImgLoaded="detailImgLoaded"></detail-info>
      <detail-params :detailParams="detailParams" ref="params"></detail-params>
      <detail-comments :detailComments="detailComments" ref="comments"></detail-comments>
      <goods-list :goodsList="detailRecommends" ref="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import { getDetail, GoodsDetail, getDetailRecommend } from '@/network/detail'
import { debounce } from '@/common/utils'

import DetailTopBar from './components/DetailTopBar.vue'
import DetailSwiper from './components/DetailSwiper.vue'
import DetailBasicInfo from './components/DetailBasicInfo.vue'
import DetailShopInfo from './components/DetailShopInfo.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import DetailInfo from './components/DetailInfo.vue'
import DetailParams from './components/DetailParams.vue'
import DetailComments from './components/DetailComments.vue'
import GoodsList from '@/components/content/goodsList/GoodsList.vue'
import DetailBottomBar from './components/DetailBottomBar.vue'
import Toast from '@/components/common/toast/Toast.vue'

export default {
  components: { DetailTopBar, DetailSwiper, DetailBasicInfo, DetailShopInfo, Scroll, DetailInfo, DetailParams, DetailComments, GoodsList, DetailBottomBar, Toast },
  name: 'Detail',
  created() {
    // console.log(this.$route.query.id)
    this.getDetail(this.id)
    // this.$on('detailImgLoaded', () => {
    //   console.log('ok')
    // })
    this.getDetailRecommend()
    this.getThemeTop = debounce(() => {
      this.themeOffsetTop.push(0)
      this.themeOffsetTop.push(this.$refs.params.$el.offsetTop)
      this.themeOffsetTop.push(this.$refs.comments.$el.offsetTop)
      this.themeOffsetTop.push(this.$refs.recommends.$el.offsetTop)
      this.themeOffsetTop.push(Number.MAX_VALUE)
    }, 50)
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 50)
    // console.log(this.$refs.params.$el.offsetTop)
  },
  data() {
    return {
      id: this.$route.query.id,
      goodsDetail: {},
      swiperImg: [],
      shopInfo: {},
      detailInfo: {},
      detailParams: {},
      detailComments: {},
      detailRecommends: [],
      themeOffsetTop: [],
      getThemeTop: null,
      refresh: null
    }
  },
  methods: {
    getDetail(id) {
      getDetail(id).then(({ result: data }) => {
        console.log(data)
        this.goodsDetail = new GoodsDetail(data)
        this.swiperImg = data.itemInfo.topImages
        this.shopInfo = data.shopInfo
        this.detailInfo = data.detailInfo
        this.detailParams = data.itemParams
        this.detailComments = data.rate

        console.log(this.goodsDetail)
      })
    },
    getDetailRecommend() {
      getDetailRecommend().then(({ data }) => {
        this.detailRecommends = data.list
      })
    },
    swiperImgLoaded() {
      this.$refs.scroll.refresh()
    },
    detailImgLoaded() {
      // console.log('ok')
      this.refresh()
      // console.log(this.$refs.params.$el.offsetTop)
      // console.log(this.$refs.comments.$el.offsetTop)
      // console.log(this.$refs.recommends.$el.offsetTop)
      // const getTop = debounce(() => {
      //   console.log(this.$refs.params.$el.offsetTop)
      //   console.log(this.$refs.comments.$el.offsetTop)
      //   console.log(this.$refs.recommends.$el.offsetTop)
      // }, 5000)
      // getTop()
      this.getThemeTop()
    },
    // getTopHeight() {
    //   console.log(this.$refs.params.$el)
    // }
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeOffsetTop[index], 300)
    },
    onScroll(positionY) {
      for (let i = 0; i < this.themeOffsetTop.length - 1; i++) {
        if (-positionY >= this.themeOffsetTop[i] && -positionY < this.themeOffsetTop[i + 1]) {
          this.$refs.topBar.currentIndex = i
        }
      }
    },
    addCart() {
      const product = {}
      product.iid = this.id
      product.img = this.swiperImg[0]
      product.title = this.goodsDetail.title
      product.desc = this.goodsDetail.desc
      product.price = this.goodsDetail.nowPrice
      this.$store.dispatch('addCart', product).then((res) => {
        this.$toast.showMessage(res)
      })
    }
  }
}
</script>

<style></style>
