<template>
  <div :class="`banner banner_theme_${theme}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.banner {
  width: 100%;
  margin: 76px 0 100px;
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
}

.banner_theme_light:hover {
  background: #f8f8f8;
}
</style>
