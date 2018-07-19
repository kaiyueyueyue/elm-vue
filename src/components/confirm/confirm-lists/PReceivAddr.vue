<template>
  <!-- 订单地址 -->
  <section class="p_add_addr">
    <div class="p_order_small_title">订单配送至</div>
    <div class="p_news_addr">
      <span>新增收货地址</span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </section>
</template>

<script>
    export default {
        name: "PReceivAddr"
    }
</script>

<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .p_add_addr{
    padding-left:.08rem;
    background-color: #00a5ff;
    padding-bottom: .04rem;
    .p_order_small_title{
      height:.17rem;
      line-height: .17rem;
      @include sc(.13rem, #d2e9fb);
    }
    .p_news_addr{
      height:.38rem;
      font-size: 0;
      span{
        font-weight: bold;
        @include sc(.21rem, $fc01);
        line-height: .38rem;
        vertical-align: middle;
        padding-right:.14rem;
      }
      .icon-arrow-right{
        line-height: .38rem;
        vertical-align: middle;
        @include sc(.1rem, #d2e9fb);
      }
    }
  }
</style>
