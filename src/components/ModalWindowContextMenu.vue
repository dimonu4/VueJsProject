<template>
  <div class="wrapper modalmenu" :style="{left:left,top:top}" >
      <component @updated='update' :is="settings.name" :item="settings"/>
  </div>
</template>

<script>
import ContextMenu from './ContextMenu.vue'
import AddPayment  from './AddPayment.vue'
export default {
    data(){
        return{
            left:'',
            top:''
        }
    },
    props:{
        settings:Object,
    },
  
    methods:{
        update(){
            console.log('updated from modalwindow')
            this.$emit('updated2')
        },
         calc(){
            this.left= `${this.settings.coordinateX}px`;
            this.top= `${this.settings.coordinateY}px`;
        },
    },
    components:{
        ContextMenu,
        AddPayment
    },
    mounted(){
    this.calc()
    }
}
</script>
<style lang="scss" scoped>
.modalmenu{
    position:absolute;
    
    background:green;
    width:20%;
    }
</style>
