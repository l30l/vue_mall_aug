<template>
  <div class="detail-params" v-if="Object.keys(detailParams).length !== 0">
    <div class="params-rule param">
      <div class="title">
        <span>{{ detailParams.rule.key }}</span>
      </div>
      <div class="rule-info table">
        <table>
          <tr v-for="(item, index) in detailParams.rule.tables[0]" :key="index">
            <td v-for="(param, i) in item" :key="i">{{ param }}</td>
          </tr>
        </table>
      </div>
      <div class="disclaimer">
        <span>{{ detailParams.rule.disclaimer }}</span>
      </div>
    </div>
    <div class="params-info param">
      <div class="title">
        <span>{{ detailParams.info.key }}</span>
      </div>
      <div class="info-param table">
        <table>
          <tr v-for="(item, index) in detailParams.info.set" :key="index">
            <td style="width: 25%">{{ item.key }}</td>
            <td style="color: var(--color-high-text)">{{ item.value }}</td>
          </tr>
        </table>
      </div>
      <div class="disclaimer">
        <span>{{ detailParams.rule.disclaimer }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParams',
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-params {
  padding: 5px 10px 30px;
  border-bottom: 5px solid #eee;
}
.param {
  padding: 10px 5px;
}
.table {
  table {
    width: 100%;
  }
  tr {
    border-bottom: 1px solid #eee;
  }
  td {
    padding: 10px;
  }
}
.title {
  padding: 20px;
  text-align: center;
  span {
    padding: 8px 30px;
    border-radius: 8px;
    background: #eee;
    font-weight: 700;
    font-size: 20px;
  }
}
.disclaimer {
  padding: 10px 0;
  font-size: 14px;
}
</style>
