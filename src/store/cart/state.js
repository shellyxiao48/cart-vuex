module.exports = {
  // 购物车列表
  cartList: localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [],
  //   当前购物车信息
  cartInfo: {
    total_price: 0,
    total_num: 0
  }
}
