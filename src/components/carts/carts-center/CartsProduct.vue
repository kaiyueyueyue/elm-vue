<!-- 加入到购物车的商品 -->

<template>
	<div class="cartsBox">
    <!-- 删除的组件 -->
     <carts-del v-show="isSHowDel" @delHide="hideDel"></carts-del>
	
		<ul>
			<li class="carts-li" :key="index" v-for="(c,index) in cartGoodList">
				<a class="carts-title">{{c.shopName}} <i class="iconfont icon-jiantouyou"></i><i class="iconfont icon-shanchu c-title-right" @click="showDel()"></i>
					<ul>
						<li class="cfood" :key="index2" v-for="(f,index2) in c.foods">
							<img :src="f.image_path | filterShopPic" class="food-img"/>
							<ul>
								<li class="food-title">{{f.name}}</li>
								<li class="food-num">X&nbsp;{{f.num}}<span class="food-moneynum">￥&nbsp;{{f.price}}</span></li>
							</ul>
						</li>
			        </ul>
			    </a>
			    <p class="lunch-box">餐盒
			    	<span class="lunch-num">￥3</span>
			    </p>
			    <p class="carts-money">
			    	<span>已享受满减，优惠</span><span class="carts-moneynum">2</span><span>元</span>
			    	<span class="carts-moneyadd">合计</span><span class="carts-addmoney">￥{{c.totalMoney}}</span>
            <router-link :to="{path:'/confirm'}"  class="carts-set">
              去结算
            </router-link>
			    </p>
			    <p class="carts-color"></p>
			</li>
		</ul>
	</div>
	

</template>

<script>
// 引入删除的组件
import CartsDel from "./CartsDel";

export default {
  // updated() {
  //   this.$forceUpdate();
  // },
  components: {
    CartsDel
  },
  methods: {
    showDel() {
      this.isSHowDel = true;
    },
    hideDel() {
      this.isSHowDel = false;
    },

    // del(s, index) {
    //   this.clist.splice(s, 1);
    // },
    // showDel() {
    //   this.isSHowDel = true;
    // },
    // hideDel() {
    //   this.isSHowDel = false;
    // },
    getLocal() {
      var ddd = window.localStorage.getItem("aaa");
      var aaa = JSON.parse(ddd);
      this.cartGoodList = aaa;
      // console.log(aaa);
    }
  },

  data() {
    return {
      isSHowDel: false,

      cartGoodList: ""
    };
  },
  created() {
    this.getLocal();
  },
};
</script>

<!-- 加入到购物车的商品的scss -->
<style lang="scss" scoped>
.carts-li {
  font-size: 0.16rem;
  .carts-title {
    font-size: 0.16rem;
    line-height: 0.48rem;
    color: #323232;
    font-weight: 600;
    padding-left: 0.2rem;
    .icon-jiantouyou {
      padding-left: 0.06rem;
    }
    .icon-shanchu {
      float: right;
      padding-right: 0.3rem;
      color: #656565;
    }
    .cfood {
      width: 100%;
      height: 0.71rem;
      display: -webkit-flex;
      border-top: 1px solid #eee;
      ul {
        flex: 1;
      }
      .food-img {
        width: 0.45rem;
        height: 0.45rem;
        padding-top: 0.15rem;
        padding-right: 0.11rem;
      }
      .food-title {
        line-height: 0.31rem;
        padding-top: 0.06rem;
        padding-bottom: 0.06rem;
      }
      .food-num {
        line-height: 0.2rem;
        padding-bottom: 0.13rem;
        font-size: 0.12rem;
        color: #656565;
        .food-money {
          color: #fc5439;
          padding-left: 2.35rem;
          font-weight: 600;
        }
        .food-moneynum {
          float: right;
          color: #fc5439;
          font-size: 0.14rem;
          font-weight: 600;
          padding-right: 0.15rem;
        }
      }
    }
  }
  .lunch-box {
    line-height: 0.43rem;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    font-weight: 600;
    margin-left: 0.2rem;
    .lunch-num {
      float: right;
      padding-right: 0.15rem;
      color: #fc5439;
    }
  }
  .carts-money {
    line-height: 0.64rem;
    color: #656565;
    font-size: 0.14rem;
    padding-left: 0.2rem;
    .carts-moneynum {
      color: #fc5439;
    }
    .carts-moneyadd {
      padding-left: 0.58rem;
    }
    .carts-addmoney {
      color: #fc5439;
    }
    .carts-set {
      // float: right;
      display: inline-block;
      width: 0.48rem;
      line-height: 0.31rem;
      padding: 0 0.08rem;
      margin-right: 0.15rem;
      border-radius: 0.03rem;
      background: #00d762;
      margin-left: 0.1rem;
      margin-top: 0.15rem;
      color: #fffbff;
    }
  }
  .carts-color {
    height: 0.11rem;
    background: #f5f5f5;
  }
}
</style>

