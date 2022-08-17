<template>
  <div class="tab-bar">
    <div class="tab-bar-item" v-for="(item, index) in tabBarItem" :key="index" @click="itemClick(index)">
      <span :class="{ 'item-active': index === currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabBarItem: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabBarItemClick', index)
    }
  }
}
</script>

<style lang="less">
.tab-bar {
  display: flex;
  position: relative;
  z-index: 9;
  width: 100vw;
  height: 44px;
  background: #fff;
  font-size: 15px;
  text-align: center;
  line-height: 44px;
}
.tab-bar-item {
  flex: 1;
  span {
    padding: 5px;
  }
}
.item-active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
