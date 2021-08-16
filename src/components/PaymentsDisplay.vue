<template>
<v-container>
  <v-row>
    <v-col cols="1">#</v-col>
    <v-col cols="4">Date</v-col>
    <v-col cols="4">Category</v-col>
    <v-col cols="2">Value</v-col>
  </v-row>
  <v-row v-for="(item,idx) in list" :key="idx">
    <v-col cols="1">{{item.id}}</v-col>
    <v-col cols="4">{{item.date}}</v-col>
    <v-col cols="4">{{item.category}}</v-col>
    <v-col cols="2">{{item.value}}</v-col>
    <v-col cols="1" @click="contextMenuClick(item)"><v-icon>mdi-dots-vertical</v-icon></v-col>
    <modal-window-context-menu @updated2='update' :settings="contextSettings" v-if="menuClicked"/>
  </v-row>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalWindowContextMenu from './ModalWindowContextMenu.vue'
export default {
    components:{
      ModalWindowContextMenu
    },
    name:"PaymentsDisplay",
    props:{
      list:{
        type:Array,
        default:()=>[]
      },
    },
    data(){
      return{
        storeList:[],
        filterList:[],
        contextSettings:{},
        menuClicked:false
      }
    },
    methods:{      
      update(){
        console.log("updated from paymentsDisplay")
        this.$emit('updated3')
      },
      contextMenuClick(item){
        this.menuClicked=!this.menuClicked;
        
        this.$menu.show("ContextMenu",{item,coordinateX:event.pageX,coordinateY:event.pageY})
      },
      onShown(settings){
        this.contextSettings=settings;
      }

    },
    computed:{
      
      ...mapGetters([
        'getPaymentsList',
        'getFullPaymentValue'
      ]),
      
      getFPV(){
        return this.getFullPaymentValue
      },
      getList(){
        return this.getPaymentsList
      }
    },
    // created(){
      
    //  this.$store.dispatch('fetchData')
    // },
    mounted(){
      this.$menu.EventBus.$on('show',this.onShown)
      this.$menu.EventBus.$on('hide',this.onHide)
    },
    updated(){
        
    },
    beforeUpdate(){
      // this.storeList= this.getList
      //   // this.filterList= this.storeList.slice(0,5)
      //   this.filterList=this.storeList.slice((this.pages-1)*5,this.pages*5);
    },
    beforedestroy(){
      this.$menu.EventBus.$off('show',this.onShown)
      this.$menu.EventBus.$off('hide',this.onHide)
    }
    
}
</script>

<style scoped>

</style>