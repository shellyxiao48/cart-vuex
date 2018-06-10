module.exports = {
  getCartList (state) {
    return state.cartList
  },
  getCartInfo (state) {
    state.cartInfo.total_price = 0
    state.cartInfo.total_num = 0
    state.cartList.forEach((ele) => {
      state.cartInfo.total_num += ele.num
      state.cartInfo.total_price += ele.price * ele.num
    })
    console.log(state.cartInfo)
    return state.cartInfo
  }
}
