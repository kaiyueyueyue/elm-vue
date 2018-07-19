<template>
  <section class="p_footer">
    <div class="p_footer_left">
      <span class="total_price">￥{{cartGoodList[0].totalMoney.toFixed(2)}}</span>
      <span class="discount_price">已优惠￥12.2</span>
    </div>
    <div class="p_footer_right">
      <a href="javascript:;" class="sure_pay">确认支付</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConfirmFoot",
  data() {
    return {
      cartGoodList: ""
    };
  },
  methods: {
    getLocal() {
      var ddd = window.localStorage.getItem("aaa");
      var aaa = JSON.parse(ddd);
      this.cartGoodList = aaa;
      // console.log(aaa);
    }
  },
  created() {
    this.getLocal();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin.scss";
.p_footer {
  @include fj();
  align-items: center;
  font-size: 0;
  width: 100%;
  background-color: #3d3d3d;
  .p_footer_left {
    padding-left: 0.2rem;
    .total_price {
      padding-right: 0.07rem;
      @include sc(0.16rem, $fc01);
    }
    .discount_price {
      @include sc(0.12rem, #b5b5b5);
      padding: 0 0.08rem;
      border-left: 1px solid #676767;
    }
  }
  .p_footer_right {
    .sure_pay {
      display: block;
      line-height: 0.48rem;
      padding: 0 0.21rem;
      font-weight: bold;
      @include sc(0.15rem, $fc01);
      background-color: #00d762;
    }
  }
}
</style>
