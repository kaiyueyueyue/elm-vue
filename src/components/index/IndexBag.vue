<template>
  <!-- <div @touchend="touchend" class="i-shopbag"
  > -->
  <div class="i-shopbag">
    <img  src="../../assets/images/index/i-shoppingbag.png">
  </div>
  <!-- </div> -->
</template>
<script>
// import VueTouch from 'vue-touch';
import $ from 'jquery'
export default {

  data () {
    return {
      timer:null,
      isOver:true
    }
  },
  methods: {
    hideIcon() {
      $('.i-shopbag').stop(true,true).animate({'right':'-5%'});
    },
    showIcon() {
      this.timer = setTimeout(() => {
        $('.i-shopbag').stop(true).animate({'right':'3%'});
        this.isOver = true;
      },300);
    },
  },
  mounted() {
    $('.i-section').on('scroll',() => {
      clearTimeout(this.timer);
      if(this.isOver) {
        this.hideIcon();
        this.isOver = false;
      }
      this.showIcon();
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../../assets/fonts/iconfont.css);
@import url(../../assets/css/index.css);
// @import url(../../assets/css/swiper.min.css);
</style>