<template>
    <div class="find">
      <find-header></find-header>
      <find-main></find-main>
      <elm-foot-list></elm-foot-list>
    </div>
</template>
<script>
import findHeader from "../components/find/commons/findHeader";
import findMain from "../components/find/find/findMain";
import ElmFootList from "../components/common/ElmFootList";
export default {
  name: "elmFind",
  components: {
    findHeader,
    findMain,
    ElmFootList
  }
};
</script>


<style scoped>
</style>
