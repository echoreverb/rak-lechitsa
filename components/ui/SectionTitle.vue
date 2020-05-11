<template>
  <div class="section-title">
    <h3 class="section-title__text">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-title {
  color: #000000;
}
.section-title__text {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
</style>
