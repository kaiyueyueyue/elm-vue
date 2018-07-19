<!-- 购物车喜欢部分的商品 -->
<template>
	<div class="clike-div">
		<a href="" class="elist" :key="index" v-for="(e,index) in LikeList">
			<img :src="e.foods[0].image_path
 |filterShopPic" class="eimg"/>
			<p class="eword">{{(e.foods)[0].name}}</p>
			<p class="emonth">月售{{(e.foods)[0].month_sales}}份&nbsp;&nbsp;
				<span>好评率{{(e.foods)[0].satisfy_rate}}</span>
      </p>
			<p class="eprice">
				<span class="eprice-sign">￥</span>
				<span class="eprice-num">{{(e.foods)[0].price}}</span>
				<!-- <span class="esale">{{(e.foods)[0].activities[0].tips}}</span> -->
			</p>
			<p class="esell">
				<span  class="esell-name"><i class="iconfont icon-shangpuguanliicon"></i>{{e.restaurant.name}}
				</span>
				<span class="epoint">...</span>
			</p>
		</a>
    </div>
		

</template>

<script type="text/ecmascript-6">
// import CartsLikeListApi from "../../../apis/CartsLikeListApi";
import findListApi from "../../../apis/findList";

export default {
  data() {
    return {
      LikeList: ""
    };
  },
  methods: {
    __initPage() {
      findListApi.getFindList(data => {
        this.LikeList = data.query_list;
        // console.log(this.LikeList);
      });
    }
  },
  created() {
    this.__initPage();
  },

};
</script>

<style lang="scss"  scoped>
.clike-div {
  display: -webkit-flex;
  -webkit-justify-content: space-around;
  flex-wrap: wrap;
  .elist {
    width: 45%;
    height: 3rem;
    border: 1px solid #ebebeb;
    margin-bottom: 0.1rem;
    .eimg {
      width: 100%;
      height: 1.9rem;
    }
    .eword {
      width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.14rem;
      padding-top: 0.07rem;
      margin-left: 0.11rem;
      line-height: 0.22rem;
      font-weight: 600;
      color: #000;
    }
    .emonth {
      font-size: 0.12rem;
      padding-left: 0.11rem;
      line-height: 0.2rem;
      color: #696969;
    }
    .eprice {
      line-height: 0.26rem;
      display: -webkit-flex;
      margin: 0 0.11rem;
      border-bottom: 1px dashed #ebebeb;
      color: #ff4f3d;
      .eprice-sign {
        font-size: 0.1rem;
      }
      .eprice-num {
        font-size: 0.16rem;
      }
      .esale {
        font-size: 0.14rem;
        padding-left: 0.08rem;
      }
    }
    .esell {
      display: -webkit-flex;
      font-size: 0.09rem;
      .esell-name {
        width: 1.2rem;
        margin: 0.11rem 0.15rem 0.11rem 0.11rem;
        color: #000;
        border-right: 1px solid #eee;
        color: #989898;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .icon-shangpuguanliicon {
          font-size: 0.1rem;
        }
      }
      .epoint {
        font-size: 0.1rem;
        color: #646464;
        line-height: 0.3rem;
      }
    }
  }
}
</style>