import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Dashboard from '../views/Dashboard'
import About from '../views/About'
import Page404 from '../views/Page404'
import AddPayment from '../components/AddPayment.vue'

export default new Router({
    mode:'history',
routes:[
    {
        path:'/dashboard',
        component: Dashboard,
        name:'dashboard'
    },
    {
        path:'/dashboard/:page',
        component:Dashboard,
        name:'dashboard'    
    },
    {
        path:'/add/payment/:category',
        component:AddPayment,
        name:'food200'
    },
    {
        path:'/about*',
        component:About,
        name:'about'
    },
    {
        path:'/404',
        component:Page404,
        name:'NotFound'
    },
    {
        path:'/*',
        redirect:'/404',
    }
]
})