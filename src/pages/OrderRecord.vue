<template>
    <div class="orderContainer">
      <order-header></order-header>
      <order-section></order-section>
      <elm-foot-list></elm-foot-list>
    </div>
</template>

<script>
import OrderHeader from "../components/OrderRecord/orderHeader";
import OrderSection from "../components/OrderRecord/orderSection";
import ElmFootList from "../components/common/ElmFootList";

export default {
  name: "OrderRecord",
  components: {
    OrderHeader,
    OrderSection,
    ElmFootList
  }
};
</script>

<style lang="scss" scoped>
.orderContainer {
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
}
</style>
