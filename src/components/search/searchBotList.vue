<template>
  <div class="searchBot">
    <h3>热门搜索</h3>
    <search-bot></search-bot>
  </div>
</template>

<script>
  import searchBot from "./searchBot"
    export default {
        name: "searchBotList",
        components:{
          searchBot
        }
    }
</script>

<style scoped>

</style>
