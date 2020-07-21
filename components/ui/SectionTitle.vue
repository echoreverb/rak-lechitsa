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
  color: #000;
}
.section-title__text {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-top: 100px;
}

@media screen and (max-width: 1280px) {
  .section-title__text {
    max-width: 367px;
    font-size: 28px;
    line-height: 32px;
    margin-top: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .section-title__text {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
    margin-top: 80px;
  }
}

@media screen and (max-width: 768px) {
  .section-title__text {
    max-width: 380px;
    font-size: 24px;
    line-height: 28px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}

@media screen and (max-width: 400px) {
  .section-title__text {
    max-width: 290px;
    font-size: 18px;
    line-height: 21px;
    margin: 50px 0 0;
    text-align: left;
  }
}
</style>
