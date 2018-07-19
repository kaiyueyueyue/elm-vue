<template>
    <div class="swiper-container swiper-container-two">
      <!-- {{indexMenu}} -->
        <div class="swiper-wrapper">
          <div class="swiper-slide">
             <div class="slide-up">
                <a href="javascript:;" :key="index" v-for="(c,index) in indexMenu1.entries"><img :src="c.image_hash | filterShopPic"><span>{{c.name}}</span></a>
             </div>
          </div>
          <div class="swiper-slide">
              <div class="slide-two">
                <a href="#"><img src="../../assets/images/index/i-se-two1.png"><span>浪漫鲜花</span></a>
                <a href="#"><img src="../../assets/images/index/i-se-two2.png"><span>披萨意面</span></a>
                <a href="#"><img src="../../assets/images/index/i-se-two3.png"><span>快餐便当</span></a>
                <a href="#"><img src="../../assets/images/index/i-se-two4.png"><span>汉堡薯条</span></a>
                <a href="#"><img src="../../assets/images/index/i-se-two5.png"><span>炸鸡炸串</span></a>
             </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-two "></div>
     </div>
</template>
<script>
import Swiper from "swiper";
// import "swiper/dist/css/swiper.min.css";
// import $ from 'jquery'
export default {
  props: ["indexMenu1"],

  mounted() {
    var mySwipertwo = new Swiper(".swiper-container-two ", {
      pagination: {
        el: ".swiper-pagination-two"
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../../assets/fonts/iconfont.css);
@import url(../../assets/css/index.css);
// @import url(../../assets/css/swiper.min.css);
</style>