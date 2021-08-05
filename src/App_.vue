<template>
  <div id="app" :class="[$style.wrapper]">
   <header>
     <h1>My personal costs</h1>
     <!-- <a href="dashboard">Dashboard</a>
     <a href="about"> About</a>
     <a href="unknown"> dev/null</a> -->
     <router-link to="/dashboard">Dashboard</router-link>
     <router-link to="/about"> About</router-link>
     <router-link class="addtemplate" to= "/add/payment/Food?value=200">Food 200</router-link>
     <router-link class="addtemplate" to="/add/payment/Transport?value=50">Transport 50</router-link>
     <router-link class="addtemplate" to="/add/payment/Entertaiment?value=2000">Entertaiment 2000</router-link>
   </header>
   <!-- <Dashboard v-if="page==='dashboard'"/>
   <About v-else-if="page==='about'"/>
   <Page404 v-else /> -->
   <router-view />
   <transition name="fade">
   <modal-window  :settings="modalSettings" v-if="modalSettings.name"/>
   </transition>
   <main>
     <div class="buttonAdd">
       <button v-on:click="showClick">Add new Coast +</button>
     </div>
     <AddPayment v-show='isShow' :lastId="getPaymentsList"/>
     <br>
     <PaymentsDisplay :list="currentElements" />
     <Pagination @paginationClick="changeList" :cur=curPage :n=n :listLength="getPaymentsList.length"/>
   </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPayment from "./components/AddPayment.vue"
import Pagination from "./components/Pagination.vue"
// import Dashboard from "./views/Dashboard.vue"
// import About from "./views/About.vue"
// import Page404 from "./views/Page404.vue"
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
// import ModalWindow from './components/ModalWindow.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPayment,
    Pagination,
    ModalWindow:()=>import(/*webpackChunkName:'ModalWindow'*/'./components/ModalWindow.vue'),
    // Dashboard,
    // About,
    // Page404,
  },
  data:()=>({
    isShow:false,
    paymentsList:[],
    pages:1,
    page:'',
    curPage:1,
    n:5,
    modalShown:false,
    elements:[],
    modalSettings:{
    },
  }),
  methods:{
    // setPage(){
    //   this.page=location.hash.slice(1)
    // },
    // setPage(){
    //   this.page=location.pathname.slice(1)
    // },
    onShown(settings){
      this.modalSettings=settings;
    },
    onHide(){
      this.modalSettings={};
    },
    ...mapMutations([
      'setPaymentsListData'
    ]),
    changeList(data){
        this.curPage=data;
      },
    showClick(){
      this.isShow=!this.isShow
    },
  },
  computed:{
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentElements(){
          const{n,curPage}=this
      // console.log('currentElements done')
      return this.getPaymentsList.slice(n*(curPage-1),n*(curPage-1)+n)
    }
  },
  mounted(){
    this.$modal.EventBus.$on('show',this.onShown);
    this.$modal.EventBus.$on('hide',this.onHide)
    const page=this.$route.params.page||1
    this.curPage=Number(page)
    //  this.setPage();
    // const links= document.querySelectorAll('a');
    // links.forEach(link=>{
    //   link.addEventListener('click',event=>{
    //     event.preventDefault()
    //     history.pushState({},"",link.href)
    //     this.setPage()
    //   })
    // })
   
    // window.addEventListener('hashchange',()=>{
    //   this.setPage()
    // })
    //  window.addEventListener('popstate',this.setPage)
  },
  beforedestroy(){
    this.$modal.EventBus.$off('shown',this.onShown);
    this.$modal.EventBus.$off('hide',this.onHide)
  },
  // created(){
    // this.$router.push({name:'dashboard'})
      // this.paymentsList= this.fetchData()
      // this.$store.commit('setPaymentsListData',this.fetchData())
      // this.setPaymentsListData(this.fetchData())
      // this.$store.dispatch('fetchData')
    // },
    created(){
      const{n,curPage}=this
      // console.log('currentElements done')
      this.elements= this.getPaymentsList.slice(n*(curPage-1),n*(curPage-1)+n)
      
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
.fade-enter-active,.fade-leave-active{
  transition:opacity 3s;
}
.fade-enter,.fade-leave-to{
  opacity:0;
}
.addtemplate{
  display:block;
}
.buttonAdd button{
  background-color: rgb(112, 202, 112);
  padding:1em;
  color: white;
}
</style>
