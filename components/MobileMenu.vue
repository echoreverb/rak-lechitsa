<template>
  <div class="header-container">
    <container>
      <header class="header">
        <nav-menu>
          <ul class="header__menu">
            <li class="item">
              <nuxt-link
                to="/"
                v-bind:class="
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
                v-bind:class="
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

.item {
  display: inline-block;
  margin-right: 30px;
}

.item:last-of-type {
  margin-right: 0px;
}

.header__menu {
  font-size: 18px;
  line-height: 22px;
  list-style: none;
  display: flex;
  min-width: 410px;
  padding-left: 0;
}

.header__link {
  text-decoration: none;
  color: #000;
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

/* adaptive-popups */
@media screen and (max-width: 500px) {
  .header {
    min-height: 120px;
  }

  .header__menu {
    flex-direction: column;
  }
  .header__link {
    font-size: 13px;
    line-height: 16px;
  }

  .item {
    margin-top: 18px;
    max-height: 16px;
  }

  .item:last-of-type {
    margin-bottom: 18px;
/*
@media screen and (max-width: 425px) {
  .header__link {
    margin-bottom: 18px;
    max-width: max-content;
  }
  .header__link:first-of-type {
    margin-top: 18px;
*/
  }
}
</style>
