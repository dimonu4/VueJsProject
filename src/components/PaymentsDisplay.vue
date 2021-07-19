<template>
  <div class="payments-list" >
    <div class="payments payments_header">
      <span class="order_number">#</span>
      <span class="date">Date</span>
      <span class="category">Category</span>
      <span class="value">Value</span> 
      </div>
       <div class="payments" v-for="(item,idx) in list" :key="idx">
              <span class="order_number">{{item.id}}</span>
              <span class="date">{{item.date}}</span>
              <span class="category">{{item.category}}</span>
              <span class="value">{{item.value}}</span> 
       </div>
       Total: {{getFPV}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"PaymentsDisplay",
    props:{
      list:{
        type:Array,
        default:()=>[]
      },
    },
    data(){
      return{
        storeList:[],
        filterList:[],
      }
    },
    methods:{      
    },
    computed:{
      
      ...mapGetters([
        'getPaymentsList',
        'getFullPaymentValue'
      ]),
      
      getFPV(){
        return this.getFullPaymentValue
      },
      getList(){
        return this.getPaymentsList
      }
    },
    created(){
     this.$store.dispatch('fetchData')
    },
    updated(){
 
    },
    beforeUpdate(){
      // this.storeList= this.getList
      //   // this.filterList= this.storeList.slice(0,5)
      //   this.filterList=this.storeList.slice((this.pages-1)*5,this.pages*5);
    }
    
}
</script>

<style scoped>
.payments span{
  display:inline-block;
  margin: 0.5em;
}
.order_number{
  width: 20px;
}
.date{
  width: 100px;
}
.category{
  width:150px;
}
.value{
width:50px;
}
</style>