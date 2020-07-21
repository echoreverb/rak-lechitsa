<template>
  <div class="header-container">
    <container>
      <header class="header">
        <nuxt-link to="/" class="header__logo">
          Проект Благотворительного Фонда Константина Хабенского
        </nuxt-link>
        <nav-menu>
          <ul class="header__menu">
            <li class="item">
              <nuxt-link
                to="/"
                :class="
                  $route.path === '/'
                    ? 'header__link header__link_active'
                    : 'header__link'
                "
                >Главная</nuxt-link
              >
            </li>
            <li class="item">
              <nuxt-link
                to="/stories"
                :class="
                  $route.path === '/stories'
                    ? 'header__link header__link_active'
                    : 'header__link'
                "
                >Истории</nuxt-link
              >
            </li>
            <li class="item">
              <a to="" class="header__link" @click="togglePopUp"
                >Рассказать историю</a
              >
            </li>
          </ul>
        </nav-menu>
        <mobile-icon class="header__mobile-icon" />
      </header>
    </container>
  </div>
</template>

<script>
import WidthAdjustContainer from '@/components/WidthAdjustContainer';
import Menu from '@/components/Menu';
import MobileIcon from '@/components/ui/MobileIcon';
export default {
  components: {
    container: WidthAdjustContainer,
    'nav-menu': Menu,
    'mobile-icon': MobileIcon,
  },
  methods: {
    togglePopUp() {
      this.$store.commit('popup/toggleQuiz');
    },
  },
};
</script>

<style scoped>
.header-container {
  border-bottom: 1px solid #e8e8e8;
}

.header {
  width: 100%;
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  /* background: white; */
}

.header__logo {
  max-width: 340px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #000;
}

.header__menu {
  min-width: 410px;
  font-size: 18px;
  line-height: 22px;
  list-style: none;
  padding-left: 0;
}

.item {
  display: inline-block;
  margin-right: 40px;
}

.item:last-of-type {
  margin-right: 0;
}

.header__link {
  text-decoration: none;
  color: #000;
  /* margin-right: 40px; */
  transition: 0.3s ease;
}

.header__link:hover {
  color: #121212;
  opacity: 0.8;
  cursor: pointer;
}

.header__link:last-of-type {
  margin-right: 0;
}

.header__link_active {
  border-bottom: black 1px solid;
}

.header__mobile-icon {
  display: none;
}

@media screen and (max-width: 1280px) {
  .header {
    min-height: 72px;
  }

  .header__project-name {
    line-height: 18px;
  }
  .header__menu {
    min-width: 374px;
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 1024px) {
  /* .header__link {
    margin-right: 30px;
  } */

  .item {
    margin-right: 30px;
  }

  .header__menu {
    min-width: 354px;
  }
}

@media screen and (max-width: 820px) {
  .header__menu {
    display: none;
  }

  .header__mobile-icon {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .header {
    min-height: 64px;
  }

  .header__project-name {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
