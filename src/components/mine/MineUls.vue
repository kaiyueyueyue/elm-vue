<template>
    <div class="m-uls">
			<!-- m-address -->
			<ul class="m-address m-common">
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-dingwei m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">收货地址</p>
							<p class="m-common-subtitle"><i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-xin m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">我的收藏</p>
							<p class="m-common-subtitle"><i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-fuwuerji2 m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">我的客服</p>
							<p class="m-common-subtitle"><i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
			</ul>
			<!-- m-welfare -->
			<ul class="m-welfare m-common">
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-cardb m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">饿了么联名卡</p>
							<p class="m-common-subtitle"><span>new</span>免费领百元红包<i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-gift m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">推荐有奖</p>
							<p class="m-common-subtitle">5元现金拿不停<i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-shangcheng2 m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">金币商城</p>
							<p class="m-common-subtitle">0元好物在这里<i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-bangongdalou m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">城市代理申请</p>
							<p class="m-common-subtitle"><span>new</span>最高六个月面抽佣<i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-SIMqiaguanli m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">免费流量</p>
							<p class="m-common-subtitle">每月最高500M<i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-liebiaodaohang_gongyi m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">饿公益</p>
							<p class="m-common-subtitle">点餐也能做公益<i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
			</ul>
			<!-- m-teamwork -->
			<ul class="m-teamwork m-common">
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-dianzan1 m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">欢迎评分</p>
							<p class="m-common-subtitle"><i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-shangpuguanliicon m-common-icon"></i>
						<div class="m-page">
							<p class="m-common-title">加盟合作</p>
							<p class="m-common-subtitle"><i class="iconfont icon-arrow-right"></i></p>
						</div>
					</a>
				</li>
			</ul>
		</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
/* m-uls */
/*m-common*/
.m-common {
  width: 100%;
  background: #fff;
}
.m-common a {
  display: block;
  font-size: 0.15rem;
  line-height: 0.43rem;
}
.m-common .m-common-icon {
  float: left;
  margin: 0 0.27rem;
  font-size: 0.2rem;
}
.m-common li:last-child .m-page {
  border-bottom: 0;
}
.m-page {
  border-bottom: 1px solid #eee;
  overflow: hidden;
}

.m-common-title {
  float: left;
  color: #000000;
}

.m-common-subtitle {
  float: right;
  padding-right: 0.2rem;
  color: #969696;
  font-size: 0.12rem;
}

.m-common-subtitle span {
  display: inline-block;
  line-height: 0.15rem;
  padding: 0 0.03rem;
  background: #f63b0e;
  color: #fff;
  border-radius: 0.05rem;
  margin-right: 0.08rem;
}
/*m-adress*/

.m-address {
  margin-bottom: 0.1rem;
}

.m-address .icon-dingwei {
  color: #45a7f0;
}

.m-address .icon-xin {
  color: #fc7b53;
}

.m-address .icon-fuwuerji2 {
  color: #43a8f8;
}

/*m-welfare*/

.m-welfare {
  margin-bottom: 0.1rem;
}

.m-welfare .icon-cardb {
  color: #4fa5f2;
}

.m-welfare .icon-gift {
  color: #ff794f;
}

.m-welfare .icon-shangcheng2 {
  color: #94d94a;
}

.m-welfare .icon-bangongdalou {
  color: #469dea;
}

.m-welfare .icon-SIMqiaguanli {
  color: #4ca5f5;
}

.m-welfare .icon-liebiaodaohang_gongyi {
  color: #4ca5f5;
}
/*m-teamwork*/

.m-teamwork {
  margin-bottom: 0.1rem;
}

.m-teamwork .icon-dianzan1 {
  color: #4fa5f2;
}

.m-teamwork .icon-shangpuguanliicon {
  color: #ff794f;
}
</style>
