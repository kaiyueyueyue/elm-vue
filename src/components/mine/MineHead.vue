<template>
    <div class="m-head">
		<div class="m-head-title">
			<i class="iconfont icon-lingdang"></i>
			<span>我的</span>
			<i class="iconfont icon-shezhi"></i>
		</div>
		<!-- m-infor -->
		<div class="m-head-infor">
			<a href="javascript:;">
				<img src="../../assets/images/mine/m-head.jpg" alt="">
				<p>
					<span>可****丿</span>
					<span><i class="iconfont icon-phone"></i>183****3834</span>
				</p>
				<i class="iconfont icon-arrow-right"></i>
			</a>
		</div>
	  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
/*m-head*/
.m-head {
  width: 100%;
  background: url(../../assets/images/mine/m-head-bg.jpg) center repeat-y;
}
.m-head-title {
  width: 100%;
  color: #fff;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
}
.m-head-title i {
  font-size: 0.18rem;
}
.m-head-title .icon-lingdang {
  margin-left: 0.21rem;
}
.m-head-title .icon-shezhi {
  margin-right: 0.21rem;
}
.m-head-title span {
  font-size: 0.18rem;
}
.m-head-infor a {
  display: block;
  overflow: hidden;
  padding: 0.2rem 0.15rem 0.18rem;
  color: #fff;
}
.m-head-infor img {
  float: left;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin-right: 0.15rem;
}
.m-head-infor p {
  float: left;
}
.m-head-infor p span {
  font-size: 0.15rem;
  display: block;
  line-height: 0.28rem;
}
.m-head-infor p span i {
  font-size: 0.16rem;
}
.m-head-infor .icon-arrow-right {
  float: right;
  padding-top: 0.19rem;
}
</style>
