<template>
  <div class="order_container">
    <div class="order_img">
      <img src="../../assets/images/order/order.png" alt="">
    </div>
    <p class="order_txt">近三个月无外卖订单记录</p>
    <a href="javascript:;" class="look_rder">查看三个月前的外卖订单∨</a>
  </div>
</template>

<script>
    export default {
        name: "orderSection"
    }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  .order_container{
    width:100%;
    text-align: center;
    background-color: #f4f4f4;
    overflow: hidden;
    -webkit-flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    .order_img{
      width:1.8rem;
      height: 1.3rem;
      margin: 1rem auto 0;
      img{
        width:100%;
        height:100%;
      }
    }
    .order_txt{
      margin: .2rem auto;
      color: #6a6a6a;
      @include sc(.15rem,$fc03);
    }
    .look_rder{
      display: block;
      margin: .2rem auto;
      color: #6a6a6a;
      @include sc(.12rem,$fc03);
    }
  }
</style>
