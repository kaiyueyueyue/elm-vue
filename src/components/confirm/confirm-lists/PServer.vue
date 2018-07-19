<template>
  <!-- 配送增值服务 -->
  <section class="server three">
    <div class="server_left">
      <p class="server_title"><span class="plus">准时达PLUS</span>配送增值服务<i class="iconfont icon-wenhao"></i></p>
      <p class="sub_title">超时15分钟起赔，超时15分钟赔付<span>5.7元</span>，超时30分钟赔付<span>13.3元</span></p>
    </div>
    <div class="server_right">
      <span>￥0.3</span>
      <i class="iconfont icon-duihao2"></i>
    </div>
  </section>
</template>

<script>
    export default {
        name: "PServer"
    }
</script>

<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .server{
    @include fj();
    align-items:center;
    .server_left{
      padding:.13rem 0 .11rem;
      width:2.67rem;
      .server_title{
        line-height: .22rem;
        font-weight: bold;
        @include sc(.14rem, $fc03);
        .plus{
          color:#2795f4;
        }
        .icon-wenhao{
          font-weight: normal;
          margin-left:.04rem;
          @include sc(.12rem, $fc02);
        }
      }
      .sub_title{
        line-height: .13rem;
        @include sc(.1rem, $fc02);
        span{
          color:$fc03;
        }
      }
    }
    .server_right{
      font-size: 0;
      span{
        vertical-align: middle;
        padding-right:.1rem;
        font-weight: bold;
        @include sc(.12rem, $fc03);
      }
      .icon-duihao2{
        vertical-align: middle;
        @include sc(.16rem, #ececec);
      }
    }
  }
</style>
