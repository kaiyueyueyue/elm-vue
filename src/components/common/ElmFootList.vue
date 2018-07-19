<template>
    <!-- elm-foot -->
	<div class="elm-foot">
		<router-link :to="{path :'/index'}">
			<elm-foot-index></elm-foot-index>
		</router-link>
		<router-link :to="{path:'/find'}">
			<elm-foot-find></elm-foot-find>
		</router-link>
		<router-link :to="{path:'/order'}">
			<elm-foot-order></elm-foot-order>
		</router-link>
		<router-link :to="{path:'/mine'}">
			<elm-foot-mine></elm-foot-mine>
		</router-link>
	</div>
</template>

<script>
import ElmFootIndex from "./ElmFootIndex";
import ElmFootFind from "./ElmFootFind";
import ElmFootOrder from "./ElmFootOrder";
import ElmFootMine from "./ElmFootMine";
export default {
  components: {
    ElmFootIndex,
    ElmFootMine,
    ElmFootOrder,
    ElmFootFind
  }
};
</script>
<style lang="scss" scoped>
.elm-foot {
  width: 100%;
  height: 0.49rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  background: #fafafa;
}
.router-link-active a i {
  color: #12b8f6;
}
</style>

