<template>
    <div class="i-shop">
			
		<ul class="i-shop-ul">
			<!-- 每一个li是一个商铺 -->
			<li :key="index" v-for="(p,index) in shopList">
			<router-link class="router-box" :to="{name:'detail',params:{shopID:p.restaurant.id}}">
				<!-- 商铺的左边 -->
				<img class="i-shop-pic" :src="p.restaurant.image_path | filterShopPic">
				<!-- 商铺的右边 -->
				<div class="li-right">
					<!-- 商铺右边的上部分 -->
					<div class="li-right-up">
						<!-- 上部分的左边 -->
							<p class="shop-title">
								<span class="shopName">{{p.restaurant.name}}</span>
								<span class="dislike">...</span>
							</p>
							<a class="shop-comment">
								<img src="../../assets/images/index/i-star.png">
								<span>{{p.restaurant.rating}}</span>
								<span>月销{{p.restaurant.recent_order_num
}}</span>
							</a>
							<p class="shop-sale">
								<a href="javascript:;">起送￥{{p.restaurant.piecewise_agent_fee.rules[0].price}} | {{p.restaurant.piecewise_agent_fee.tips}}</a>
								<a class="shop-time">{{p.restaurant.order_lead_time
}}分钟 | {{(p.restaurant.distance /1000).toFixed(1) + 'km'}}</a>
							</p>
							<!-- <a class="shop-style">{{shopStyle[index]}}</a> -->
							<p class="shopping-first">
								<a>首单</a>
								<span>{{ p.restaurant.activities[0] !=undefined  ?p.restaurant.activities[0].description :'无优惠'}}</span>
					            <!-- <img src="../../assets/images/index/i-jiantou2.png"> -->
							</p>
							<p class="shopping-two">
								<a>满减</a>
								<span>{{p.restaurant.activities[1]== undefined ? '' : p.restaurant.activities[1].description}}</span>
							</p>
					</div>
					<!-- 店铺右边的下部分 -->
					<p class="li-right-down">
						<a href="javascript:;" class="i-other">
							<i class="iconfont icon-address"></i>
					       <span>附近还有{{shopNum[index]}}家店</span>
					   </a>
					  <img src="../../assets/images/index/i-jiantou2.png">
					</p>
				</div>
		</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
// import restaurantsApi from "../../apis/restaurant";
export default {
	props: ["shopList"],
  data() {
    return {
			// shopList:'',
      shopNum: [3, 5, 1, 6, 7, 3, 9, 6, 4, 5, 1, 6, 7, 3, 9, 6, 4, 5, 1, 6, 7, 3, 9, 6, 4],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../../assets/fonts/iconfont.css);
@import url(../../assets/css/index.css);
// @import url(../../assets/css/swiper.min.css);
.router-box{
	width: 100%;
	display: flex;
	}
.shopName{
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color:#000;
}
.i-shop-ul li .li-right{
	flex: 1;
}
</style>