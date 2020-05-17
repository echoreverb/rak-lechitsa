<template>
  <div class="section-subtitle">
    <p class="section-subtitle__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-subtitle {
  color: #666666;
}
.section-subtitle__text {
  font-size: 18px;
  line-height: 22px;
  margin-top: 32px;
  max-width: 340px;
  word-spacing: 0.5;
}

@media screen and (max-width: 1280px) {
  .section-subtitle__text {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
  }
}
</style>
