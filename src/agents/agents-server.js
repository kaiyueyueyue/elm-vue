const https = require("https")

const shopInfor = "https://h5.ele.me/restapi//shopping/restaurant/353223?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=34.259432&longitude=108.94702"

const CARTSLIKELISTURLAPI = "https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=34.343147&longitude=108.939621&params=%7B%22user_id%22%3A4375555%7D"
const restaurant = "https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=34.258475&longitude=108.945989&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5"

const indexMenu = "https://h5.ele.me/restapi/shopping/openapi/entries?latitude=34.343147&longitude=108.939621&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template"

const findList = "https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=34.343147&longitude=108.939621&params=%7B%22user_id%22%3A4375555%7D"

const express = require("express")
const app = express();

// 解决前台数据请求跨域问题
app.use('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next()
})



// 响应商家餐厅信息
app.use("/restaurant", (req, res, next) => {
        https.get(restaurant, (response) => {
                let datas = ""
                response.on("data", (chunk) => {
                    datas += chunk
                })
                response.on("end", () => {
                    // console.log(JSON.parse(restaurantDatas.toString()))
                    res.json(JSON.parse(datas.toString()))
                })
            })
            // next()
    })
    // 响应餐厅信息
app.use("/shopinfor", (req, res) => {
        https.get(`https://h5.ele.me/restapi//shopping/restaurant/${req.query.key}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=34.259432&longitude=108.94702`, (response) => {
            let datas = ""
            response.on("data", (chunk) => {
                datas += chunk
            })
            response.on("end", () => {
                // console.log(JSON.parse(shopMenuDatas.toString()))
                res.json(JSON.parse(datas.toString()))
            })
        })
    })
    // 首页nav
app.use("/indexMenu", (req, res, next) => {
        https.get(indexMenu, (response) => {
                let datas = ""
                response.on("data", (chunk) => {
                    datas += chunk
                })
                response.on("end", () => {
                    // console.log(JSON.parse(restaurantDatas.toString()))
                    res.json(JSON.parse(datas.toString()))
                })
            })
            // next()
    })
    // 发现页列表
app.use("/findList", (req, res, next) => {
        https.get(findList, (response) => {
                let datas = ""
                response.on("data", (chunk) => {
                    datas += chunk
                })
                response.on("end", () => {
                    // console.log(JSON.parse(restaurantDatas.toString()))
                    res.json(JSON.parse(datas.toString()))
                })
            })
            // next()
    })
    //cart数据
app.use("/CartsLikeList", (req, res) => {
        https.get(CARTSLIKELISTURLAPI, (response) => {
            let datas = ""
            response.on("data", (chunk) => {
                datas += chunk
            })
            response.on("end", () => {
                res.json(JSON.parse(datas.toString()))
            })
        })
    })
    // const SEARCHURLAPI = `https://h5.ele.me/restapi//shopping/v2/restaurants/search?offset=0&limit=15&keyword=${req.key}&latitude=34.262449&longitude=108.926844&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5`
    //search页数据
app.use("/search", (req, res) => {
    // console.log(encodeURI(req.query.key))
    // https://h5.ele.me/restapi//shopping/v2/restaurants/search?offset=0&limit=15&keyword=%E6%B3%A1%E9%A6%8D&latitude=35.89638&longitude=120.01518&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5
    https.get(`https://h5.ele.me/restapi//shopping/v2/restaurants/search?offset=0&limit=15&keyword=${encodeURI(req.query.key)}&latitude=34.262449&longitude=108.926844&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5`, (response) => {
        let datas = ""
        response.on("data", (chunk) => {
            datas += chunk

        })
        response.on("end", () => {
            res.json(JSON.parse(datas.toString()))
        })
    })
})


// 获取菜单信息
app.use("/shopmenu", (req, res) => {
    // console.log(req.query.key)
    https.get(`https://h5.ele.me/restapi//shopping/v2/menu?restaurant_id=${req.query.key}&terminal=h5`, (response) => {
        let datas = ""
        response.on("data", (chunk) => {
            datas += chunk

        })
        response.on("end", () => {
            res.json(JSON.parse(datas.toString()))
        })
    })
})
app.listen(8888, () => {
    console.log("api server is ready on port 8888")
})