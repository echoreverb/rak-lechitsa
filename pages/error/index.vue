<template>
  <div class="container">
    <section class="error">
      <h2 class="error-number">404 {{ errorStatus }}</h2>
      <p class="error-description">Страница не найдена {{ errorText }}</p>
      <nuxt-link to="/" class="error-description error-link"
        >Перейти на главную</nuxt-link
      >
    </section>
  </div>
</template>

<script>
export default {
  props: {
    errorStatus: String,
    errorText: String,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-number {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;
  text-align: center;
  color: #000;
  padding-bottom: 10px;
}

.error-description {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000;
}

.error-link {
  text-decoration: none;
  border-bottom: 1px solid;
  display: block;
  width: fit-content;
  margin: 0 auto;
  transition: 0.3s ease;
}

.error-link:hover {
  color: #121212;
  opacity: 0.8;
}

@media screen and (max-width: 425px) {
  .error-number {
    font-size: 72px;
    line-height: 87px;
    padding-bottom: 4px;
  }
  .error-description {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
