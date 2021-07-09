<template>
  <div class="payments-list" >
    <div class="payments payments_header">
      <span class="order_number">#</span>
      <span class="date">Date</span>
      <span class="category">Category</span>
      <span class="value">Value</span> 
      </div>
       <div class="payments" v-for="(item,idx) in filterList" :key="idx">
              <span class="order_number">{{idx+1}}</span>
              <span class="date">{{item.date}}</span>
              <span class="category">{{item.category}}</span>
              <span class="value">{{item.value}}</span> 
             {{pages}}
       </div>
  </div>
</template>

<script>
export default {
    name:"PaymentsDisplay",
    props:{
      list:{
        type:Array,
        default:()=>[]
      },
      pages:{
        type:Number
      }
    },
    data(){
      return{
        filterList:[],
      }
    },
    methods:{
  
    },
    created(){
      this.filterList=this.list.slice(0,5);
    },
    beforeUpdate(){
        this.filterList=this.list.slice((this.pages-1)*5,this.pages*5);
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