<template>
	<!-- 购物车商品页面的删除窗口 -->
	<div class="del_bg">
		<div class="carts-del">
			<p class="carts-del-top">
				<a class="carts-del-top1">删除商家</a>
				<a>确认删除该商家的所有商品？</a>
			</p>
			<p class="carts-del-btn">
				<span class="carts-del-btn1" @click="hideDel">取消</span>
				<span class="carts-del-btn2" @click="hideDel(),clearLocal()">删除</span>
			</p>
		</div>
	</div>

	
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
    hideDel() {
      this.$emit("delHide", false);
    },
    clearLocal() {
      localStorage.clear();
      // this.$forceUpdate();
      // console.log(111);
      location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
.del_bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  .carts-del {
    background: #fff;
    font-size: 0.14rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.62rem;
    border-radius: 0.08rem;
    .carts-del-top {
      text-align: center;
      padding-bottom: 0.16rem;
      border-bottom: 1px solid #dadade;
      .carts-del-top1 {
        font-size: 0.16rem;
        font-weight: 600;
        line-height: 0.25rem;
        padding-top: 0.18rem;
      }
    }
    .carts-del-btn {
      display: -webkit-flex;
      -webkit-justify-content: space-around;
      .carts-del-btn1 {
        display: block;
        width: 1.9rem;
        line-height: 0.42rem;
        text-align: center;
        border-right: 1px solid #dadade;
        color: #007aff;
      }
      .carts-del-btn2 {
        display: block;
        width: 1.9rem;
        line-height: 0.42rem;
        text-align: center;
        color: #ff3b30;
      }
    }
  }
}
</style>