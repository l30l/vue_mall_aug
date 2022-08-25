<template>
  <div class="toast" v-if="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    showMessage(msg, delay = 1000) {
      this.isShow = true
      this.message = msg
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, delay)
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}
</style>
