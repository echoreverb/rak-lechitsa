<template>
  <div @click="toggleMobile">
    <div v-if="!isMenuOpened" class="menu menu_gamburger">
      <span class="menu__line"></span><span class="menu__line"></span
      ><span class="menu__line"></span>
    </div>
    <div v-if="isMenuOpened" class="menu menu_close"></div>
  </div>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
}

.menu_gamburger {
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 27px;
  cursor: pointer;
}

.menu__line {
  border: 1.5px solid black;
}

.menu_close {
  width: 23px;
  height: 23px;
  position: relative;
  cursor: pointer;
}
.menu_close:before,
.menu_close:after {
  content: '';
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
}
.menu_close:before {
  left: calc(50% - 1px);
  border-left: 3px solid black;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.menu_close:after {
  right: calc(50% - 1px);
  border-right: 3px solid black;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media screen and (max-width: 425px) {
  .menu_gamburger {
    width: 26px;
    height: 23px;
    cursor: pointer;
  }

  .menu_close {
    width: 13px;
    height: 13px;
  }

  .menu_close:before {
    border-left: 2px solid black;
  }
  .menu_close:after {
    border-right: 2px solid black;
  }
}
</style>
