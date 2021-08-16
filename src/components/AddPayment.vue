<template>
<v-container>
<v-text-field v-model="date" label="Date"></v-text-field>
<v-select v-model="category" label="Category" :items="getCategoryList"></v-select>
<v-text-field v-model.number="value" type="number" label="Value"></v-text-field>
<v-btn @click="onClick">Save</v-btn>
</v-container>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    name:"AddPayment",
    props:{
    },
    data(){
        return{
            date:"",
            category:"",
            value:null,
            id:null,
        }
    },
    methods:{
        ...mapMutations([
            'setDataToPaymentsList',
            'removeDataPaymentsList'
        ]),
          ...mapActions([
            'loadCategories'
        ]),
        onClick(){
            const{category,value,id}= this
            const data= {
                date: this.date||this.getCurrentDate,
                category,
                value,
                id,
            }
            // this.$emit('addNewPayment',data)
            if(this.$attrs.item){
                
            this.setDataToPaymentsList({id:this.$attrs.item.item.id,data:data})
            }else{
                this.setDataToPaymentsList(data)
                this.$emit('updated')
            }
            
            
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
        this.category=this.$route.params.category;
        this.value= +this.$route.query.value;
        if(!this.getCategoryList.length){
            this.loadCategories()
        }
        if(this.$attrs.item){
            this.category=this.$attrs.item.item.category;
            this.value=this.$attrs.item.item.value;
            this.date=this.$attrs.item.item.date;
        }
    },
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