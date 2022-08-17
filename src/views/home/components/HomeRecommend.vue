<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.acm">
      <a :href="item.link">
        <div class="recommend-img">
          <img :src="item.image" alt="" />
        </div>
        <div class="recommend-text">
          <span>{{ item.title }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.home-recommend {
  display: flex;
  padding: 10px 0 20px;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  border-bottom: 10px solid #eee;
  background: #fff;
}
.recommend-item {
  flex: 1;
  justify-content: space-evenly;
}
.recommend-item img {
  width: 82px;
  margin-bottom: 8px;
}
</style>
