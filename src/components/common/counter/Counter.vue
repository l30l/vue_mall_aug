<template>
  <div class="counter">
    <button @click="decrement">
      <span>-</span>
    </button>
    <!-- <input type="text" :value="counter" @focus="countChange" @blur="loseFocus" /> -->
    <input type="text" v-model.number="counter" @focus="countChange" @blur="loseFocus" @input="inputCount" />
    <button @click="increment">
      <span>+</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',

  data() {
    return {
      isShow: false,
      counter: this.count
    }
  },
  watch: {
    count() {
      this.counter = this.count
    }
  },
  // computed: {
  //   counter() {
  //     return this.count
  //   }
  //   // 因为此处双向绑定，会需要修改 counter 的值，而 computed 的值不能直接修改
  //   // 但是用 computed 输入框中的值是正确的
  // },
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  methods: {
    countChange() {
      this.isShow = true
    },
    loseFocus() {
      this.isShow = false
    },
    increment() {
      if (this.counter < 99) {
        this.counter++
      }
      this.$emit('countChange', this.counter)
    },
    decrement() {
      if (this.counter > 1) {
        this.counter--
      }

      this.$emit('countChange', this.counter)
    },
    inputCount() {
      // counterNum = this.counter
      if (this.counter > 99) {
        this.counter = 99
        this.$toast.showMessage('加购数量最多为99')
      }
      if (this.counter < 1) {
        this.counter = 1
        this.$toast.showMessage('加购数量最少为1')
      }
      console.log(this.counter)
    }
  }
}
</script>

<style lang="less" scoped>
.counter {
  button {
    width: 15px;
    height: 15px;
    margin: auto 5px;
    vertical-align: middle;

    span {
      position: relative;
      top: -5px;
      color: #666;
      font-size: 14px;
    }
  }
  input {
    width: 22px;
    height: 22px;
    padding: 0 3px;
    border-radius: 6px;
    border: 1px solid #666;
    font-size: 12px;
  }
}
</style>
