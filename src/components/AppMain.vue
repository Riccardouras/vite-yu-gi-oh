<script>
import { store } from './store.js';

export default {
  computed: {
    loading() {
      return store.loading;
    },
    cards() {
      return store.cards;
    },
  },
  created() {
    store.fetchCards();
  },
};
</script>
<template>
  <main>
    <div>
      <div v-if="loading">
        Loading...
      </div>
      <div class="flex wrap container">
        <div class="box" v-for="card in cards" :key="card.id">
          <img class="cardImg img_size" :src="card.card_images[0].image_url" alt="">
          <div class="text-center">
            <h3>{{ card.name }}</h3>
            <p>{{ card.archetype }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.img_size {
  width: 200px;
}

.flex {
  display: flex;
}

.wrap {
  flex-wrap: wrap;
}

.container {
  max-width: 99vw;
}

.box {
  max-width: 205px;
}

.text-center {
  text-align: center;
}</style>


