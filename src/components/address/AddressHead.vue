<template>
  <section class="p_header">
    <div class="p_go_back">
      <router-link :to="{path:'/'}">
      <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="p_header_title">选择收货地址</span>
    </div>
  </section>
</template>

<script>
  export default {
    name: "AddressHead"
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  .p_header{
    width:100%;
    height:.44rem;
    background-color: #01a6ff;
    .p_go_back{
      margin:0 0.08rem;
      font-size:0;
      .icon-zuojiantou{
        display: inline-block;
        line-height: .44rem;
        @include sc(.2rem,$fc01);
      }
      .p_header_title{
        position:absolute;
        top:0;
        left:50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        line-height: .44rem;
        font-weight: bold;
        @include sc(.2rem,$fc01);
      }
    }
  }
</style>
