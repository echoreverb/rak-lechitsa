<template>
  <div class="container">
    <section class="error">
      <h2 class="error__number">404</h2>
      <p class="error__description">Страница не найдена</p>
      <nuxt-link to="/" class="error__description error__link"
        >Перейти на главную</nuxt-link
      >
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error__number {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;
  text-align: center;
  color: #000;
  padding-bottom: 10px;
}

.error__description {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000;
}

.error__link {
  text-decoration: none;
  border-bottom: 1px solid;
  display: block;
  width: fit-content;
  margin: 0 auto;
  transition: 0.3s ease;
}

.error__link:hover {
  color: #121212;
  opacity: 0.8;
}

@media screen and (max-width: 425px) {
  .error__number {
    font-size: 72px;
    line-height: 87px;
    padding-bottom: 4px;
  }
  .error__description {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
