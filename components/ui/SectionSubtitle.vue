<template>
  <div class="section-subtitle">
    <h4 class="section-subtitle__text">
      <slot></slot>
    </h4>
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
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-top: 32px;
  max-width: 340px;
  word-spacing: 0.5;
}
</style>
