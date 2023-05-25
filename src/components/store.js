import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
  loading: true,
  urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  urlGetCardsByArchetype: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
  urlArchetypesAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  archetypes: [],
  selectedArchetype: "",
  cards: [],

  fetchCards() {
    this.loading = true;

    axios.get(this.urlAPI)
      .then(response => {
        this.cards = response.data.data;
        this.loading = false;
        console.log(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle carte:', error);
        this.loading = false;
      });
  }
});