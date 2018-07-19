<template>
  <!-- 店铺订单信息 -->
  <div>
  <section class="shop_info two" :key="index" v-for="(c,index) in cartGoodList">
    <div class="shop_name">{{c.shopName}}</div>
    <div class="shop_list">
      <ul class="shop_menu">
        <li :key="x" v-for="(p,x) in c.foods">
              <div class="shop_menu_left">
              <div class="food_img"><img :src="p.image_path | filterShopPic" alt="" /></div>
              <p class="food_des">{{p.name}}</p>
            </div>
            <div class="shop_menu_right">
              <span class="food_num">x{{p.num}}</span>
              <span class="old_price">￥12.50</span>
              <span class="new_price">￥{{p.price.toFixed(2)}}</span>
            </div>
          
        </li>
      </ul>
      <ul class="shop_add">
        <li>
          <div class="shop_add_left">
            <span class="shop_add_tag">配送费</span>
            <span class="shop_add_des">蜂鸟快送</span>
          </div>
          <div class="shop_add_right">
            <span class="shop_add_price">￥2.0</span>
          </div>
        </li>
        <li>
          <div class="shop_add_left">
            <span class="shop_add_tag">包装费</span>
            <span class="shop_add_des">餐盒</span>
          </div>
          <div class="shop_add_right">
            <span class="shop_add_price">￥2.0</span>
          </div>
        </li>
        <li>
          <div class="shop_add_left">
            <span class="shop_add_tag new_guest">新客</span>
            <span class="shop_add_des">餐盒</span>
          </div>
          <div class="shop_add_right">
            <span class="shop_add_price new_guest_color">-￥2.0</span>
          </div>
        </li>
      </ul>
      <p class="shop_notice">满赠活动与单品不共享</p>
      <div class="red_packet">
        <div class="red_packet_left">
          <p class="red_packet_title">红包</p>
        </div>
        <div class="red_packet_right">
          <span>无可用红包</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="preferential_des">
        <div class="preferential_des_left">
          <p class="preferential_des_title">优惠说明<i class="iconfont icon-wenhao"></i></p>
        </div>
        <div class="preferential_des_right">
          <p>小计 <span>￥{{c.totalMoney.toFixed(2)}}</span></p>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartGoodList: ""
    };
  },
  name: "PShopInfo",
  methods: {
    getLocal() {
      var ddd = window.localStorage.getItem("aaa");
      var aaa = JSON.parse(ddd);
      this.cartGoodList = aaa;
      // console.log(aaa);
    }
  },
  created() {
    this.getLocal();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin.scss";
.shop_info {
  background: white;
  padding: 0 0.16rem;
  .shop_name {
    font-weight: bold;
    line-height: 0.48rem;
    @include sc(0.14rem, $fc03);
    border-bottom: 1px solid #efefef;
  }
  .shop_list {
    .shop_menu {
      li {
        @include fj();
        align-items: center;
        height: 0.62rem;
        .shop_menu_left {
          @include fj();
          align-items: center;
          .food_img {
            width: 0.36rem;
            height: 0.36rem;
            padding-right: 0.09rem;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .food_des {
            @include sc(0.14rem, $fc03);
          }
        }
        .shop_menu_right {
          @include fj();
          align-items: center;
          span {
            display: block;
            font-weight: bold;
            padding-left: 0.12rem;
          }
          .food_num {
            font-weight: normal;
            @include sc(0.08rem, $fc03);
          }
          .old_price {
            text-decoration: line-through;
            @include sc(0.12rem, #bbb);
          }
          .new_price {
            @include sc(0.12rem, $fc03);
          }
        }
      }
    }
    .shop_add {
      li {
        @include fj();
        height: 0.31rem;
        align-items: center;
        padding-bottom: 0.13rem;
        span {
          display: block;
        }
        .shop_add_left {
          display: flex;
          text-align: center;
          .shop_add_tag {
            // width: 0.35rem;
            @include sc(0.09rem, #818eae);
            background-color: #f1f3f2;
            border: 1px solid #d0d4d7;
            @include borderRadius(3px);
          }
          .new_guest {
            @include sc(0.09rem, #758561);
            background-color: #ebfae7;
          }
          .shop_add_des {
            padding-left: 0.13rem;
            @include sc(0.13rem, $fc03);
          }
        }
        .shop_add_right {
          .shop_add_price {
            font-weight: bold;
            @include sc(0.11rem, $fc03);
          }
          .new_guest_color {
            color: #ff4d41;
          }
        }
      }
    }
    .shop_notice {
      line-height: 0.31rem;
      @include sc(0.13rem, #9a9a9a);
      padding: 0.07rem 0 0.23rem;
    }
    .red_packet {
      @include fj();
      align-items: center;
      font-size: 0;
      border-top: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
      .red_packet_left {
        .red_packet_title {
          font-weight: bold;
          line-height: 0.47rem;
          @include sc(0.13rem, $fc03);
        }
      }
      .red_packet_right {
        span {
          @include sc(0.13rem, $fc02);
          vertical-align: middle;
        }
        .icon-arrow-right {
          padding-left: 0.1rem;
          vertical-align: middle;
          @include sc(0.13rem, $fc02);
        }
      }
    }
    .preferential_des {
      @include fj();
      align-items: center;
      font-size: 0;
      .preferential_des_left {
        .preferential_des_title {
          line-height: 0.52rem;
          @include sc(0.13rem, $fc02);
          .icon-wenhao {
            margin-left: 0.04rem;
            @include sc(0.12rem, $fc02);
          }
        }
      }
      .preferential_des_right {
        p {
          @include sc(0.13rem, $fc03);
          span {
            font-weight: bold;
            @include sc(0.16rem, $fc03);
          }
        }
      }
    }
  }
}
</style>
