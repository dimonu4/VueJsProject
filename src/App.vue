<template>
  <div id="app" :class="[$style.wrapper]">
   <header>
     <h1>My personal costs</h1>
   </header>
   <main>
     <div class="buttonAdd">
       <button v-on:click="showClick">Add new Coast +</button>
     </div>
     <AddPayment v-show='isShow'/>
     <br>
     <PaymentsDisplay :list="paymentsList" :pages="pages"/>
     <Pagination @paginationClick="changeList" :listLength="paymentsList.length"/>
   </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPayment from "./components/AddPayment.vue"
import Pagination from "./components/Pagination.vue"
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPayment,
    Pagination,

  },
  data:()=>({
    isShow:false,
    paymentsList:[],
    pages:1,
  }),
  methods:{
    ...mapMutations([
      'setPaymentsListData'
    ]),
    changeList(data){
        this.pages=data;
      },
    showClick(){
      this.isShow=!this.isShow
    },
    // addData(data){
    //   this.paymentsList.push(data)
    // },
    // fetchData(){
    //   return[
    //     {
    //       date:'28.03.2020',
    //       category:'Food',
    //       value:169
    //     },
    //     {
    //       date:'28.03.2021',
    //       category:'Sport',
    //       value:400
    //     },
    //     {
    //       date:'28.05.2020',
    //       category:'Internet',
    //       value:200
    //   ]
    // },
  },
      created(){
      // this.paymentsList= this.fetchData()
      // this.$store.commit('setPaymentsListData',this.fetchData())
      // this.setPaymentsListData(this.fetchData())
      // this.$store.dispatch('fetchData')
    }
}
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  width:800px;
  margin:0 auto;
}
</style>
<style>
.buttonAdd button{
  background-color: rgb(112, 202, 112);
  padding:1em;
  color: white;
}
</style>
