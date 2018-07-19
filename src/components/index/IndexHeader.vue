<template>
     <div class="i-header">
		<!-- header的上部 -->
		<div class="i-header-up">
			<!-- <a href="javascript:;"> -->
				<router-link :to="{path:'/address'}">
					<i class="iconfont icon-address"></i>
					<span class="adree">{{name}}{{address}}</span>
				</router-link>
				<!-- <img :src="pics[0].picurl"> -->
			<!-- </a> -->
			<a href="javascript:;" class="up-right">
				<span>{{prawn}}
					<br>{{money}}</span>
				<!-- <img class="prawn" :src="pics[0].picurl"> -->
				<img class="prawn" src="../../assets/images/index/prawn.png">
	    	</a>
		</div>
		<!-- header的中部 -->
		<div class="i-header-mid">
			<router-link :to="{path:'search'}">
				<a href="javascript:;" >
					<!-- <img src="../../assets/img/index/i-search.png">  -->
					{{redbag}}
				</a>
			</router-link>
		</div>
		<!-- header的底部 -->
		<div class="i-header-bottom">
			<a href="javascript:;" :key="index" v-for="(headlist,index) in headlists">
				{{headlist}}
			</a>
		</div>
	</div>
</template>
<script>
import Search from "../../pages/elmSearch";
import $ from "jquery";
export default {
  data() {
    return {
      name: "",
      address: "",
      headlists: [
        "咖啡",
        "鱼汤",
        "蛋糕",
        "蔬菜减20",
        "北京烤鸭",
        "酸菜鱼",
        "擀面皮"
      ],
      prawn: "抓龙虾",
      money: "拿红包",
      // adree: "陕西省西安市雁塔区高新路",
      redbag: "最高领20元红包",
      pics: [
        {
          picurl: "../../assets/images/index/prawn.png"
        }
      ]
    };
  },
  components: {
    Search
  },
  methods: {
    getAddress() {
      console.log(this.$router.query);
      if (this.$route.query.name == undefined) {
        this.address = "请选择地址";
      } else {
        this.address = this.$route.query.address;
        this.name = this.$route.query.name;
      }
    }
  },
  created() {
    this.getAddress();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../../assets/fonts/iconfont.css);
@import url(../../assets/css/index.css);
</style>