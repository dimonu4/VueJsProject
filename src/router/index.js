import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import Dashboard from '../views/Dashboard'
// import About from '../views/About'
// import Page404 from '../views/Page404'
// import AddPayment from '../components/AddPayment.vue'

export default new Router({
    mode:'history',
routes:[
    {
        path:'/dashboard',
        component: ()=>import(/*webpackChunkName:"PageDashboard"*/'../views/Dashboard.vue'),
        name:'dashboard'
    },
    {
        path:'/dashboard/:page',
        component:()=>import(/*webpackChunkName:"PageDashboard"*/'../views/Dashboard.vue'),
        name:'dashboard'    
    },
    {
        path:'/add/payment/:category',
        component:()=>import(/*webpackChunkName:"PageAddPayment"*/'../components/AddPayment.vue'),
        name:'food200'
    },
    {
        path:'/about*',
        component:()=>import(/*webpackChunkName:"PageAbout"*/'../views/About.vue'),
        name:'about'
    },
    {
        path:'/404',
        component:()=>import(/*webpackChunkName:"NotFound"*/'../views/Page404.vue'),
        name:'NotFound'
    },
    {
        path:'/*',
        redirect:'/404',
    }
]
})