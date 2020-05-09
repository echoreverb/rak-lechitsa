<template>
  <div class="columns">
    <div class="columns__brief">
      <h2 class="columns__heading">{{ heading }}</h2>
      <p class="columns__text">{{ text }}</p>
    </div>
    <div class="columns__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['heading', 'text', 'content'],
};
</script>

<style scoped>
.columns {
  display: flex;
}
</style>
