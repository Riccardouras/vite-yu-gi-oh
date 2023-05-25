<script>
    import { store } from './store.js';
    import axios from 'axios';

    export default {
  
    data() {
    return {
      selectedArchetype: '',
      store,
    };
  },
  computed: {
        
        filterCards() {
            console.log(this.store.urlGetCardsByArchetype + this.selectedArchetype);
            axios.get(this.store.urlGetCardsByArchetype + this.selectedArchetype)
            .then(r => {
                this.store.cards = []
                this.store.cards = r.data.data;
                this.store.loading = false;
            })
            .catch(error => {
                console.error('Error: ', error);
                this.store.loading = false;
                this.store.cards = [];
            })
        }
    },
}

</script>
<template>
    <div>
        <label for="archetype">Seleziona un archetipo:</label>
        <select id="archetype" v-model="this.store.archetypes" @change="this.filterCards">>
            <option v-for="archetype in this.store.archetypes" :value="archetype">{{ archetype.archetype_name }}</option>
        </select>
        <br><br>
    </div>

</template>