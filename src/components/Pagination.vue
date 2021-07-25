<template>
    <div>
        <span @click="clicked(cur-1)">&#60;</span>
        <span @click='clicked(n)' v-for="n in amount" :key="n">
        {{n}}
        </span>
        <span @click="clicked(cur+1)">&#62;</span>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
    name:"Pagination",
    props:{
        listLength:{
        type:Number,
        },
        cur:{
            type:Number
        },
        n:{
            type:Number
        }
    },
    methods:{
        clicked(cur){
            if(cur<1||cur>this.amount){
                return
            }
            this.$emit("paginationClick", cur)
        }
    },
    computed:{
        amount(){
            return Math.ceil(this.listLength/this.n)
        }
    //     ...mapGetters([
    //         'getPaymentsList'
    //     ])
    }
}
</script>

<style>

</style>