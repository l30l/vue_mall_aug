<template>
  <div class="check-all-btn" @click="checkAllClick">
    <div class="selected" v-show="isCheckedAll">
      <img src="@/assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckAllBtn',
  data() {
    return {
      isCheckedAll: true
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
    top: -9px;
  }
}
.selected {
  position: relative;
  top: -1px;
  left: -1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-tint);
  border-color: var(--color-tint);
}
</style>
