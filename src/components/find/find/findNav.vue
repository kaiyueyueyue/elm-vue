<template>
<!-- 
  <ul class="findNav">
	  <li :key="index" v-for="(todo,index) in todos">
		  <a href="javascript:;">
			  <div class="findNavRight">
				  <span>{{todo[0]}}</span>
				  <b>{{todo[1]}}</b>
			  </div>
			  <img :src="todo[2]"/>
		  </a>
	  </li>
  </ul> -->
  
  <ul class="findNav">
    <li>
      <a href="javascript:;">
        <div class="findNavRight">
          <span>百元红包</span>
          <b>兴业银行联名卡</b>
        </div>
        <img src="../../../assets/images/find/f-elm1.png"/>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <div class="findNavRight">
          <span>超级会员</span>
          <b>每月领大额红包</b>
        </div>
        <img src="../../../assets/images/find/f-elm2.png"/>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <div class="findNavRight">
          <span>金币商城</span>
          <b>0元好物在这里</b>
        </div>
        <img src="../../../assets/images/find/f-elm3.png"/>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <div class="findNavRight">
          <span>推荐有奖</span>
          <b>5元现金拿不停</b>
        </div>
        <img src="../../../assets/images/find/f-elm4.png"/>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <div class="findNavRight">
          <span>周边优惠</span>
          <b>领取口碑好券</b>
        </div>
        <img src="../../../assets/images/find/f-elm5.png"/>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <div class="findNavRight">
          <span>免费流量</span>
          <b>每月最高500M</b>
        </div>
        <img src="../../../assets/images/find/f-elm6.png"/>
      </a>
    </li>
  </ul>

</template>

<script>
export default {
  name: "findNav",
  data() {
    return {
      // todos: [
      //   ["百元红包", "兴业银行联名卡", "./static/img/f-elm1.png"],
      //   ["超级会员", "每月领大额红包", "./static/img/f-elm2.png"],
      //   ["金币商城", "0元好物在这里", "./static/img/f-elm3.png"],
      //   ["推荐有奖", "5元现金拿不停", "./static/img/f-elm4.png"],
      //   ["周边优惠", "领取口碑好券", "./static/img/f-elm5.png"],
      //   ["免费流量", "每月最高500M", "./static/img/f-elm6.png"]
      // ]
    };
  },
  components: {}
};
</script>

<style scoped>
</style>
