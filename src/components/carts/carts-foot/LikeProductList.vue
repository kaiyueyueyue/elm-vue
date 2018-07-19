<!-- 购物车喜欢部分的商品列表 -->
<template>
	<div class="clike-box">
		<p class="clike-word">猜你喜欢</p>
		<like-product></like-product>
	</div>
	

</template>

<script>
// 导入喜欢部分的商品
import LikeProduct from "./LikeProduct"

// 导出喜欢的商品列表

export default {
	
	components:{
	    LikeProduct

	}
}
	

</script>

<!-- 喜欢部分的商品的scss -->
<style lang="scss" scoped>
.clike-box{
	width:100%;
	.clike-word{
		font-size: 0.16rem;
		line-height: 0.51rem;
		padding-left:0.12rem;
		font-weight: 600;
	}
}
</style>

