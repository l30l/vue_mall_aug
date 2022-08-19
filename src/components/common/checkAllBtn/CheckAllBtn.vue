<template>
  <div class="check-all-btn" @click="checkAllClick" :class="{ selcted: isCheckedAll }">
    <img src="@/assets/img/cart/tick.svg" alt="" v-show="isCheckedAll" />
  </div>
</template>

<script>
export default {
  name: 'CheckAllBtn',
  data() {
    return {
      isCheckedAll: false
    }
  },
  methods: {
    checkAllClick() {
      this.isCheckedAll = !this.isCheckedAll
    }
  }
}
</script>

<style lang="less" scoped>
.check-all-btn {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin: auto 5px;
  border: 1px solid #666;
  img {
    width: 95%;
    position: relative;
    top: -10px;
  }
}
.selected {
  background: var(--color-tint);
  border-color: var(--color-tint);
}
</style>
