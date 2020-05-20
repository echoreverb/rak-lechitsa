<template>
  <div :to="`/stories/${source.id}`" class="storyProfile">
    <img
      class="storyProfile__image storyProfile__image_grid"
      :src="source.img"
    />
    <div class="second-column">
      <h4 class="storyProfile__name">
        {{ source.name }}:
        <p class="storyProfile__text">&laquo;{{ source.story }}&raquo;</p>
      </h4>
      <img
        class="storyProfile__image storyProfile__image_flex"
        :src="source.img"
      />
      <div class="second-column_footer">
        <a href="#" class="share-link">Поделитесь &#8599;</a>
        <p class="date">{{ source.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source'],
};
</script>

<style scoped>
.storyProfile {
  max-width: 1320px;
  position: relative;
  text-decoration: none;
  color: inherit;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 60px;
  transition: 0.3s ease;
  margin-top: 100px;
  margin-bottom: 130px;
}

.second-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding-top: 30px;
  padding-bottom: 30px;
}

.second-column_footer {
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

.storyProfile__image {
  width: 580px;
  height: 580px;
}

.storyProfile__image_grid {
  display: block;
}
.storyProfile__image_flex {
  display: none;
}
.storyProfile__name {
  align-self: start;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  margin-bottom: auto;
  color: #000000;
}

.storyProfile__text {
  display: inline;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
  color: #000000;
}

.share-link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
}

.share-link:hover {
  opacity: 0.8;
}

.date {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-left: auto;
  text-align: right;
  color: #121212;
}

@media screen and (max-width: 1280px) {
  .storyProfile {
    max-width: 1180px;
    margin-bottom: 120px;
  }
  .storyProfile__image {
    width: 518px;
    height: 518px;
  }
  .storyProfile__name {
    font-size: 34px;
    line-height: 44px;
  }
  .storyProfile__text {
    font-size: 34px;
    line-height: 44px;
  }
}

@media screen and (max-width: 1024px) {
  .storyProfile {
    max-width: 924px;
    grid-column-gap: 40px;
    margin-bottom: 90px;
  }
  .storyProfile__image {
    width: 407px;
    height: 407px;
  }
  .storyProfile__name {
    font-size: 30px;
    line-height: 38px;
  }
  .storyProfile__text {
    font-size: 30px;
    line-height: 38px;
  }
  .share-link {
    font-size: 16px;
  }
  .date {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  .storyProfile {
    display: flex;
    max-width: 640px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
  .second-column {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .storyProfile__image {
    width: 420px;
    height: 420px;
    margin: 60px auto;
  }
  .storyProfile__image_grid {
    display: none;
  }
  .storyProfile__image_flex {
    display: block;
  }
}
@media screen and (max-width: 320px) {
  .storyProfile {
    max-width: 290px;
    margin-top: 50px;
    margin-bottom: 40px;
  }
  .storyProfile__image {
    width: 290px;
    height: 290px;
    margin: 30px auto;
  }
  .storyProfile__name {
    font-size: 18px;
    line-height: 21px;
  }
  .storyProfile__text {
    font-size: 18px;
    line-height: 21px;
  }
  .share-link {
    font-size: 13px;
    line-height: 16px;
  }
  .date {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
