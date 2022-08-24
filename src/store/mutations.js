export default {
  addCart(state, payload) {
    state.cartList.push(payload)
  },
  addCount(state, payload) {
    payload.count += 1
  },
  addNewItem(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  itemSelect(state, payload) {
    payload.checked = !payload.checked
  }
}
