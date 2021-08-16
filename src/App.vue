<template>
  <v-app>
    <v-system-bar height="50px" flat>
      <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="/about">About</v-btn>  
    </v-system-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
  }),
  methods:{
    
  },
  computed:{
    
  },
  mounted(){
    
  },
  beforedestroy(){
    
  },
  
    created(){
      
    }
};
</script>
