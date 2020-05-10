<template>
  <div class="grid">
    <a class="grid__link" v-for="image in images" :key="image.id">
      <img :src="image.src" :alt="image.alt" class="grid__image" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['images'],
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
.grid__image {
  max-width: 100%;
}
.grid__image:hover {
  opacity: 0.5;
}
</style>
