<template>
  <div class="width-adjust-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.width-adjust-container {
  width: 100%;
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
}

@media (max-width: 1280px) {
  .width-adjust-container {
    padding: 0 50px;
  }
}

@media (max-width: 768px) {
  .width-adjust-container {
    padding: 0 40px;
  }
}

@media (max-width: 425px) {
  .width-adjust-container {
    padding: 0 15px;
  }
}
</style>
