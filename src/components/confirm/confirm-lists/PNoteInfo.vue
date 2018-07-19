<template>
  <!-- 备注信息 -->
  <section class="p_list four">
    <ul>
      <li class="p_list_con order_add">
        <div class="p_list_left">
          <p class="p_left_title">订单备注</p>
        </div>
        <div class="p_list_right">
          <span class="p_hobby">口味、偏好</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </li>
      <li class="p_list_con order_add" @click="showPanel">
        <div class="p_list_left">
          <p class="p_left_title">餐具份数</p>
        </div>
        <div class="p_list_right">
          <span class="goit"><i class="iconfont icon-shuye"></i>马上助力环保</span>
          <span class="p_choice_num">{{orderNum}}</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </li>
      <li class="p_list_con order_add">
        <div class="p_list_left">
          <p class="p_left_title">匿名购买<i class="iconfont icon-wenhao"></i></p>
        </div>
        <div class="p_list_right">
          <div class="slider">
            <input type="range" />
          </div>
        </div>
      </li>
    </ul>
    <alert-bottom v-show="panelShow" @panelShow="showPanel" @sendNum="getNum"></alert-bottom>
  </section>
</template>

<script>
  import AlertBottom from "./alertBottom"
    export default {
      name: "PNoteInfo",
      components:{
        AlertBottom,
      },
      data() {
        return {
          orderNum:"未选择",
          panelShow:false
        }
      },
      methods:{
        showPanel(h) {
          this.panelShow = h;
        },
        getNum(n) {
          this.orderNum = n + "份餐具";
          console.log(this.orderNum)
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .p_list{
    .order_add{
      height: .49rem;
      .p_list_left{
        .icon-wenhao{
          margin-left:.04rem;
          font-weight: normal;
          @include sc(.12rem, $fc02);
        }
      }
      .p_list_right{
        .p_hobby{
          font-weight: normal;
          @include sc(.12rem, $fc02);
        }
        .goit{
          font-weight: normal;
          @include sc(.12rem, #00ba75);
          .icon-shuye{
            padding-right:.04rem;
          }
        }
        .p_choice_num{
          padding-left:.09rem;
          font-weight: normal;
          @include sc(.12rem, $fc02);
        }
        .slider{
          input[type=range] {
            height: .27rem;
            width:.47rem;
            border:.02rem solid $fc02;
            -webkit-appearance: none;
            border-radius: .23rem;
          }
          /* 滑块的设置 */
          input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: .27rem;
            width:.27rem;
            background: $fc01;
            border-radius: 50%;
            box-shadow: .02rem .02rem .1rem $fc02; /*添加底部阴影*/
          }
          /* 取消边框 */
          input[type=range]:focus {
            outline: none;
          }
        }
      }
    }
  }
  .p_list{
    .p_list_con{
      display: flex;
      justify-content:space-between;
      align-items:center;
      font-size:0;
      border-bottom:1px solid #efefef;
      &:last-child{
        border-bottom:0;
      }
      .p_list_left{
        .p_left_title{
          line-height:.22rem;
          font-weight: bold;
          @include sc(.14rem, $fc03);
        }
        .sub_title{
          line-height: .17rem;
          @include sc(.1rem, $fc02);
          span{
            color:#e05e50;
          }
        }
      }
      .p_list_right{
        span{
          font-weight: bold;
          @include sc(.14rem, #2292f6);
          vertical-align: middle;
        }
        .icon-arrow-right{
          padding-left:.1rem;
          vertical-align: middle;
          @include sc(.14rem, $fc02);
        }
      }
    }
    .service_time{
      padding:.11rem 0 .15rem;
    }
    .pay_ways_main{
      padding:.15rem 0 .1rem;
    }
  }
</style>
