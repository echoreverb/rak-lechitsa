<template>
  <footer class="footer">
    <container>
      <div class="footer__main">
        <div class="footer__content">
          <p class="footer__thanks">
            Спасибо всем, кто помог состояться этому проекту
          </p>
          <div class="footer__links">
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
                  class="footer__link footer__link_underlined"
                  >Инстаграме</a
                >
                и
                <a
                  href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
                  target="_blank"
                  class="footer__link footer__link_underlined"
                  >Youtube</a
                ></span
              >
              <a href="#" class="footer__link" @click.prevent="togglePopUp"
                >Поделитесь &#8599;</a
              >
            </div>
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
  methods: {
    togglePopUp() {
      this.$store.commit('popup/toggleSocial');
    },
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
  background-color: #fbfbfb;
}

.footer__main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 356px;
  padding-bottom: 60px;
}
.footer__info {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  display: flex;
  justify-content: space-between;
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

.footer__links {
  display: flex;
  width: 66%;
  justify-content: space-between;
}

.footer__social {
  margin-right: 40px;
  display: flex;
  flex-direction: column;
}

.footer__link-description {
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  margin-bottom: 44px;
}

.footer__link {
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  margin-bottom: 44px;
  transition: 0.3s ease;
}

.footer__link_underlined {
  border-bottom: 1px solid #000;
}

.footer__link.footer__link_author {
  color: #898989;
}

.footer__link:hover {
  color: #121212;
  opacity: 0.8;
}

.footer__menu {
  min-width: 190px;
}

@media screen and (max-width: 1280px) {
  .footer__main {
    min-height: 316px;
    padding-bottom: 50px;
  }
  .footer__content {
    padding-top: 50px;
  }
  .footer__info {
    font-size: 16px;
    line-height: 18px;
  }
  .footer__thanks {
    max-width: 305px;
    font-size: 28px;
    line-height: 32px;
  }
  .footer__social {
    margin-right: 40px;
  }

  .footer__link-description {
    font-size: 16px;
  }

  .footer__link {
    font-size: 16px;
  }

  .footer__menu {
    min-width: 172px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__main {
    min-height: 292px;
    padding-bottom: 50px;
  }

  .footer__thanks {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }

  .footer__link-description {
    font-size: 16px;
    margin-bottom: 22px;
  }

  .footer__link {
    font-size: 16px;
  }

  .footer__social {
    margin-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .footer__content {
    padding: 50px 10px 0;
  }

  .footer__thanks {
    max-width: 268px;
    font-size: 24px;
    line-height: 28px;
  }

  .footer__links {
    width: 55%;
  }

  .footer__link {
    margin-bottom: 14px;
  }

  .footer__social {
    margin-right: 0;
    min-width: 226px;
  }

  .footer__link-description {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 320px) {
  .footer__main {
    min-height: 402px;
    padding-bottom: 50px;
  }
  .footer__info {
    font-size: 13px;
    line-height: 18px;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
  }

  .footer__project {
    margin-bottom: 10px;
  }

  .footer__content {
    flex-direction: column;
    padding-top: 50px;
  }
  .footer__thanks {
    max-width: 290px;
    font-size: 18px;
    line-height: 21px;
  }

  .footer__links {
    width: 100%;
    flex-direction: column;
    margin-top: 50px;
  }

  .footer__social {
    margin-right: 40px;
    display: flex;
    flex-direction: column;
  }

  .footer__link-description {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__link {
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 18px;
  }
}
</style>
