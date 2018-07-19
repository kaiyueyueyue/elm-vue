<template>
    <div class="swiper-container swiper-container-one ">
        	<div class="swiper-wrapper">
          		<div class="swiper-slide"><img src="../../assets/images/index/i-banner1.png"></div>
          		<div class="swiper-slide"><img src="../../assets/images/index/i-banner2.png"></div>
        	</div>
         	<div class="swiper-pagination"></div>
     </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// import $ from 'jquery'
export default {
  mounted() {
    var mySwiperone = new Swiper(".swiper-container-one ", {
      direction: "horizontal", //horizontal：横向切换  vertical:纵向切换
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
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