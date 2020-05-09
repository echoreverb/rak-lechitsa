<template>
  <div class="card-grid">
    <nxt-card
      v-for="card in cards"
      :key="card.id"
      :image="card.image"
      :heading="card.heading"
      :text="card.text"
    />
  </div>
</template>

<script>
import Card from '@/components/Card';
export default {
  props: ['cards'],
  components: {
    'nxt-card': Card,
  },
};
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 70px;
}
</style>
