<template>
  <footer class="footer">
    <container>
      <div class="footer__content">
        <p class="footer__thanks">
          Спасибо всем, кто помог состояться этому проекту
        </p>
        <div class="footer__social">
          <span class="footer__link-description"
            >Мы в
            <a href="#" class="footer__link">Инстаграме</a>
            и
            <a href="#" class="footer__link">Youtube</a></span
          >
          <a href="#" class="footer__link">Поделитесь ↗</a>
        </div>
      </div>
      <div class="footer__info">
        <p class="footer__project">Рак Лечится 2020</p>
        <p class="footer__author">Сделано студентами Яндекс Практикум</p>
      </div>
      <footer class="footer__nav">
        <nuxt-link to="/" class="footer__link">Главная</nuxt-link>
        <nuxt-link to="/stories" class="footer__link">Истории</nuxt-link>
      </footer>
    </container>
  </footer>
</template>

<script>
import WidthAdjustContainer from '@/components/WidthAdjustContainer';
export default {
  components: {
    container: WidthAdjustContainer,
  },
};
</script>

<style scoped>
.footer {
  width: 100vw;
  min-height: 356px;
  background-color: #fbfbfb;
  margin: 0 auto;
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

.footer__social {
  margin-right: 40px;
}

.footer__link-description {
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 44px;
}

.footer__link {
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 44px;
  transition: 0.3s ease;
}

.footer__link:hover {
  color: #121212;
  opacity: 0.8;
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
