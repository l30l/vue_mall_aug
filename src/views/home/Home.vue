<template>
  <div class="home-view">
    <home-top-bar></home-top-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-trending></home-trending>
    <goods-list :goodsList="goodsList"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from './components/HomeSwiper.vue'
import HomeTopBar from './components/HomeTopBar.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeTrending from './components/HomeTrending.vue'
import GoodsList from '@/components/content/goodsList/GoodsList.vue'

import { getMultiData, getGoodsList } from '@/network/home'

export default {
  name: 'Home',
  created() {
    this.getMultiData()
    this.getGoodsList(this.type, this.page)
  },
  data() {
    return {
      banner: [],
      recommend: [],
      type: 'pop',
      page: 1,
      goodsList: []
    }
  },
  components: {
    HomeTopBar,
    HomeSwiper,
    HomeRecommend,
    HomeTrending,
    GoodsList
  },
  methods: {
    getMultiData() {
      getMultiData().then(({ data }) => {
        // console.log(data)
        this.banner = data.banner.list
        this.recommend = data.recommend.list
      })
    },
    getGoodsList(type, page) {
      getGoodsList(type, page).then(({ data }) => {
        this.goodsList.push(...data.list)
        // console.log(data)
        console.log(this.goodsList)
      })
    }
  }
}
</script>

<style></style>
