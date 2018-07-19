<template>
    <div class="l-box">
	<div class="l-title">
		<i class="iconfont icon-fanhui"></i>
		<p>密码登录</p>
	</div>

	<login-form></login-form>

	<div class="l-foot">
		<p>第三方登录</p>
		<div class="l-icon">
			<a href="javascript:;">
				<i class="iconfont icon-weixin"></i>
				<span>微信</span>
			</a>
			<a href="javascript:;">
				<i class="iconfont icon-qq"></i>
				<span>QQ</span>
			</a>
			<a href="javascript:;">
				<i class="iconfont icon-sina"></i>
				<span>微博</span>
			</a>
			<a href="javascript:;">
				<i class="iconfont icon-tao"></i>
				<span>淘宝</span>
			</a>
		</div>
	</div>
</div>
</template>
<script>
import LoginForm from "../components/login/LoginForm";
export default {
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.l-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.l-title {
  line-height: 0.52rem;
  overflow: hidden;
  background: url(../assets/images/login/l-title-bg.jpg) center repeat-y;
  color: #fff;
  i {
    float: left;
    margin: 0 0.3rem;
  }
  p {
    font-size: 0.16rem;
    float: left;
  }
}
/*l-foot*/
.l-foot {
  width: 100%;
  padding-bottom: 0.38rem;
}
.l-foot p {
  width: 100%;
  font-size: 0.12rem;
  text-align: center;
  margin-bottom: 0.26rem;
}
.l-foot p:before {
  content: "";
  display: inline-block;
  width: 12%;
  background: #eee;
  height: 1px;
  vertical-align: middle;
  margin-right: 0.15rem;
}
.l-foot p:after {
  content: "";
  display: inline-block;
  width: 12%;
  height: 1px;
  vertical-align: middle;
  margin-left: 0.15rem;
  background: #eee;
}

.l-icon {
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  i {
    display: block;
    font-size: 0.3rem;
    color: #656565;
  }
  span {
    font-size: 0.09rem;
    display: block;
    color: #656565;
    line-height: 0.21rem;
  }
  .icon-weixin {
    color: #3fbf37;
  }
  .icon-qq {
    color: #12b8f6;
  }
  .icon-sina {
    color: #d0162b;
  }
  .icon-tao {
    color: #ff3b00;
  }
}
</style>
