<template>
    <div class="l-form">
		<form action="javascript:;">
			<input type="text" placeholder="手机/邮箱/用户名" class="l-account">
			<p><input type="password" placeholder="密码" class="l-psd"><i class="iconfont icon-yanjing-bi l-display"></i></p>
			<input type="button" value="登录" class="l-btn">
		</form>
		<a href="javascript:;">忘记密码？</a>
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.l-form {
  width: 100%;
  margin-top: 0.15rem;
  overflow: hidden;
  flex: 1;
  input {
    display: block;
    width: 100%;
    height: 0.48rem;
    border: 0;
    border-top: 1px solid #eaeaea;
    text-indent: 0.16rem;
    outline: none;
  }
  p {
    width: 100%;
    position: relative;
    .l-psd {
      border-bottom: 1px solid #eaeaea;
    }
    .l-display {
      display: block;
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .l-btn {
    text-indent: 0;
    width: 92%;
    height: 0.48rem;
    background: #4dc160;
    margin: 0.15rem auto;
    color: #fff;
    font-size: 0.16rem;
  }
  a {
    float: right;
    color: #018cd1;
    margin-right: 0.25rem;
    margin-top: 0.1rem;
    font-size: 0.12rem;
  }
}
</style>
