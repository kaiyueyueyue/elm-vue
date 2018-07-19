<template>
	<div class="findMain">
    <find-nav-list></find-nav-list>
		<find-banner></find-banner>
    <find-content-list></find-content-list>
    <find-bot-list></find-bot-list>
	</div>
</template>

<script>
    import findBanner from "./findBanner"
    import findBotList from "./findBotList"
    import findContentList from "./findContentList"
    import findNavList from "./findNavList"
    import Swiper from "swiper"
    export default {
        name: "findMain",
        mounted() {
        var mySwiper = new Swiper('.swiper-container',{
          direction:"horizontal",
          loop:true,
          pagination : {el:'.swiper-pagination'},
          autoplay : 5000,
        })
      },
        components:{
        	findBanner,
        	findBotList,
        	findContentList,
        	findNavList
        }
    }

</script>

<style scoped>
  .findMain{
    width: 100%;
  }
</style>
