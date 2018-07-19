<template>
  <div class="searchBotA">
    <a :key="index" href="javascript:;" v-for="(todo,index) in todos">{{todo}}</a>
  </div>
</template>

<script>
export default {
  name: "searchBot",
  data() {
    return {
      todos: [
        "蛋糕",
        "面",
        "必胜客",
        "叉烧包",
        "苏福记",
        "冒菜",
        "锅巴饭",
        "海底捞",
        "泡馍"
      ]
    };
  }
};
</script>

<style scoped>
</style>
