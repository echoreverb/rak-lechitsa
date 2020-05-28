<template>
  <div :class="`banner banner_theme_${theme}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'banner_theme_dark',
    },
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  margin-top: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner_theme_dark {
  min-height: 86px;
  background-color: #613a93;
}

.banner_theme_light {
  min-height: 82px;
  background: #fbfbfb;
  font-size: 16px;
  line-height: 20px;
  color: black;
  transition: 0.3s ease;
  margin-bottom: 100px;
}

.banner_theme_light:hover {
  background: #f8f8f8;
}

@media screen and (max-width: 1280px) {
  .banner {
    margin-top: 62px;
  }

  .banner_theme_light {
    min-height: 78px;
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    margin-top: 54px;
  }

  .banner_theme_dark {
    min-height: 80px;
  }

  .banner_theme_light {
    margin-top: 46px;
    min-height: 50px;
    margin-bottom: 80px;
    font-size: 13px;
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    margin-top: 44px;
  }

  .banner_theme_dark {
    min-height: 100px;
  }

  .banner_theme_light {
    margin-top: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    margin-top: 50px;
  }

  .banner_theme_dark {
    min-height: 80px;
  }

  .banner_theme_light {
    margin-top: 40px;
    margin-bottom: 50px;
  }
}
</style>
