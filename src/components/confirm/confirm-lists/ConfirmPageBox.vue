<template>
  <div class="confirm_order_page_box">
    <div class="confirm_order_page">
      <p-receiv-addr></p-receiv-addr>
      <p-list></p-list>
      <p-shop-info></p-shop-info>
      <p-server></p-server>
      <p-note-info></p-note-info>
      <section class="business_pro">
        <p>商家承诺：商家若取消订单，将赔付￥2店铺红包<i class="iconfont icon-wenhao"></i></p>
      </section>
    </div>
  </div>
</template>

<script>
  import PReceivAddr from "./PReceivAddr"
  import PList from "./PList"
  import PShopInfo from "./PShopInfo"
  import PServer from "./PServer"
  import PNoteInfo from "./PNoteInfo"

    export default {
      name: "ConfirmPageBox",
      data() {
        return {
        }
      },
      components:{
        PReceivAddr,
        PList,
        PShopInfo,
        PServer,
        PNoteInfo,
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .confirm_order_page_box{
    -webkit-flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    background: linear-gradient(to bottom, #01a6ff 1.5rem, #f5f5f5 3rem); /* 标准的语法 */
  .confirm_order_page{
    margin:0 0.08rem;
    .one, .two, .three, .four{
      padding:0 .16rem;
      margin-bottom:.08rem;
      background-color: $fc01;
    }
    .business_pro{
      padding:.1rem 0 .2rem;
      p{
        @include sc(.11rem, $fc02);
        .icon-wenhao{
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
