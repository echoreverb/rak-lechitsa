<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__row">
        <div class="footer__column">
          <h2 class="footer__heading">
            Спасибо всем, кто помог состояться этому проекту
          </h2>
        </div>
        <div class="footer__column">
          <nav class="footer__menu">
            <nuxt-link to="/" class="footer__link">Главная</nuxt-link>
            <nuxt-link to="/stories" class="footer__link">Истории</nuxt-link>
          </nav>
        </div>
        <div class="footer__column">
          <p class="footer__social">
            Мы в <nuxt-link to="/" class="footer__link">Инстаграме</nuxt-link>и
            <nuxt-link to="/" class="footer__link">YouTube</nuxt-link>
          </p>
          <p class="footer__social">
            <nuxt-link to="/" class="footer__link">Поделитесь ↗</nuxt-link>
          </p>
        </div>
      </div>
      <div class="footer__row">
        <p class="footer__copyrigth">Рак Лечится 2020</p>
        <p class="footer__copyrigth">Сделано студентами Яндекс Практикум</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  padding: 60px 0;
}
.footer__row {
  display: flex;
  justify-content: space-between;
}
.footer__row:first-of-type {
  margin-bottom: 110px;
}
.footer__heading {
  max-width: 340px;
}
</style>
