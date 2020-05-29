<template>
  <div :to="`/stories/${source.id}`" class="full-story">
    <p class="full-story__text">{{ source.text }}</p>
    <p @click="togglePopUp" class="full-story__link">
      Поделитесь этой статьей в своих социальных сетях &#8599;
    </p>
  </div>
</template>

<script>
export default {
  props: {
    source: Object,
  },
  methods: {
    togglePopUp() {
      this.$store.commit('popup/toggleSocial');
    },
  },
};
</script>

<style scoped>
.full-story {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 780px;
  margin: 0px auto 160px;
}

.full-story__text {
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 70px;

  color: #000;
}

.full-story__link {
  width: 100%;
  text-decoration: none;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding: 30px 0px;
  cursor: pointer;
  text-align: center;

  color: #121212;
}

.full-story__link:hover {
  opacity: 0.8;
}
@media screen and (max-width: 1280px) {
  .full-story {
    max-width: 720px;
    margin-bottom: 150px;
  }

  .full-story__text {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 1024px) {
  .full-story {
    max-width: 640px;
    margin-bottom: 120px;
  }

  .full-story__text {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 46px;
  }

  .full-story__link {
    font-size: 16px;
    line-height: 22px;
    padding: 24px 0px;
  }
}
@media screen and (max-width: 768px) {
  .full-story__text {
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 320px) {
  .full-story {
    max-width: 290px;
    margin-bottom: 100px;
  }

  .full-story__text {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 40px;
  }

  .full-story__link {
    font-size: 13px;
    line-height: 16px;
    padding: 20px 0px;
  }
}
</style>
