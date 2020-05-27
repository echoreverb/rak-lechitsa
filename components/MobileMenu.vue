<template>
  <div class="header-container">
    <container>
      <header class="header">
        <nav-menu class="header__menu">
          <nuxt-link
            to="/"
            v-bind:class="
              $route.path === '/'
                ? 'header__link header__link_active'
                : 'header__link'
            "
            >Главная</nuxt-link
          >
          <nuxt-link
            to="/stories"
            v-bind:class="
              $route.path === '/stories'
                ? 'header__link header__link_active'
                : 'header__link'
            "
            >Истории</nuxt-link
          >
          <a to="" class="header__link" @click="togglePopUp"
            >Рассказать историю</a
          >
        </nav-menu>
      </header>
    </container>
  </div>
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
      this.$store.commit('popup/togglePopUp');
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
  min-height: 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: white;
}

.header__menu {
  min-width: 410px;
  font-size: 18px;
  line-height: 22px;
  justify-content: flex-start;
}

.header__link {
  text-decoration: none;
  color: #000000;
  margin-right: 30px;
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

@media screen and (max-width: 425px) {
  .header__link {
    margin-bottom: 18px;
    max-width: max-content;
  }
  .header__link:first-of-type {
    margin-top: 18px;
  }
}
</style>
