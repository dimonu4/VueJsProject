<template>
    <div>
        <span>&#60;</span>
        <span @click='clicked' v-for="n in Math.ceil(this.getPaymentsList.length/5)" :key="n">
        {{n}}
        </span>
        <span>&#62;</span>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:"Pagination",
    // props:{
    //     listLength:{
    //     type:Number,
    //     }
    // },
    methods:{
        clicked(event){
            this.$emit("paginationClick", +event.target.outerText)
        }
    },
    computed:{
        ...mapGetters([
            'getPaymentsList'
        ])
    }
}
</script>

<style>

</style>