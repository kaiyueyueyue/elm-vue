// let searchUrlApi = 'http://localhost:8888/search'

// 静态方法请求商家信息
export default class searchApi {
    static getSearchList(key, cb) {
        fetch(`http://localhost:8888/search?key=${key}`).then(response => {
            response.json().then(data => {
                cb(data)
                    // console.log(key)
            })
        })
    }
}