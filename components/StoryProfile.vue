<template>
  <div class="story-profile">
    <img
      class="story-profile__image story-profile__image_grid"
      :src="`${baseUrl}${source.ImageUrl[0].url}`"
    />
    <div class="second-column">
      <h4 class="story-profile__name">
        {{ source.author }}:
        <p class="story-profile__text">&laquo;{{ source.title }}&raquo;</p>
      </h4>
      <img
        class="story-profile__image story-profile__image_flex"
        :src="`${baseUrl}${source.ImageUrl[0].url}`"
      />
      <div class="second-column_footer">
        <a href="#" class="share-link" @click.prevent="togglePopUp"
          >Поделитесь &#8599;</a
        >
        <p class="date">{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    source: Object,
  },
  computed: {
    date() {
      const date = this.source.date;
      const myDate = date.slice(0, 10);
      const day = myDate.substr(8, 2);
      const month = myDate.substr(5, 2);
      const year = myDate.substr(0, 4);
      const months = [
        ' ',
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октябрь',
        'ноября',
        'декабря',
      ];
      return Number(day) + ' ' + months[Number(month)] + ' ' + year;
    },
  },
  methods: {
    togglePopUp() {
      this.$store.commit('popup/toggleSocial');
    },
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
    };
  },
};
</script>

<style scoped>
.story-profile {
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

.story-profile__image {
  object-fit: cover;
  width: 580px;
  height: 580px;
}

.story-profile__image_grid {
  display: block;
}
.story-profile__image_flex {
  display: none;
}
.story-profile__name {
  align-self: start;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  margin-bottom: auto;
  color: #000000;
}

.story-profile__text {
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
  .story-profile {
    max-width: 1180px;
    margin-bottom: 120px;
  }
  .story-profile__image {
    width: 518px;
    height: 518px;
  }
  .story-profile__name {
    font-size: 34px;
    line-height: 44px;
  }
  .story-profile__text {
    font-size: 34px;
    line-height: 44px;
  }
}

@media screen and (max-width: 1024px) {
  .story-profile {
    max-width: 924px;
    grid-column-gap: 40px;
    margin-bottom: 90px;
  }
  .story-profile__image {
    width: 407px;
    height: 407px;
  }
  .story-profile__name {
    font-size: 30px;
    line-height: 38px;
  }
  .story-profile__text {
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
  .story-profile {
    display: flex;
    max-width: 640px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
  .second-column {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .story-profile__image {
    width: 420px;
    height: 420px;
    margin: 60px auto;
  }
  .story-profile__image_grid {
    display: none;
  }
  .story-profile__image_flex {
    display: block;
  }
}
@media screen and (max-width: 400px) {
  .story-profile {
    max-width: 290px;
    margin-top: 50px;
    margin-bottom: 40px;
  }
  .story-profile__image {
    width: 290px;
    height: 290px;
    margin: 30px auto;
  }
  .story-profile__name {
    font-size: 18px;
    line-height: 21px;
  }
  .story-profile__text {
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
