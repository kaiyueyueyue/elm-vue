<template>
<div>
    <i class="iconfont icon-add" @click="cartAdd"></i>
    <input class="d-sell-num" v-model="goodsNum">
	<i class="iconfont icon-53" @click="cartMin"></i>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            goodsNum:0
        }
    },
    methods:{
        cartAdd(){
            this.goodsNum++;
            this.$emit("getNum",this.goodsNum)
        },
        cartMin(){
            this.goodsNum--;
            if(this.goodsNum <= 0){
                this.goodsNum = 0
            }
        }
    }

    
}
</script>
<style lang="scss" scoped>
    .d-sell-num {
  border:0;
  width:0.15rem;
  float: right;
  padding: 0 0.1rem;
  color: black;
  font-weight: normal;
  text-align: center;
  padding-top: 0.04rem;
  vertical-align: middle;
}
i {
  font-weight: normal;
  color: #2497fc;
  font-size: 0.22rem;
  float: right;
  vertical-align: middle;
}
</style>
