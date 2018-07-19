<template>
  <div class="confirmContainer">
    <confirm-head></confirm-head>
    <confirm-page-box></confirm-page-box>
    <confirm-foot></confirm-foot>
  </div>
</template>

<script type="text/ecmascript-6">
// import ConfirmApis from "../apis/ConfirmApis"
import ConfirmHead from "../components/confirm/confirm-common/ConfirmHead";
import ConfirmFoot from "../components/confirm/confirm-common/ConfirmFoot";
import ConfirmPageBox from "../components/confirm/confirm-lists/ConfirmPageBox";

export default {
  name: "confirm",
  data() {
    return {};
  },
  components: {
    ConfirmHead,
    ConfirmFoot,
    ConfirmPageBox
  },
  methods: {
    //初始化页面数据
    /*__initConfirmPage() {
      ConfirmApis.getConfirmList( (data)=>{
        console.log(data);
      })
    }*/
  },
  created() {
    // this.__initConfirmPage();
  }
};
</script>

<style lang="scss" scoped>
.confirmContainer {
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
}
.shop_add_tag{
  width:100%;
}
</style>
