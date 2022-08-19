<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in swiperImg" :key="index" @load="swiperImgLoaded">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    swiperImgLoaded() {
      if (!this.isLoaded) {
        this.isLoaded = true
        this.$emit('swiperImgLoaded')
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 40vh;
}
</style>
