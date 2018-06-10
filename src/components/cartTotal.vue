<template>
<div>
    <h3>Total</h3>
    <h4>总数：{{$store.getters.getCartInfo.total_num}},总价：{{$store.getters.getCartInfo.total_price}}</h4>
</div>
</template>
<script>
export default {
  name: 'cartTotal'
}
</script>
