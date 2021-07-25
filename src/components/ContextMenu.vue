<template>
  <div class="wrapper  ">
      <div class="edit" @click="editClick">edit</div>
      <div class="remove" @click="removeClick">remove</div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
name:'ContextMenu',
  
methods:{
    ...mapMutations([
     'removeDataPaymentsList'
    ]),       
    removeClick(){
        this.removeDataPaymentsList(this.$attrs.item.item)
    },
    editClick(){
        this.$menu.show('AddPayment',{item:this.$attrs.item.item});
    }
},
mounted(){
         
}
}
</script>

<style lang='scss' scoped>
    
</style>