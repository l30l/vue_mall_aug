<template>
  <div class="detail-comments" v-if="Object.keys(detailComments).length !== 0">
    <div class="comment-header">
      <span>用户评价</span>
      <span class="more">
        <span>更多</span>
        <img src="@/assets/img/common/back.svg" alt="" />
      </span>
    </div>
    <div class="comment-info">
      <div class="user-info">
        <img :src="detailComments.list[0].user.avatar" alt="" />
        <span>{{ detailComments.list[0].user.uname }}</span>
      </div>
      <div class="comment-detail">
        <span>{{ detailComments.list[0].content }}</span>
      </div>
      <div class="other-info">
        <span>{{ createdTime }}</span>
        <span class="product-style">{{ detailComments.list[0].style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/common/utils'
export default {
  name: 'DetailComments',
  props: {
    detailComments: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    createdTime() {
      const date = new Date(this.detailComments.list[0].created * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style lang="less" scoped>
.detail-comments {
  padding: 5px 10px 30px;
  border-bottom: 5px solid #eee;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  img {
    width: 16px;
    vertical-align: middle;
    transform: rotate(180deg);
  }
}
.comment-info {
  .user-info {
    padding: 20px 0 10px;
    img {
      width: 13vw;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      padding: 5px 10px;
    }
  }
  .other-info {
    padding: 10px 0;
    color: #afabab;
    font-size: 15px;
    .product-style {
      padding-left: 10px;
    }
  }
}
</style>
