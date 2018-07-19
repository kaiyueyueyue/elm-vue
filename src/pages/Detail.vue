<template>
	<div class="total">
	<!-- 顶部导航 -->
	<div class="d-nav">
	<img class="d-nav-box" v-if="shopInfor.shop_sign" :src="shopInfor.shop_sign.image_hash | filterShopPic" alt="">
		<div class="d-nav_icon">
      <router-link :to="{path:'/'}">
			<a href="javascript:;"><i class="iconfont icon-zuojiantou"></i></a></router-link>
			<div class="d-right_icon">
				<a href="javascript:;"><i class="iconfont icon-public-bigserach"></i></a>
				<a href="javascript:;"><i class="iconfont icon-pin"></i></a>
				<a href="javascript:;"><i class="iconfont icon-diandiandian"></i></a>
			</div>
		</div>
	</div>
	<!-- 中间标题 -->
	<div class="d-header">
		<h3 class="shopNAME">{{shopInfor.name}}</h3>
		<p class="d-eva">
			<span>评价{{shopInfor.rating}}</span>
			<span>月售{{shopInfor.recent_order_num
}}</span>
			<span>蜂鸟转送约40分钟</span>
		</p>
		<a class="d-ticket" href="javascript:;"><span>￥8 无门槛</span><span>领取</span></a>
		<div class="d-active">
			<div class="d-activities">
				<div>
					<span>首单</span>
					<span v-if="(shopInfor.activities)">{{(shopInfor.activities)[0].tips}}</span>
				</div>
				<span>3个优惠<i class="iconfont icon-zuojiantou"></i></span>
			</div>
			<p>{{shopInfor.promotion_info}}</p>
		</div>
	</div>
	<!-- 推荐活动选项 -->
	<div class="d-shop_tab">
		<a href="javascript:;" class="d-shop_tab_active">点餐</a>
		<a href="javascript:;">评价</a>
		<a href="javascript:;">商家</a>
	</div>
	<div class="d-recommend">
		<h4 class="d-recommend_title">商家推荐</h4>
		<div class="d-rec">
			<div>
				<a href="javascript:;"><img src="../assets/images/detail/img1.jpg"></a>
				<h4>福记酱龙骨</h4>
				<p class="d-sales">月售143 <span>好评率94%</span></p>
				<p class="d-recommend_price">
					<span>￥28</span>
					<a href="javascript:;"><i class="iconfont icon-add"></i></a>
				</p>
			</div>
			<div>
				<a href="javascript:;"><img src="../assets/images/detail/img2.jpg"></a>
				<h4>辣椒炒肉</h4>
				<p class="d-sales">月售29</p>
				<p class="d-recommend_price">
					<span>￥32</span>
					<a href="javascript:;"><i class="iconfont icon-add"></i></a>
				</p>
			</div>
			<div>
				<a href="javascript:;"><img src="../assets/images/detail/img3.jpg"></a>
				<h4>福记2-4人餐</h4>
				<p class="d-sales">月售9</p>
				<p class="d-recommend_price">
					<span>￥115</span>
					<a href="javascript:;"><i class="iconfont icon-add"></i></a>
				</p>
			</div>
		</div>
	</div>
	<div class="d-sell">
		<div class="d-sell_left">
			<h3>热销</h3>
			<h4 :key="index" v-for="(p,index) in shopMenu"><a :href=" '#'+ p.id">{{p.name}}</a></h4>
		</div>
		<div class="d-sell_right">
			<h3>热销 <span>大家喜欢吃，才叫真好吃。</span></h3>
			<div class="d-sell-box" :key="styleList" v-for="(total,styleList) in shopMenu" :id="total.id">
        <div class="d-sell_right_food" :key="index" v-for="(c,index) in total.foods">

        <!-- 陈路修改 -->
          <div class="d-sell_right_food_img">
            <img :src="c.image_path | filterFoodsPic"/>
          </div>

					<div class="d-sell_right_cont">
						<div>
							<h4>{{c.name}}</h4>
							<p class="d-sell_sales">月销售{{c.month_sales}}&nbsp;&nbsp; 好评率{{c.satisfy_rate}}</p>
						</div>
						<p class="d-sell_price">
							<span>￥{{c.specfoods[0].price}}</span>
                <i class="iconfont icon-add" @click=" cartAdd(styleList,index)"></i>
                <input class="d-sell-num" v-model="c.num">
							  <i class="iconfont icon-53" @click=" cartMin(styleList,index)"></i>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  <div class="d-cart">
    <div class="d-cart-left">
      <p class="d-num">
        <i class="iconfont icon-ai-cart"></i>
        <span>{{totalNum}}</span>
      </p>
      <div class="d-total">
        <p class="price">￥{{totalMoney}}</p>
        <p>另需配送费5元</p>
      </div>
      
    </div>
    <router-link :to="{path:'/cart'}">
    <a href="javascript:;" class="d-cart-right">
        去结算
    </a>
    </router-link>

  </div>
	</div>
</template>
<script>
// import goodsNum from "../components/detail/goodsNum";
import shopMenuApi from "../apis/shopMenu";
import shopInforApi from "../apis/shopInfor";
// import $ from "jquery";
export default {
  data() {
    return {
      shopMenu: "",
      shopInfor: {},
      shopID: "",
      totalNum: 0,
      totalMoney: 0,
      good: [],
      totalData: ""
    };
  },
  components: {
    // goodsNum
  },
  methods: {
    // 添加商品
    cartAdd(styleList, index) {
      this.shopMenu[styleList].foods[index].num++;
      this.counter(this.shopMenu);
      // console.log(this.good.indexOf(this.shopMenu[styleList].foods[index]));
      if (this.good.indexOf(this.shopMenu[styleList].foods[index]) == -1) {
        // console.log(111);
        this.good.push(this.shopMenu[styleList].foods[index]);
      } else {
      }
      this.totalData = [
        {
          shopName: this.shopInfor.name,
          totalMoney: this.totalMoney,
          totalNum: this.totalNum,
          foods: []
        }
      ];
      this.good.forEach(item => {
        this.totalData.forEach((j, k) => {
          this.totalData[0].foods.push({
            image_path: item.image_path,
            name: item.name,
            price: item.specfoods[0].price,
            num: item.num
          });
        });
      });

      let infor = JSON.stringify(this.totalData);
      window.localStorage.setItem("aaa", infor);
      // console.log(this.good);
      // console.log(data);
    },

    // 删减商品
    cartMin(styleList, index) {
      this.shopMenu[styleList].foods[index].num--;
      if (this.shopMenu[styleList].foods[index].num <= 0) {
        this.shopMenu[styleList].foods[index].num = 0;
      }

      this.counter(this.shopMenu);
    },
    //计算总数量,总价
    counter(data) {
      this.totalNum = 0;
      this.totalMoney = 0;
      data.forEach(item => {
        //总件数
        item.foods.forEach(food => {
          this.totalNum += food.num;
        });
        //总价格
        item.foods.forEach(food => {
          this.totalMoney += food.num * food.specfoods[0].price;
        });
      });
    },

    //初始化页面
    initPage(key) {
      //获取菜单数据
      shopMenuApi.getShopMenu(key, (data, id) => {
        // console.log(data);
        this.shopMenu = data;

        data.forEach((i, k) => {
          i.foods.forEach((item, index) => {
            item.num = 0;
          });
        });
      });

      // 获取店铺详情
      shopInforApi.getShopInfor(key, data => {
        // console.log(data);
        this.shopInfor = data;
      });
    }
  },
  filters: {
    filterFoodsPic(pic) {
      let type = "";
      if (pic.indexOf("jpeg") > 0) {
        type = "jpeg";
      } else {
        type = "png";
      }
      return `//fuss10.elemecdn.com/${pic.substring(0, 1)}/${pic.substring(
        1,
        3
      )}/${pic.slice(
        3
      )}.${type}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`;
    },
    filterShopPic(pic) {
      let type = "";
      if (pic.indexOf("jpeg") > 0) {
        type = "jpeg";
      } else {
        type = "png";
      }
      return `https://fuss10.elemecdn.com/${pic.substring(
        0,
        1
      )}/${pic.substring(1, 3)}/${pic.slice(
        3
      )}.${type}??imageMogr/format/webp/`;
    }
  },
  created() {
    // console.log(this.$route.params.shopID)
    this.shopID = this.$route.params.shopID;
    this.initPage(this.shopID);
  }
};
</script>


<style lang="scss" scoped>
.total {
  display: -webkit-flex;
  flex-direction: column;
  width: 100%;
}

/*detail section*/
.shopNAME {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.d-nav {
  width: 100%;
  height: 1.25rem;
  padding-top: 0.2rem;
  background-size: cover;
  position: relative;
}
.d-nav .d-nav-box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.d-nav:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0),
    rgba(0, 0, 0, 0.5)
  );
}

.d-nav .d-nav_icon {
  /*width:100%;*/
  padding-top: 0.12rem;
  /*background:pink;*/
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.d-nav_icon .icon-zuojiantou {
  color: white;
  font-size: 0.2rem;
  float: left;
  padding-left: 0.15rem;
}

.d-right_icon {
  float: right;
  padding-right: 0.15rem;
}

.d-right_icon a {
  float: left;
}

.d-right_icon i {
  float: left;
  color: white;
  font-size: 0.2rem;
  margin-left: 0.18rem;
}

.d-right_icon .icon-diandiandian {
  position: relative;
}

.d-right_icon .icon-diandiandian:after {
  position: absolute;
  top: 0;
  right: -13px;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: 5px solid red;
  border-radius: 50%;
}

/*第二版块*/

.d-header {
  width: 100%;
  height: 1.57rem;
  /*background:#eee;*/
  padding-top: 0.25rem;
}

.d-header h3 {
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.3rem;
}

.d-header .d-eva {
  line-height: 0.32rem;
  font-size: 0.12rem;
  text-align: center;
  color: #939393;
}

.d-header .d-eva span:first-child {
  margin-right: 0.12rem;
}

.d-header .d-eva span:nth-child(2) {
  margin-right: 0.12rem;
}

.d-ticket {
  font-size: 0.12rem;
  color: #6a3602;
  text-align: center;
  display: table;
  margin: 0 auto;
}

.d-ticket span:first-child {
  width: 1.12rem;
  line-height: 0.24rem;
  background: #ffe577;
  padding: 0 0.16rem;
  border-right: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.d-ticket span:nth-child(2) {
  width: 0.33rem;
  height: 0.24rem;
  background: #ffe577;
  padding: 0 0.06rem 0 0.04rem;
  border-left: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.d-active {
  width: 3.35rem;
  margin: 0 auto;
}

.d-activities {
  font-size: 0.12rem;
  line-height: 0.24rem;
  color: #727272;
  overflow: hidden;
  display: -webkit-flex;
  justify-content: space-between;
}

.d-activities div span:first-child {
  font-size: 9px;
  color: #879677;
  padding: 1px;
  line-height: 0.12rem;
  align-self: center;
  border: 1px solid #e7f1e4;
  background: #e8fae2;
}

.d-activities span:last-child i {
  display: inline-block;
  font-size: 0.06rem;
  margin-left: 0.05rem;
  transform: rotate(270deg);
}

.d-active p {
  line-height: 0.24rem;
  font-size: 0.12rem;
  width: 3.34rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #a5a5a5;
}

/*活动部分选项卡*/

.d-shop_tab {
  width: 100%;
  height: 0.33rem;
  /*background:#ccc;*/
  display: flex;
  justify-content: space-around;
}

.d-shop_tab a {
  font-size: 0.14rem;
  color: #252525;
  line-height: 0.32rem;
}

.d-shop_tab .d-shop_tab_active {
  border-bottom: 2px solid #0074fe;
  font-weight: bold;
}

.d-recommend {
  width: 100%;
  background: #eee;
  padding: 0.1rem;
  box-sizing: border-box;
}

.d-recommend .d-recommend_title {
  font-size: 0.12rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
}

.d-rec div a {
  display: block;
}

.d-rec div a img {
  width: 1.1rem;
}

.d-recommend .d-rec h4 {
  font-size: 0.12rem;
  font-weight: bold;
  line-height: 0.32rem;
}

.d-rec {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.d-rec .d-sales {
  font-size: 0.09rem;
  line-height: 0.09rem;
  color: #bcbcbc;
}

.d-recommend_price {
  display: -webkit-flex;
  justify-content: space-between;
  margin-bottom: 0.04rem;
}

.d-recommend_price span:first-child {
  font-size: 0.16rem;
  line-height: 0.4rem;
  color: #f62807;
  font-weight: bold;
}

.d-recommend_price a i {
  display: block;
  line-height: 0.4rem;
  font-size: 0.22rem;
  color: #2395ff;
}

.d-sell {
  width: 100%;
  height: 5rem;
  /*flex:1;*/
  display: -webkit-flex;
  /*background:pink;*/
  /*overflow-y:scroll; */
}

.d-sell_left {
  width: 0.8rem;
  background: #f8f8f8;
  float: left;
  padding-bottom: 0.5rem;
  overflow-y: auto;
}

.d-sell_left h3 {
  font-size: 0.12rem;
  line-height: 0.24rem;
  background: white;
  padding-bottom: 0.12rem;
  padding-left: 0.15rem;
}

.d-sell_left h4 {
  font-size: 0.12rem;
  line-height: 0.16rem;
  padding: 0.16rem 0 0.16rem 0.15rem;
  /*padding-left:0.15rem;*/
  color: #5c5c5c;
}
.d-sell_left h4 a {
  color: #5c5c5c;
}
.d-sell_right {
  /* width: 3.34rem; */
  flex: 1;
  overflow-y: auto;
}

.d-sell_right h3 {
  font-size: 0.12rem;
  line-height: 0.24rem;
  color: #646464;
  padding-left: 0.12rem;
  /*margin-bottom:0.12rem;*/
}

.d-sell_right h3 span {
  font-size: 0.1rem;
  line-height: 0.24rem;
  color: #b8b8b8;
}

.d-sell_right_food {
  display: flex;
  padding: 0.12rem 0 0.09rem;
}

.d-sell_right_food_img {
  width: 0.84rem;
  height: 0.84rem;
  img {
    width: 100%;
    height: 100%;
  }
}

.d-sell_right_cont {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 0.16rem;
  padding-left: 0.1rem;
}

.d-sell_right_food div h4 {
  font-size: 0.16rem;
  line-height: 0.16rem;
  margin-bottom: 0.06rem;
  color: #262626;
}

.d-sell_sales {
  width: 1.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.1rem;
  line-height: 0.2rem;
  color: #9c9c9c;
}

.d-sell_price {
  font-size: 0.16rem;
  line-height: 0.24rem;
  font-weight: bold;
  color: #fd1900;
  // display: -webkit-flex;
  // justify-content: space-between;
}
.d-sell_price .d-sell-num {
  // border: 0;
  // width: 0.15rem;
  // float: right;
  // padding: 0 0.1rem;
  // color: black;
  // font-weight: normal;
  // text-align: center;
  // padding-top: 0.04rem;
  // vertical-align: middle;

  border: 0;
  width: 0.15rem;
  float: right;
  padding: 0 0.1rem;
  color: black;
  font-weight: normal;
  text-align: center;
  padding-top: 0.04rem;
  vertical-align: middle;
}
.d-sell_price i {
  font-weight: normal;
  color: #2497fc;
  font-size: 0.22rem;
  float: right;
  vertical-align: middle;
}
.d-sell-box {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.d-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  font-size: 0.12rem;
  background: #3d3e40;
  .d-cart-left {
    padding-left: 0.15rem;
    .d-num {
      float: left;
      position: relative;
      margin-right: 0.15rem;
      padding-top: 0.1rem;
      i {
        font-size: 0.3rem;
        color: #2595fb;
      }
      span {
        text-align: center;
        font-size: 0.12rem;
        position: absolute;
        top: 0.1rem;
        right: 0rem;
        z-index: 2;
        width: 0.15rem;
        line-height: 0.15rem;
        border-radius: 50%;
        background: #fd4215;
        color: #fff;
      }
    }
    .d-total {
      float: left;
      p {
        font-size: 0.08rem;
        color: #9b9b9b;
      }
      .price {
        font-size: 0.2rem;
        color: #fff;
        font-weight: 900;
        padding-top: 0.05rem;
      }
    }
  }
  .d-cart-right {
    font-size: 0.15rem;
    text-align: center;
    float: right;
    width: 1.05rem;
    line-height: 0.5rem;
    background: #59d178;
    color: #fff;
  }
}
</style>
