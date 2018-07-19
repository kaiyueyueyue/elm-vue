<template>
  <section class="p_header">
    <div class="p_go_back">
      <router-link :to="{path:'/cart'}">
      <i class="iconfont icon-zuojiantou"></i>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConfirmHead"
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin.scss";
.p_header {
  width: 100%;
  height: 0.44rem;
  background-color: #01a6ff;
  .p_go_back {
    margin: 0 0.08rem;
    .icon-zuojiantou {
      display: block;
      line-height: 0.44rem;
      @include sc(0.2rem, $fc01);
    }
  }
}
</style>
