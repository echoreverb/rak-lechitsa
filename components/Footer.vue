<template>
  <footer class="footer">
    <container>
      <div class="footer__content">
        <p class="footer__thanks">
          Спасибо всем, кто помог состояться этому проекту
        </p>
        <div class="footer__social">
          <a href="#" class="footer__link">Мы в Инстаграме и Youtube</a>
          <a href="#" class="footer__link">Поделитесь ↗</a>
        </div>
      </div>
      <div class="footer__info">
        <p class="footer__project">Рак Лечится 2020</p>
        <p class="footer__author">Сделано студентами Яндекс Практикум</p>
      </div>
      <!-- навигация весьма сомнительно получилась( -->
      <footer class="footer__nav">
        <nuxt-link to="/" class="footer__link">Главная</nuxt-link>
        <nuxt-link to="/stories" class="footer__link">Истории</nuxt-link>
      </footer>
    </container>
  </footer>
</template>

<script>
import WidthAdjustContainerVue from '@/components/WidthAdjustContainer.vue';
export default {
  components: {
    container: WidthAdjustContainerVue,
  },
};
</script>

<style scoped>
.footer {
  width: 100vw;
  min-height: 356px;
  background-color: #fbfbfb;
  margin: 0 auto;
  /* padding: 0 60px 60px; */
  padding-bottom: 60px;
  position: relative;
}
.footer__info {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  display: flex;
  justify-content: space-between;
  margin-top: 110px;
}
.footer__content {
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
}
.footer__thanks {
  max-width: 340px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.footer__link {
  display: block;
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 44px;
}

.footer__nav {
  position: absolute;
  top: 60px;
  left: calc(50% - 190px / 2);
  display: flex;
  width: 190px;
  justify-content: space-between;
}
</style>
