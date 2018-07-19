let CartsLikeListUrlApi = 'http://localhost:8888/CartsLikeList'

// 静态方法请求商家信息
export default class CartsLikeListApi {
    static getLikeList(cb) {
        fetch(CartsLikeListUrlApi).then(response => {
            response.json().then(data => {
                cb(data)
            })
        })
    }
}