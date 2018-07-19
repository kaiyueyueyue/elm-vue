<template>
	<ul class="findContent">
      <div class="titleContent">
          <div class="titleContentTop">
              <img :src="pic1"/>
              <i class="iconfont icon-dianzan"></i>
              <h2>{{recommend}}</h2>
              <img :src="pic2"/>
          </div>
          <p>{{taste}}</p>
      </div>
      <find-content></find-content>
      <a href="javascript:;" class="findMore">
          <span>{{more}}</span>
          <img src="../../../assets/images/find/f-content-more.png">
      </a>
	</ul>
</template>

<script>
    import findContent from "./findContent"
    export default {
        name: "findContentList",
      data(){
        return{
            pic1: "./static/img/f-c-left.png",
            recommend: "为你推荐",
            pic2:"./static/img/f-c-right.png",
            taste:"你的口味，我都懂得",
            more:"查看更多",
            // pic3:"./static/img/f-content-more.png"
        }
      },
        components:{
          findContent
        }
    }

</script>

<style scoped>

</style>
