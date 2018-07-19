<template>
  <ul class="findBot">
    <!-- <li :key="index" v-for="(todo,index) in todos">
      <a href="javascript:;"><img :src="todo[0]"/></a>
      <img :src="todo[1]" class="f-bot1">
      <p>{{todo[2]}}</p>
      <div class="findBotBox">
        <span>{{todo[3]}}</span>
        <b>{{todo[4]}}</b>
      </div>
    </li> -->

    <li>
      <a href="javascript:;"><img src="../../../assets/images/find/f-time1.png"/></a>
      <img src="../../../assets/images/find/f-bot1.png" class="f-bot1">
      <p>3元饿了么红包</p>
      <div class="findBotBox">
        <span>90金币</span>
        <b>￥3</b>
      </div>
    </li>
    <li>
      <a href="javascript:;"><img src="../../../assets/images/find/f-time2.png"/></a>
      <img src="../../../assets/images/find/f-bot2.png" class="f-bot1">
      <p>无线蓝牙耳机</p>
      <div class="findBotBox">
        <span>9金币</span>
        <b>￥249</b>
      </div>
    </li>
    <li>
      <a href="javascript:;"><img src="../../../assets/images/find/f-time2.png"/></a>
      <img src="../../../assets/images/find/f-bot3.png" class="f-bot1">
      <p>机械手感键盘套装</p>
      <div class="findBotBox">
        <span>9金币</span>
        <b>￥129</b>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "findBot",
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
</style>
