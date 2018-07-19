<template>
	  <ul class="findBot">
        <div class="titleContent">
            <div class="titleContentTop">
                <img :src="pic1"/>
                <i class="iconfont icon-zhongbiao"></i>
                <h2>{{gifts}}</h2>
                <img :src="pic2"/>
            </div>
            <p>{{money}}</p>
        </div>
        <find-bot></find-bot>
        <a href="javascript:;" class="findMore">
            <span>{{more}}</span>
            <img :src="pic3">
        </a>
	</ul>
</template>

<script>
    export default {
        name: "findBotList",
        data(){
          return{
            pic1:"./static/img/f-c-left.png",
            gifts:"限时好礼",
            pic2:"./static/img/f-c-right.png",
            money:"金币换好礼",
            more:"查看更多",
            pic3:"./static/img/f-content-more.png"
          }
        },
        components:{
          findBot
        }
    }
    import findBot from "./findBot"
</script>

<style scoped>

</style>
