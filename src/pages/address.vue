<template>
  <div class="addressContainer">
      <address-head></address-head>
      <address-section></address-section>
  </div>
</template>

<script type="text/ecmascript-6">
// import ConfirmApis from "../apis/ConfirmApis"
import AddressHead from "../components/address/AddressHead";
import AddressSection from "../components/address/AddressSection";

export default {
  name: "confirm",
  data() {
    return {};
  },
  components: {
    AddressHead,
    AddressSection,
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

</style>
