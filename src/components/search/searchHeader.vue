<template>
  <div class="searchHeader">
    <router-link :to="{path:'/'}">
      <a class="s-back" href="javascript:;"><img :src="pic1"/></a>
    </router-link>
    <input type="search" placeholder="领最高20元红包" v-model="searchMsg" @keyup="keyUpSearch($event,searchMsg)"/>
    <router-link :to="{path:'/'}">
    <a class="s-back" href="javascript:;" >{{cancle}}</a></router-link>
  </div>
</template>

<script>
import searchApi from "../../apis/search";
export default {
  name: "searchHeader",
  data() {
    return {
      searchMsg: "",
      pic1: "./static/img/s-right.png",
      cancle: "取消",
      basUrl: "",
      shopList:''
    };
  },
  methods: {
    keyUpSearch(e,key) {
      if(e.keyCode == '13'){
        searchApi.getSearchList(key, data => {
          // console.log(data)
          if(data.inside[0] != undefined){
            this.shopList = data.inside[0].restaurant_with_foods;
          }else if(data.inside[1] != undefined){
            this.shopList = data.inside[1].restaurant_with_foods;
          }else{
            this.shopList = data.inside[3].restaurant_with_foods;
          }
        
        // console.log(this.shopList,data);
        this.$emit("getShopList",this.shopList)
      });
      }
      
    }
  }
};
</script>

<style scoped>
</style>
