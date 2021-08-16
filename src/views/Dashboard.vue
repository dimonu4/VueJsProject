<template>
<v-container>
  <v-row>
    <v-col>
      <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
      <v-dialog v-model="dialog" width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="teal" dark v-on="on" @click="dialog=!dialog">
            ADD NEW COST <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
         <AddPayment/> 
        </v-card>
        <v-btn @click="dialog=false">Close</v-btn>
      </v-dialog>
       <PaymentsDisplay :list="currentElements"/>
        <div class="text-center">
        <v-pagination
           v-model="curPage"
          :length="amount"
          :total-visible="7"
    ></v-pagination>
  </div>
       <!-- <Pagination @paginationClick="changeList" :cur=curPage :n=n :listLength="getPaymentsList.length"/> -->
    </v-col>
    <v-col>
      <line-chart v-if="loaded" :sport="sportSum()" :food="foodSum()" :education="educationSum()" 
      :transport="transportSum()" :entertaiment="entertaimentSum()"
      ></line-chart>
      </v-col>
  </v-row>
</v-container>
</template>

<script>
import AddPayment from "../components/AddPayment.vue"
// import Pagination from "../components/Pagination.vue"
import {mapActions, mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import LineChart from '../components/Diagram.vue'
export default {
  components:{
    PaymentsDisplay,
    AddPayment,
    // Pagination,
    LineChart
  },
name:'Dashboard',
  data:()=>({
    loaded:false,
    categories:[],
    dialog:false,
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
    ...mapActions([
      'loadCategories'
    ]),
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
    
     sportSum(){
      let filtered= this.allElements.filter(el=>el.category==='Sport')
      
      return filtered.reduce((res,cur)=>
         res+ +cur.value,0
      )
      
    },
    foodSum(){
      let filtered= this.allElements.filter(el=>el.category==='Food')
      return filtered.reduce((res,cur)=>
         res+ +cur.value,0
      )
    },
    transportSum(){
      let filtered= this.allElements.filter(el=>el.category==='Transport')
      return filtered.reduce((res,cur)=>
         res+ +cur.value,0
      )
    },
    educationSum(){
      let filtered= this.allElements.filter(el=>el.category==='Education')
      return filtered.reduce((res,cur)=>
         res+ +cur.value,0
      )
    },
    entertaimentSum(){
      let filtered= this.allElements.filter(el=>el.category==='Entertaiment')
      return filtered.reduce((res,cur)=>
         res+ +cur.value,0
      )
    },
  },
  computed:{
    ...mapGetters([
      'getPaymentsList',
    ]),
    
    currentElements(){
          const{n,curPage}=this
      return this.getPaymentsList.slice(n*(curPage-1),n*(curPage-1)+n)
    },
    amount(){
            return Math.ceil(this.getPaymentsList.length/this.n)
        },
    allElements(){
      return this.getPaymentsList
    },
  },
   mounted(){
    this.$modal.EventBus.$on('show',this.onShown);
    this.$modal.EventBus.$on('hide',this.onHide)
    const page=this.$route.params.page||1
    this.curPage=Number(page)

  },
  beforeUpdate(){
    
    this.foodSum(),
    this.sportSum()
    
  },
  beforedestroy(){
    this.$modal.EventBus.$off('shown',this.onShown);
    this.$modal.EventBus.$off('hide',this.onHide)
  },
    async created(){
      await this.$store.dispatch('fetchData')
      const{n,curPage}=this
       this.elements=  this.getPaymentsList.slice(n*(curPage-1),n*(curPage-1)+n) 
      this.loaded=true
    }
}
</script>

<style>

</style>