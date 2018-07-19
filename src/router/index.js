import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/pages/Mine'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import ElmFind from '@/pages/elmFind'
import Order from '@/pages/OrderRecord'
import Search from '@/pages/elmSearch'
import Detail from '@/pages/Detail'
import Confirm from '@/pages/confirm'
import Carts from '@/pages/carts'
import Address from '@/pages/address'

Vue.use(Router)

export default new Router({
    routes: [{
            
            path: '/',
            redirect: '/index'
        }, {
            path: '/mine',
            component: Mine
        },
        {
            path: '/login',
            component: Login
        }, {
            name:'index',
            path: '/index',
            component: Index
        }, {
            path: '/find',
            component: ElmFind
        }, {
            path: '/order',
            component: Order
        }, {
            path: '/search',
            component: Search
        },
        {
            name: 'detail',
            path: '/detail/:shopID',
            component: Detail
        },
        {
            path: '/confirm',
            component: Confirm
        },
        {
            path: '/cart',
            component: Carts
        },
        {//收货地址
            path: '/address',
            component: Address
        }
    ]
})