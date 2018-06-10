<template>
  <div id="app">
    <div id="shoplist">
      <shop-list></shop-list>
    </div>
    <div id="cartlist">
      <cart-list></cart-list>
    </div>
    <div id="footer">
      <cart-total></cart-total>
    </div>
  </div>
</template>

<script>
import shopList from './components/shopList'
import cartList from './components/cartList'
import cartTotal from './components/cartTotal'

export default {
  name: 'App',
  components: {
    shopList,
    cartList,
    cartTotal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
