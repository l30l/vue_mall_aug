<template>
  <div class="home-view">
    <home-top-bar></home-top-bar>
    <tab-bar :tabBarItem="tabBarItem" ref="tabBarTop" v-show="isTabShow" @tabBarItemClick="tabBarItemClick"></tab-bar>
    <scroll ref="scroll" :probeType="3" @onScroll="onScroll" :pullUpLoad="true" @pullingUp="pullingUp">
      <home-swiper :banner="banner" @swiperImgLoaded="swiperImgLoaded"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-trending></home-trending>
      <tab-bar :tabBarItem="tabBarItem" ref="tabBar" @tabBarItemClick="tabBarItemClick"></tab-bar>
      <goods-list :goodsList="goods[type].list"></goods-list>
    </scroll>
    <back-top v-show="isBackTopShow" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './components/HomeSwiper.vue'
import HomeTopBar from './components/HomeTopBar.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeTrending from './components/HomeTrending.vue'
import GoodsList from '@/components/content/goodsList/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import TabBar from '@/components/content/tabBar/TabBar.vue'
import BackTop from '@/components/common/backTop/BackTop.vue'

import { debounce } from '@/common/utils'
import { BACK_TO_TOP_POSITION } from '@/common/const'
import { getMultiData, getGoodsList } from '@/network/home'

export default {
  name: 'Home',
  created() {
    this.getMultiData()
    this.getGoodsList('pop')
    this.getGoodsList('new')
    this.getGoodsList('sell')
  },
  mounted() {
    // this.$bus.$on('itemImgLoaded', () => {
    //   debounce(console.log('10'), 100)
    // })
    // this.itemImgLoaded()
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('itemImgLoaded', () => {
      refresh()
      // clearTimeout(this.timer)
      // this.timer = setTimeout(() => {
      //   console.log('30')
      // }, 300)
      // console.log('111')
    })
  },
  data() {
    return {
      banner: [],
      recommend: [],
      // type: 'pop',
      // page: 1,
      // goodsList: [],
      type: 'pop',
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabBarItem: ['流行', '新款', '精选'],
      tabBarTop: 0,
      isTabShow: false,
      isBackTopShow: false
    }
  },
  components: {
    HomeTopBar,
    HomeSwiper,
    HomeRecommend,
    HomeTrending,
    GoodsList,
    Scroll,
    TabBar,
    BackTop
  },
  methods: {
    getMultiData() {
      getMultiData().then(({ data }) => {
        // console.log(data)
        this.banner = data.banner.list
        this.recommend = data.recommend.list
      })
    },
    getGoodsList(type) {
      const page = this.goods[type].page + 1
      getGoodsList(type, page).then(({ data }) => {
        this.goods[type].list.push(...data.list)
        this.goods[type].page = page
        // console.log(data)
        // console.log(this.goods[type].list)
      })
    },
    swiperImgLoaded() {
      this.$refs.scroll.refresh()
      this.tabBarTop = this.$refs.tabBar.$el.offsetTop
    },
    // itemImgLoaded() {
    //   this.$bus.$on('itemImgLoaded', () => {
    //     debounce(console.log('10'), 100)
    //   })
    // }
    onScroll(positionY) {
      this.isTabShow = this.tabBarTop < -positionY
      this.isBackTopShow = -positionY >= BACK_TO_TOP_POSITION
    },
    tabBarItemClick(index) {
      this.$refs.tabBarTop.currentIndex = index
      this.$refs.tabBar.currentIndex = index

      switch (index) {
        case 0:
          this.type = 'pop'
          break
        case 1:
          this.type = 'new'
          break
        case 2:
          this.type = 'sell'
          break
      }
      // this.getGoodsList(this.type)
    },
    pullingUp() {
      this.getGoodsList(this.type)
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
</script>

<style></style>
