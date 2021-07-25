<template>
  <div class="wrapper">
    <div>Dashboard</div>
      <!-- <ModalWindowAddPaymentForm @close='onClose' v-if='addFormShown'/> -->
      <button @click="ShowPaymentForm">open modal window +</button>
  </div>
</template>

<script>
// import ModalWindow from '../components/ModalWindow.vue'
export default {
name:'Dashboard',
data(){
  return{
    addFormShown:false,
  }
},
components:{
  // ModalWindowAddPaymentForm
},
methods:{
  ShowPaymentForm(){
    this.$modal.show('AddPayment',{header:'Add from plugin'})
  },
  // onClick(){
  //   this.$emit('OpenModalWindow',{
  //     header: "great header",
  //     content:'addpayment'
  //   })
  // },

}
}
</script>

<style>

</style>