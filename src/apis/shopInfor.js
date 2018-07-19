// 静态方法请求菜单信息
//在类中使用static修饰的静态方法会随着类的定义而被分配和装载入内存中；而非静态方法属于对象的具体实例，只有在类的对象创建时在对象的内存中才有这个方法的代码段。

//静态（static）方法 可以直接类名。方法名调用  
// 静态方法必须创建对象才能访问非静态成员。 静态方法可以不创建对象， 直接访问静态成员， 也可以通过创建对象来访问。
export default class getShopInfor {
    static getShopInfor(key, cb) {
        fetch(`http://localhost:8888/shopInfor?key=${key}`).then(response => {
            response.json().then(data => {
                cb(data)
                    // console.log(data)
            })
        })
    }
}