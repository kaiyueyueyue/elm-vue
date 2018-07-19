// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/fonts/iconfont.css'
import "./assets/css/search.css"
import "./assets/css/find.css"
import "./assets/css/index.css"
import "./assets/css/common.css"
// import "./assets/css/detail.css"


//地图
import AMap from "vue-amap"
Vue.use(AMap)
// 初始化vue-amap  
AMap.initAMapApiLoader({  
  // 申请的高德key  
  key: 'd2e697b09246c4e121cc55fe02dc9311',  
  // 插件集合  
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']  
});

Vue.config.productionTip = false

// import Amap from 'vue-amap'
// // 初始化vue-amap
// Vue.use(Amap)
// Amap.initAMapApiLoader({
//     // 高德的key
//     key: '257dc1b3855a027119f7ac6c1d46d308',
//     // 插件集合
//     plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//     // 高德 sdk 版本，默认为 1.4.4
//     v: '1.4.4'
// });

// 图片路径过滤
Vue.filter('filterShopPic', pic => {
    // console.log(pic);
    let type = "";
    if (pic.indexOf("jpeg") > 0) {
        type = "jpeg";
    } else {
        type = "png";
    }
    return `//fuss10.elemecdn.com/${pic.substring(0, 1)}/${pic.substring(
      1,
      3
    )}/${pic.slice(
      3
    )}.${type}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`;
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})