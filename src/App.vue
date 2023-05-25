<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import { store } from './components/store.js';
import axios from 'axios';


export default {
    components: {
        AppHeader,
        AppMain,
        AppSelect
    }, 
    data() {
      return {
        store
      }
    
    },
    methods: {
      retrieveData() {
       
        axios.get(this.store.urlAPI).then(r => {
          this.store.cards = r.data.data;
          this.store.loading = false;
        })
        .catch(error => {
          console.error('Error: ', error);
          this.store.loading = false;
          this.store.cards = [];
        })
      },
      retrieveArchetypes() {
        axios.get(this.store.urlArchetypesAPI).then(r => {
          this.store.archetypes = r.data;
        })
      }
      
    },
    mounted() {
      this.retrieveArchetypes()
      this.retrieveData(this.store.selectedArchetype)
    }
}


</script>

<template>
  <div id="app">
    <AppHeader/>
    <AppSelect/>
    <AppMain/>
  
  </div>

</template>

<style scoped>
*{
  font-family: sans-serif;
}
</style>
