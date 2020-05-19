<template>
  <footer class="footer">
    <container>
      <div class="footer__content">
        <p class="footer__thanks">
          Спасибо всем, кто помог состояться этому проекту
        </p>
        <nav-menu class="footer__menu">
          <nuxt-link to="/" class="footer__link">Главная</nuxt-link>
          <nuxt-link to="/stories" class="footer__link">Истории</nuxt-link>
        </nav-menu>
        <div class="footer__social">
          <span class="footer__link-description"
            >Мы в
            <a
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
              class="footer__link"
              >Инстаграме</a
            >
            и
            <a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              target="_blank"
              class="footer__link"
              >Youtube</a
            ></span
          >
          <a href="#" class="footer__link">Поделитесь &#8599;</a>
        </div>
      </div>
      <div class="footer__info">
        <p class="footer__project">Рак Лечится {{ year }}</p>
        <p class="footer__author">
          Сделано студентами
          <a
            class="footer__link footer__link_author"
            target="_blank"
            href="https://praktikum.yandex.ru/"
            >Яндекс Практикум</a
          >
        </p>
      </div>
    </container>
  </footer>
</template>

<script>
import WidthAdjustContainer from '@/components/WidthAdjustContainer';
import Menu from '@/components/Menu';
export default {
  components: {
    container: WidthAdjustContainer,
    'nav-menu': Menu,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
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

.footer__link.footer__link_author {
  color: #898989;
}

.footer__link:hover {
  color: #121212;
  opacity: 0.8;
}

.footer__menu {
  margin-left: 20px;
  margin-right: calc(15% + 90px);
  min-width: 190px;
}
</style>
