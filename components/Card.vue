<template>
  <div class="card">
    <img :src="image" :alt="heading" class="card__image" />
    <h3 class="card__heading">{{ heading }}</h3>
    <p class="card__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['image', 'heading', 'text'],
};
</script>

<style scoped>
.card {
}
.card__image {
  width: 100%;
  object-fit: cover;
  background-color: #ededed;
  margin-bottom: 20px;
}
.card__heading {
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin: 0 0 14px;
}
.card__text {
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}
</style>
