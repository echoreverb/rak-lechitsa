<template>
  <header class="header">
    <p class="header__project-name">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
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
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 0 2px;
}

.header__project-name {
  width: 340px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.header__menu {
  display: flex;
  justify-content: space-between;
  width: 410px;
  font-size: 18px;
  line-height: 24px;
}

.header__link {
  text-decoration: none;
  color: black;
}

.header__link_active {
  border-bottom: black 1px solid;
}
</style>
