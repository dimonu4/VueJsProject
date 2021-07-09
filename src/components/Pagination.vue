<template>
    <div>
        <span>&#60;</span>
        <span @click='clicked' v-for="n in Math.ceil(this.listLength/5)" :key="n">
            {{n}}
        </span>
        <span>&#62;</span>
    </div>
</template>

<script>
export default {
    name:"Pagination",
    props:{
        listLength:{
        type:Number,
        }
    },
    methods:{
        clicked(event){
            this.$emit("paginationClick", +event.target.outerText)
        }
    }
}
</script>

<style>

</style>