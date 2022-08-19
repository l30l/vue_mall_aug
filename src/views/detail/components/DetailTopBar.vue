<template>
  <top-bar>
    <img src="@/assets/img/common/back.svg" alt="" slot="left" @click="backBtnClick" />
    <span @click="itemClick(index)" slot="middle" v-for="(item, index) in topBarItem" :key="index" :class="{ active: index === currentIndex }">{{ item }}</span>
  </top-bar>
</template>

<script>
import TopBar from '@/components/common/topBar/TopBar.vue'

export default {
  name: 'DetailTopBar',
  components: {
    TopBar
  },
  data() {
    return {
      topBarItem: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backBtnClick() {
      this.$router.back()
    },
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style scoped>
.top-bar {
  background: #fff;
}
img {
  width: 18px;
  vertical-align: middle;
}
span {
  flex: 1;
  color: #666;
}
.active {
  color: var(--color-high-text);
}
</style>
