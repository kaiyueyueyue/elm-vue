<template>
  <div class="addr_container">
        <input type="text" ref="searchText" id="searchText" @keyup="keyUpSearch" placeholder="请输入地址"/>    
  
        <div class="address_items" id="address_result" v-if="searchData.length > 0">  
		    <div class="address_item" :key="index" v-for="(item,index) in searchData">  
                <router-link :to="{name:'index',query:{name:item.name,address:item.address}}">
                    <div class="title">{{ item.name }}</div> 
		            <div class="description">{{ item.cityname }}{{ item.address }}</div>  
                </router-link>
		    </div>  
        </div>
  </div>
</template>

<script>
    export default {
        name: "AddressSection",
        data() {
            return {
                searchData:""
            }
        },
        methods:{
             // methods里面添加对应的keyUpSearch方法
            keyUpSearch () {
                var _this = this; 
                var txt = this.$refs.searchText.value; 
                AMap.service(["AMap.PlaceSearch"], 
                function() { 
                    var placeSearch = new AMap.PlaceSearch({ //构造地点查询类 pageSize: 12, pageIndex: 1, city: "成都", //城市 cityLimit: 'true', panel: 'temp'//搜索结果的展示面板对元素id，不知道为什么一定要有该参数，最终获取的结果才更完整，参数更多跟完整，
            //所以我在页面随便写了一个<div id="temp" style="display:none"></div>
                    });
                    //关键字查询
                    placeSearch.search(txt, function(status, result) {
                        if (status == 'complete' && result.info == 'OK') {
                        //这里可以console.log(result)，查看所有返回的参数，遍历展示这些基本的，我就不赘述
                            // console.log(result.poiList.pois, this)
                            _this.searchData = result.poiList.pois
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  .addr_container{
    width:100%;
    height:100%;
    font-size:0;
    padding:.1rem;
    box-sizing: border-box;
    text-align: center;
    #searchText{
        margin:0 auto;
        width:3.4rem;
        height:.24rem;
        padding:.06rem;
        margin-bottom:.2rem;
        outline: none;
        background-color: #eee;
        border-radius: .08rem;
        border:0;
        @include sc(.07rem,$fc02);
    }
    .address_items{
        padding:0 .08rem;
        .address_item{
            padding:.08rem 0;
            border-bottom:1px solid $fc02;
            .title{
                text-align: left;
                @include sc(.06rem,$fc03);
            }
            .description{
                text-align: left;
                @include sc(.05rem,$fc02);
            }
        }
    }
  }
</style>
