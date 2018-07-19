let indexMenuUrlApi = 'http://localhost:8888/indexMenu'

// 静态方法请求商家信息
export default class indexMenuApi {
    static getIndexMenu(cb) {
        fetch(indexMenuUrlApi).then(response => {
            response.json().then(data => {
                cb(data)
            })
        })
    }
}