<!-- 购物车页面组件 -->
<!-- 模板部分 -->
<template>
	<div class="carts">
		<carts-head></carts-head>
		<div class="carts-scroll">
		    <carts-product-list></carts-product-list>
			<like-product-list></like-product-list>
		</div>
	</div>
</template>


<!-- js部分 -->
<script type="text/ecmascript-6">
import CartsHead from "../components/carts/carts-head/CartsHead";

import CartsProductList from "../components/carts/carts-center/CartsProductList";

import LikeProductList from "../components/carts/carts-foot/LikeProductList";

export default {
  components: {
    CartsHead,
    CartsProductList,
    LikeProductList
  }
};
</script>

<!-- scss部分 -->
<style lang="scss">
.carts {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Microsoft JhengHei;
  .carts-scroll {
    flex: 1;
    overflow-y: auto;
  }
}
</style>