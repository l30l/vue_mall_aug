<template>
  <div class="check-btn">
    <div class="selected" v-show="isChecked">
      <img src="@/assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBtn',
  // data() {
  //   return {
  //     isChecked: true
  //   }
  // },
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
  // methods: {
  //   checkBtnClick() {
  //     this.isChecked = !this.isChecked
  //   }
  // }
}
</script>

<style lang="less" scoped>
.check-btn {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin: auto 5px;
  border: 1px solid #666;
  img {
    width: 95%;
    position: absolute;
    top: 1px;
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
