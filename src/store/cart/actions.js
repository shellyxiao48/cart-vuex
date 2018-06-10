import * as types from './mutations_type'
export default {
  // 增加数量
  add: ({commit}, {id}) => {
    console.log('add')
    commit(types.ADD, id)
    commit(types.UPDATED_LOCAL)
  },
  // 购物车新增商品种类
  createcart: ({commit}, {shop}) => {
    console.log('action createcart')
    console.log(shop)
    commit(types.CREATE_CART, shop)
    commit(types.UPDATED_LOCAL)
  },
  //   购物车清除某个种类
  clearCart: ({commit}, {id}) => {
    commit(types.CLEAR_CART, id)
    commit(types.UPDATED_LOCAL)
  },
  //   购物车某个商品减少
  reduceCart: ({commit}, {id}) => {
    commit(types.REDUCE_CART, id)
    commit(types.UPDATED_LOCAL)
  }

}
