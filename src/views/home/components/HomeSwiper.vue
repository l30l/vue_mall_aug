<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.acm">
      <img :src="item.image" alt="" @load="swiperImgLoaded" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
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

<style></style>
