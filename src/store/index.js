import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        paymentsList:[],
        categoryList:[]
    },
    mutations:{
        setPaymentsListData(state,payload){
            state.paymentsList= payload;
        },
        setDataToPaymentsList(state,payload){
            state.paymentsList.push(payload)
        },
        SetCategories(state,payload){
            if(!Array.isArray(payload)){
                payload=[payload]
            }
            state.categoryList.push(...payload)
        }
    },
    getters:{
        getPaymentsList:state=>state.paymentsList,
        getFullPaymentValue:state=>{
            return state.paymentsList
            .reduce((res,cur)=>res+cur.value,0)
        },
        getCategoryList:state=>state.categoryList,
    },
    actions:{
        fetchData({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items=[]
                    for(let i=1;i<50;i++){
                        items.push({
                            date:"29.02.2020",
                            category:"Sport",
                            value: i,
                            id:i
                        })
                    }
                    resolve(items)
                },2000)
            }).then(res=>{
                commit('setPaymentsListData',res)
            })
        },
        loadCategories({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(['Food','Transport','Education','Sport','Entertaiment'])
                },1000)
            })
            .then(res=>{
                commit('SetCategories',res)
            })
        }
    }
})