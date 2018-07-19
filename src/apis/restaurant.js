let restaurantUrlApi = 'http://localhost:8888/restaurant'

// 静态方法请求商家信息
export default class restaurantsApi {
    static getRestaurants(cb) {
        fetch(restaurantUrlApi).then(response => {
            response.json().then(data => {
                cb(data)

            })
        })
    }
}