<template>
    <div>
      <h3>商品信息</h3>
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in shoplist" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.num||''}}</td>
            <td>
              <div class="btn btn-primary" @click='add(item)'> {{!item.num?'加入购物车':'+'}}</div>
              <div class="btn btn-warning" v-show="item.num>0" @click='reduce(item.id)'>-</div>

            </td>
          </tr>
        </tbody>

      </table>
    </div>
</template>
<script>
export default {
  name: 'shopList',
  data () {
    return {
      shoplist: [
        {
          name: '鱼香肉丝',
          price: 12,
          id: 1
        },
        {
          name: '土豆烧鸡',
          price: 13,
          id: 2
        },
        {
          name: '香菇肉饼',
          price: 10,
          id: 3
        },
        {
          name: '麻婆豆腐',
          price: 6,
          id: 4
        }
      ]
    }
  },
  mounted () {
    // 初始化加载
    var list = this.$store.state.cart.cartList
    var len = list.length
    if (len !== 0) {
      let length = this.shoplist.length
      for (var i = 0; i < length; i++) {
        for (var j = 0; j < len; j++) {
          if (this.shoplist[i].id === list[j].id) {
            console.log(list[j].num)
            // this.$set(this.shoplist[i], 'count', list[j].num)
            this.$set(this.shoplist, i, list[j])
            break
          }
        }
      }
      console.log(22222)
      console.log(this.shoplist)
    }
  },
  methods: {
    add (shop) {
      // 判断是否第一次添加
      var id = shop.id
      var flag = false
      var list = this.$store.state.cart.cartList
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
          flag = true
          break
        }
      }
      if (flag) {
        this.$store.dispatch('add', {id}) // 调用add方法
      } else {
        // 第一次添加
        this.$set(shop, 'num', 1)
        this.$store.dispatch('createcart', {shop})
      }
    },
    reduce (id) {
      this.$store.dispatch('reduceCart', {id})
    }
  }
}
</script>
<style scoped>
.table td,.table th{
  text-align: center;
}

</style>
