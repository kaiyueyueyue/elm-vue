<template>
    <!-- m-wallet -->
		<div class="m-wallet">
			<a href="javascript:;" class="m-wallet-bag">
				<p class="price"><span>0.00</span>元</p>
				<p>钱包</p>
			</a>
			<a href="javascript:;" class="m-wallet-discount">
				<p class="price"><span>0</span>个</p>
				<p>优惠</p>
			</a>
			<a href="javascript:;" class="m-wallet-coin">
				<p class="price"><span>0.00</span>个</p>
				<p>金币</p>
			</a>
		</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*m-wallet*/

.m-wallet {
  width: 100%;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
}

.m-wallet a {
  display: block;
  flex: 1;
  text-align: center;
  border-right: 1px solid #eeeeee;
  padding: 0.22rem 0;
}

.m-wallet .m-wallet-coin {
  border: 0;
}

.m-wallet .price {
  font-size: 0.11rem;
}

.m-wallet .price span {
  font-size: 0.2rem;
  font-weight: 700;
}

.m-wallet .m-wallet-bag .price {
  color: #2490ff;
}

.m-wallet .m-wallet-discount .price {
  color: #ff5e30;
}

.m-wallet .m-wallet-coin .price {
  color: #ff9b00;
}

.m-wallet p {
  font-size: 0.13rem;
  color: #606060;
}
</style>
