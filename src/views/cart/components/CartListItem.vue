<template>
  <div class="cart-list-item">
    <div class="item-check-btn">
      <check-btn :isChecked="cartItem.checked" @click.native="checkClick"></check-btn>
    </div>
    <div class="item-img">
      <img :src="cartItem.img" alt="" />
    </div>
    <div class="item-info">
      <div class="title">{{ cartItem.title }}</div>
      <div class="desc">{{ cartItem.desc }}</div>
      <div class="other-info">
        <span class="price">¥ {{ cartItem.price }}</span>
        <span class="count">x{{ cartItem.count }}</span>
        <counter :count="count" @countChange="countChange"></counter>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from '@/components/common/checkBtn/CheckBtn.vue'
import Counter from '@/components/common/counter/Counter.vue'

export default {
  components: { CheckBtn, Counter },
  name: 'CartListItem',
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.$store.dispatch('itemSelect', this.cartItem)
    },
    countChange(newCount) {
      console.log(newCount)
    }
  },
  computed: {
    count() {
      return this.cartItem.count
    }
  }
}
</script>

<style lang="less" scoped>
.cart-list-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.item-img {
  height: 108px;
  padding: 0 5px;
  img {
    height: 100%;
    border-radius: 8px;
  }
}
.item-info {
  overflow: hidden;
  padding: 0 5px;
}
.title,
.desc {
  padding: 6px 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  font-size: 14px;
}
.other-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 6px 4px;
}
.price {
  color: var(--color-high-text);
}
</style>
