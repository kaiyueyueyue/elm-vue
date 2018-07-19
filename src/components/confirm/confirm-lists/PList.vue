<template>
  <!-- 用户操作信息 -->
  <section class="p_list one">
    <ul>
      <li class="p_list_con service_time">
        <div class="p_list_left">
          <p class="p_left_title">送达时间</p>
        </div>
        <div class="p_list_right">
          <span>尽快送达(10:24送达)</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </li>
      <li class="p_list_con pay_ways_main">
        <div class="p_list_left">
          <p class="p_left_title">支付方式</p>
          <p class="sub_title">花呗新户下单<span>立减5元</span></p>
        </div>
        <div class="p_list_right">
          <span>支付宝</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "PList",

    }
</script>

<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .p_list{
    .p_list_con{
      display: flex;
      justify-content:space-between;
      align-items:center;
      font-size:0;
      border-bottom:1px solid #efefef;
      &:last-child{
        border-bottom:0;
      }
      .p_list_left{
        .p_left_title{
          line-height:.22rem;
          font-weight: bold;
          @include sc(.14rem, $fc03);
        }
        .sub_title{
          line-height: .17rem;
          @include sc(.1rem, $fc02);
          span{
            color:#e05e50;
          }
        }
      }
      .p_list_right{
        span{
          font-weight: bold;
          @include sc(.14rem, #2292f6);
          vertical-align: middle;
        }
        .icon-arrow-right{
          padding-left:.1rem;
          vertical-align: middle;
          @include sc(.14rem, $fc02);
        }
      }
    }
    .service_time{
      padding:.11rem 0 .15rem;
    }
    .pay_ways_main{
      padding:.15rem 0 .1rem;
    }
  }
</style>
