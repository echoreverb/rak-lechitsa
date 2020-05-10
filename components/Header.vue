<template>
  <container>
    <header class="header">
      <h5 class="header__project-name">
        Проект Благотворительного Фонда Константина Хабенского
      </h5>
      <nav class="header__menu">
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
        <nuxt-link to="" class="header__link">Рассказать историю</nuxt-link>
      </nav>
    </header>
  </container>
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
.header {
  width: 100%;
  /* max-width: 1440px; */
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: white;
}

.header__project-name {
  max-width: 340px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.header__menu {
  font-size: 18px;
  line-height: 24px;
}

.header__link {
  text-decoration: none;
  color: black;
  margin-right: 40px;
}

.header__link:last-of-type {
  margin-right: 0;
}

.header__link_active {
  border-bottom: black 1px solid;
}
</style>
