<template>
  <div class="buttonAdd input">
      <input v-model="date" placeholder="date"/>
      <!-- <input v-model.trim="category" placeholder="category"/> -->
      <select class="category" v-model="category">
          <option v-for="(option,idx) in getCategoryList" :key='idx' :value="option">
              {{option}}
          </option>
      </select>
      <input v-model.number="value" type="number" placeholder="value"/>
      <button @click="onClick" v-bind:disabled="value===''">Add Data</button>
      lastId:{{lastId}}
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    name:"AddPayment",
    props:{
        lastId:{
            type:Array
        }
    },
    data(){
        return{
            date:"",
            category:"",
            value:null,
        }
    },
    methods:{
        ...mapMutations([
            'setDataToPaymentsList'
        ]),
          ...mapActions([
            'loadCategories'
        ]),
        onClick(){
            const{category,value}= this
            
            const data= {
                date: this.date||this.getCurrentDate,
                category,
                value,
            }
            // this.$emit('addNewPayment',data)
            this.setDataToPaymentsList(data)
        }
    },
    computed:{
        
        ...mapGetters([
            'getCategoryList'
        ]),
        getCurrentDate(){
            const today= new Date()
            const d = today.getDate()
            const m = today.getMonth()+1;
            const y= today.getFullYear();
            return `${d}.${m}.${y}`
        }
    },
    watch:{
        $route(to){
            this.category=to.params.category;
            this.value=+to.query.value;
        }
    },
    mounted(){
        // console.log(this.lastId[this.lastId.length-1].id)
        this.category=this.$route.params.category;
        this.value= +this.$route.query.value;
        if(!this.getCategoryList.length){
            this.loadCategories()
        }
    }
}
</script>

<style scoped>
.category{
    width:200px;
}
.input input{
    display:block;
    padding:0.5em;
    margin:1em;
}
</style>