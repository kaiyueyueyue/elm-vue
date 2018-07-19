<!-- carts的头部组件 -->
<template>
<!-- carts的头部板块 -->
<div>
  <carts-empty  v-show="isSHowEmpBox" @empHide="hideEmp"></carts-empty>

	<div class="carts-head">
    <router-link :to="{path:'/'}">
      <a href="javascript:;" class="c-bank"><i class="iconfont icon-jiantouzuo"></i></a>
    </router-link>
		<a class="c-cart">购物车</a>
		<a class="empty" @click="showEmp()">清空</a>
	</div>
	<!-- <carts-product-list></carts-product-list> -->

</div>
	

</template>


<script type="text/ecmascript-6">
/*导入清空的组件*/
import CartsEmpty from "./CartsEmpty";

export default {
  components: {
    CartsEmpty
  },
  methods: {
    showEmp() {
      this.isSHowEmpBox = true;
    },
    hideEmp() {
      this.isSHowEmpBox = false;
    }
  },

  data() {
    return {
      isSHowEmpBox: false
    };
  }
};
</script>

<!-- 头部的scss -->
<style lang="scss" scoped>
.carts-head {
  width: 100%;
  height: 0.483rem;
  display: -webkit-flex;
  -webkit-align-items: center;
  color: #fff;
  background: #03a0ff;
  .c-bank {
    padding-left: 0.16rem;
    font-size: 0.14rem;
    color: #fff;
  }
  .c-cart {
    font-size: 0.18rem;
    padding-left: 1.2rem;
  }
  .empty {
    font-size: 0.16rem;
    padding-left: 1.2rem;
  }
}
</style>