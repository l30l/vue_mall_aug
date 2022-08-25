export default {
  addCart(context, payload) {
    // context.commit('addCart', payload)
    // let oldProduct = null
    // if (context.state.cartList.some((item) => item.iid === payload.iid)) {
    //   oldProduct = payload
    //   oldProduct.count += 1
    // } else {
    //   payload.count = 1
    //   context.state.push(payload)
    // }
    return new Promise((resolve) => {
      const oldProduct = context.state.cartList.find((item) => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct = payload
        context.commit('addCount', oldProduct)
        resolve('商品数量 + 1')
      } else {
        payload.count = 1
        context.commit('addNewItem', payload)
        resolve('添加了新商品')
      }
    })
  },
  itemSelect(context, payload) {
    context.commit('itemSelect', payload)
  },
  selectAll(context, payload) {
    if (payload) {
      context.commit('deselectAll')
    } else {
      context.commit('selectAll')
    }
  }
}
