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
  color: #666;
}
.section-subtitle__text {
  font-weight: normal;
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

@media screen and (max-width: 1024px) {
  .section-subtitle__text {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 768px) {
  .section-subtitle__text {
    max-width: 382px;
    margin: 26px auto 0;
  }
}

@media screen and (max-width: 400px) {
  .section-subtitle__text {
    max-width: 290px;
    margin: 16px 0 0;
  }
}
</style>
