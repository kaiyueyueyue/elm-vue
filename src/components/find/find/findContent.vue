<template>
  <ul class="findContent">
    <li :key="index" v-for="(c,index) in findList">
      <a href="javascript:;">
        <img class="findContent-img" :src="c.foods[0].image_path
 |filterShopPic">
        <h4>{{(c.foods)[0].name}}</h4>
        <p>月售{{(c.foods)[0].month_sales
}}&nbsp;&nbsp;&nbsp;好评率{{(c.foods)[0].satisfy_rate
}}</p>
        <div class="findContentBox">
          <span>￥{{(c.foods)[0].price}}</span>
          <!-- <i>{{((c.foods)[0].activities)[0].tips}}</i> -->
        </div>
        <div class="findContentBot">
          <img src="../../../../static/img/f-content-tag.png"/>
          <b>{{c.restaurant.name}}</b>
        </div>
      </a>
    </li>
  </ul>

</template>

<script>
import findListApi from "../../../apis/findList";

export default {
  name: "findContent",
  data() {
    return {
      findList: ""
    };
  },
  components: {},
  methods: {
    initPage() {
      findListApi.getFindList(data => {
        this.findList = data.query_list;
        // console.log(this.findList);
      });
    }
  },
  created() {
    this.initPage();
  },
};
</script>

<style scoped>
</style>
