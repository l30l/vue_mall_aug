<template>
  <div class="nav-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div class="item-icon-active" v-if="isActive">
      <slot name="icon-acitve"></slot>
    </div>
    <div class="item-text" :class="{ active: isActive }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  data() {
    return {}
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.path.indexOf(this.$route.path) !== -1
    }
  }
}
</script>

<style lang="less">
.nav-bar-item {
  flex: 1;
  color: #666;
  text-align: center;
  padding: 4px 0;
  font-size: 14px;
}

.item-icon,
.item-text {
  align-items: center;
}

.item-icon img {
  width: 24px;
}
.item-icon-active img {
  width: 24px;
}
.active {
  color: #c33979;
}
</style>
