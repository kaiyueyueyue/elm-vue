<template>
    <div class="i-content">
		<!-- i-content-up -->
		<div class="i-content-up">
		  <div class="shop-info">
		  	<h3>商家店铺</h3>
		  </div>
		  <ul class="i-order">
		  	<li :key="index" class="order-one" v-for="(orderlist,index) in orderlists">
		  		{{orderlist}}
		  		<span><img src="../../assets/images/index/order.png"></span>
		  	</li>
		  	<!-- <li>好评优选</li> -->
		  	<!-- <li>距离最近</li> -->
		  	<!-- <li class="order-four"> -->
		  	<!-- <span><img src="img/i-selectone.png"></span> -->
		  	<!-- </li> -->
		  </ul>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			orderlists:["综合排序","好评优选","距离最近","筛选"]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../../assets/fonts/iconfont.css);
@import url(../../assets/css/index.css);
// @import url(../../assets/css/swiper.min.css);

</style>