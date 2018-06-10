<template>
<div>
    <div>购物车</div>
    <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>价格</th>

            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in $store.state.cart.cartList" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.num}}</td>
            <td>{{item.num*item.price}}</td>

            <td>
                <div class="btn btn-primary" @click='actions("add",item)'> +</div>
                <div class="btn btn-warning" @click='actions("reduceCart",item)'>-</div>
                <div class="btn btn-danger"  @click='actions("clearCart",item)'>×</div>

            </td>
          </tr>
        </tbody>

      </table>
      </div>
</template>
<script>
export default {
  name: 'shopCart',
  methods: {
    actions (type, shop) {
      var id = shop.id
      this.$store.dispatch(type, { id }) // 调用add方法
    }
    // add (shop) {
    //   var id = shop.id
    //   this.$store.dispatch('add', {id}) // 调用add方法
    // },
    // reduce (shop) {
    //   var id = shop.id
    //   if (shop.num === 1) {
    //     this.$store.dispatch('clearCart', {id})
    //   } else {
    //     this.$store.dispatch('reduceCart', {id})
    //   }
    // }
  }
}
</script>
