<template>
  <div>
    <nuxt-link :to="`/stories/${source.id}`" class="card">
      <img class="card__image" :src="source.img" />
      <h4 class="card__name">{{ source.name }}</h4>
      <p class="card__text">{{ source.story }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['source'],
};
</script>

<style scoped>
.card {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  transition: 0.3s ease;
}

.card:hover {
  color: #121212;
  opacity: 0.8;
}

.card__image {
  width: 100%;
  max-width: 300px;
  max-height: 300px;
}

.card__name {
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-top: 20px;
}

.card__text {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  margin-top: 14px;
}
</style>
