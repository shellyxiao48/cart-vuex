import * as types from './mutations_type'
export default {
  [types.ADD] (state, id) {
    console.log('调用了mutations add 方法')
    for (var i = 0; i < state.cartList.length; i++) {
      if (state.cartList[i].id === id) {
        console.log(state.cartList[i].num)
        state.cartList[i].num++
        break
      }
    }
  },
  [types.CREATE_CART] (state, shop) {
    console.log('调用了mutations CreateCart 方法')
    console.log(shop)
    state.cartList.push(shop)
  },
  [types.CLEAR_CART] (state, id) {
    for (var i = 0; i < state.cartList.length; i++) {
      if (state.cartList[i].id === id) {
        //   清除掉第i项
        state.cartList[i].num = 0
        state.cartList.splice(i, 1)
        break
      }
    }
  },
  [types.REDUCE_CART] (state, id) {
    for (var i = 0; i < state.cartList.length; i++) {
      if (state.cartList[i].id === id) {
        state.cartList[i].num--
        if (state.cartList[i].num === 0) {
          state.cartList.splice(i, 1)
        }
        break
      }
    }
  },
  [types.CLEAR_LOCAL] (state) {
    localStorage.removeItem('cartList')
  },
  [types.UPDATED_LOCAL] (state) {
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  }
}
