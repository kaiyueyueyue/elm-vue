let findListUrlApi = 'http://localhost:8888/findList'

// 静态方法请求商家信息
export default class findListApi {
    static getFindList(cb) {
        fetch(findListUrlApi).then(response => {
            response.json().then(data => {
                cb(data)
            })
        })
    }
}