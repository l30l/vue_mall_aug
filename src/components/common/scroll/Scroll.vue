<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    click: {
      type: Boolean,
      default: true
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: this.click,
      pullUpLoad: this.pullUpLoad
    })
    this.scroll.on('scroll', (position) => {
      this.$emit('onScroll', position.y)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
      this.scroll.finishPullUp()
    })
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    getPositionY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>
.scroll-wrapper {
  position: fixed;
  top: 44px;
  bottom: 49px;
  width: 100vw;
  height: calc(100vh - 44px - 49px);
}
</style>
