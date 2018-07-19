<!-- carts的清空组件 -->
<template>
	<div class="empty_bg">
		<div  class="carts-empty">
			<p class="empty-word">确定清空购物车所有商品</p>
			<p class="empty-btn">
				<a class="empty-btn1" @click="hideEmp">取消</a>
				<a class="empty-btn2" @click="hideEmp">确定</a>
			</p>
	    </div>
	</div>

</template>


<script type="text/ecmascript-6">
export default {

	methods:{
		hideEmp(){
			this.$emit('empHide',false)
		}

	},
}
	
</script>

<style lang="scss" scoped>
.empty_bg{
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background: rgba(0,0,0,.4);
	z-index: 100;
	.carts-empty{
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		font-size: 0.16rem;
		font-weight: 600;
		width:3rem;
		background: #fff;
		.empty-word{
			line-height: 0.73rem;
			text-align: center;
		}
		.empty-btn{
			display:-webkit-flex;
			-webkit-justify-content:space-around;
			margin-bottom: 0.16rem;
			.empty-btn1{
				width:0.8rem;
				line-height:0.4rem;
				border:1px solid #d0d0d0;
				text-align: center;
			}
			.empty-btn2{
				width:0.8rem;
				line-height:0.4rem;
				border:1px solid #d0d0d0;
				text-align: center;
				color:#fff;
				background: #2395ff;
			}

	    }
	
    }   
}
</style>