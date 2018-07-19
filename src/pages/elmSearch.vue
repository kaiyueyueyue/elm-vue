<template>
<div class="search">
  <search-header  v-on:getShopList="showShop"></search-header>
  <search-bot-list></search-bot-list>
  <search-shop-list :shopList="shopList"></search-shop-list>
</div>
</template>

<script>
  import searchHeader from "../components/search/searchHeader"
  import searchBotList from "../components/search/searchBotList"
  import searchShopList from "../components/search/searchShopList"
    export default {
        name: "elmSearch",
        components:{
          searchHeader,
          searchBotList,
          searchShopList
        },
        data(){
          return{
            shopList:''
          }
        },
        methods:{
          showShop(data){
            this.shopList = data
            // console.log(data)
          }
        },
    }
</script>

<style scoped>

</style>
