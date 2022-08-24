import { request } from './request'

export function getDetail(id) {
  return request({
    url: '/detail',
    params: { iid: id }
  })
}

export function getDetailRecommend() {
  return request({
    url: '/recommend'
  })
}

export class GoodsDetail {
  constructor(data) {
    this.title = data.itemInfo.title
    this.price = data.itemInfo.price
    this.nowPrice = data.itemInfo.lowNowPrice
    this.oldPrice = data.itemInfo.oldPrice
    this.discountDesc = data.itemInfo.discountDesc
    this.discountBgColor = data.itemInfo.discountBgColor
    this.desc = data.itemInfo.desc
    this.columns = data.columns
    this.services = data.shopInfo.services
  }
}
