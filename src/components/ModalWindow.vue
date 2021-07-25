<template>
  <div class="wrapper">
      <div class="header">{{settings.header}}</div>
      <div class='content'>
          <component :is="settings.name"/>
      </div>
      <div class='footer'>
          <button @click="$modal.hide()">Close</button>
      </div>
  </div>
</template>

<script>
import AddPayment from './AddPayment.vue'
// import ContextMenu from './ContextMenu.vue'
export default {
    components:{AddPayment,
    // ContextMenu
    },
    props:{
        settings:Object,
    },
    methods:{
        
    }
}
</script>

<style>

</style>