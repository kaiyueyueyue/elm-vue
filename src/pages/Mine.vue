<template>
  <div class="m-box">

	<!-- m-head -->
	<mine-head></mine-head>
	<div class="m-section">
		<!-- m-wallet -->
		<mine-wallet></mine-wallet>	

		<!-- m-banner -->
		<a href="" class="m-banner">
			<img src="../assets/images/mine/m-banner.jpg" alt="">
		</a>
		<!-- m-uls -->
		<mine-uls></mine-uls>
	</div>
	<!-- elm-foot -->
	<elm-foot-list></elm-foot-list>
</div>
</template>

<script>
import MineHead from "../components/mine/MineHead";
import MineWallet from "../components/mine/MineWallet";
import MineUls from "../components/mine/MineUls";
import ElmFootList from "../components/common/ElmFootList";
export default {
  components: {
    MineHead,
    MineWallet,
    MineUls,
    ElmFootList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url(../assets/fonts/iconfont.css); */
/* @import url(../assets/css/mine.css); */
.m-box {
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}
.m-section {
  flex: 1;
  overflow-y: auto;
}
/*m-banner*/
.m-banner {
  width: 100%;
  margin: 0.1rem 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}

.m-banner img {
  width: 100%;
}
</style>
