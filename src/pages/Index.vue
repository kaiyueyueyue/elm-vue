<template>
	<div class="i-box">
		
	<index-header></index-header>
	<div class="i-section">
		<index-banner></index-banner>
		<index-bannertwo :indexMenu1="indexMenu1" :indexMenu2="indexMenu2"></index-bannertwo>
		<static-banner></static-banner>
		<index-content></index-content>
    
		<index-shop :shopList = "shopList"></index-shop>
	</div>
	
	<elm-foot-list></elm-foot-list>
 <router-link :to="{path:'/cart'}"><index-bag></index-bag></router-link> 
	</div>
</template>

<script>
import restaurantsApi from "../apis/restaurant";
import indexMenuApi from "../apis/indexMenu";

import IndexHeader from "../components/index/IndexHeader.vue";
import IndexBanner from "../components/index/IndexBanner";
import IndexBannertwo from "../components/index/IndexBannertwo";
import StaticBanner from "../components/index/StaticBanner";
import IndexContent from "../components/index/IndexContent";
import IndexShop from "../components/index/IndexShop";
import ElmFootList from "../components/common/ElmFootList";
import IndexBag from "../components/index/IndexBag";
export default {
  components: {
    IndexHeader,
    IndexBanner,
    IndexBannertwo,
    StaticBanner,
    IndexContent,
    IndexShop,
    ElmFootList,
    IndexBag
  },
  data() {
    return {
      shopList: "",
      indexMenu1: "",
      indexMenu2: ""
    };
  },
  methods: {
    initPage() {
      restaurantsApi.getRestaurants(data => {
        this.shopList = data.items;
      });
      indexMenuApi.getIndexMenu(data => {
        // console.log(data);
        this.indexMenu1 = data[0];
        this.indexMenu2 = data[1];
      });
    }
  },

  created() {
    this.initPage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url(../assets/fonts/iconfont.css); */
/* @import url(../assets/css/index.css); */

.i-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.i-section {
  flex: 1;
  overflow-y: auto;
}
</style>
