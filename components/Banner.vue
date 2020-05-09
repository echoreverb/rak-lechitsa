<template>
  <div class="banner">
    <p class="banner__text">
      {{ text }}
      <span class="banner__hashtag">{{ hashtag }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['text', 'hashtag'],
};
</script>

<style scoped>
.banner {
  background-color: #613a93;
  width: 100%;
  padding: 20px 285px;
  color: #fff;
  text-transform: uppercase;
}
.banner__text {
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
}
.banner__hashtag {
  font-weight: bold;
  font-size: 40px;
}
</style>
