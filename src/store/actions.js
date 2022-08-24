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
    const oldProduct = context.state.cartList.find((item) => item.iid === payload.iid)
    if (oldProduct) {
      // oldProduct = payload
      context.commit('addCount', oldProduct)
    } else {
      payload.count = 1
      context.commit('addNewItem', payload)
    }
  },
  itemSelect(context, payload) {
    context.commit('itemSelect', payload)
  }
}
