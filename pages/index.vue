<template>
  <div>
    <div class="root">
      <section class="cover">
        <h1 class="cover__title">#раклечится</h1>
        <img class="cover__arrow" src="../static/images/arrow_down.svg" />
      </section>

      <section class="video">
        <container>
          <div class="two-column-content video__container">
            <div class="video__text">
              <section-title>
                Истории людей, победивших рак, но не свои привычки
              </section-title>
              <section-subtitle>
                Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
                фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
                доказательство&nbsp;— люди с их историями.
              </section-subtitle>
              <div class="slider-button-container">
                <button
                  aria-label="Previous video"
                  type="button"
                  class="slider-button slider-button_previous"
                ></button>
                <button
                  aria-label="Next video"
                  type="button"
                  class="slider-button slider-button_next"
                ></button>
              </div>
            </div>
            <div class="video__content">
              <!-- <rak-video :src="videos[0].src" /> -->
              <rak-slider :videos="videos" />
            </div>
            <p class="video__description">
              Все видео вы можете найте на нашем
              <a
                class="video__link"
                href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
                >YouTube канале</a
              >.
            </p>
          </div>
          <banner theme="dark">
            <h2 class="banner__text">
              и в отличие от рака,
              <span class="important-text">#этонелечится</span>
            </h2>
          </banner>
        </container>
      </section>

      <section class="stories">
        <container>
          <section-title>Истории неизлечимых привычек</section-title>
          <div class="stories__cards-container">
            <card v-for="obj in stories" :key="obj.id" :source="obj" />
          </div>
          <nuxt-link to="/stories" class="link_underline_false">
            <banner theme="light"><span>Больше статей</span></banner>
          </nuxt-link>
        </container>
      </section>

      <section class="instagram">
        <container>
          <banner theme="dark">
            <h2 class="banner__text">
              рассказывайте ваши истории в инстаграм <br />
              <span class="important-text">#этонелечится</span>
            </h2>
          </banner>
          <div class="two-column-content">
            <div class="instagram__text">
              <section-title>
                <a
                  class="title-link"
                  href="https://www.instagram.com/raklechitsa/"
                  target="_blank"
                  >Инстаграм
                </a>
              </section-title>
              <section-subtitle>
                Два раза в неделю мы просматриваем все посты по хештегу
                #этонелечится. Все истории, где нет нецензурных выражений и
                запрещенного контента попадают сюда. Следите за правильным
                написанием хештега, чтобы мы не пропустили вашу историю.
              </section-subtitle>
            </div>
            <div class="instagram__grid-container">
              <img
                v-for="obj in stories"
                :key="obj.id"
                :src="obj.img"
                alt="картинка из инстаграма"
                class="instagram__image"
              />
            </div>
          </div>
        </container>
      </section>

      <section class="your-story">
        <container>
          <div class="two-column-content">
            <div class="your-story__text">
              <section-title>Расскажите свою историю</section-title>
              <section-subtitle>
                Мы публикуем новые истории на сайте раз в неделю. Есть 2
                варианта поделиться своей историей неизлечимых привычек,
                навязчивых идей и болезненных привязанностей.
              </section-subtitle>
            </div>
            <nxt-options
              class="your-story__options"
              theme="light"
              type="form"
            />
          </div>
        </container>
      </section>

      <section class="statistics">
        <container>
          <section-title>Статистика по онкозаболеваниям</section-title>
          <div class="statistics__grid">
            <statistics-card
              v-for="obj in statistics"
              :key="obj.id"
              :data="obj"
            />
          </div>
        </container>
      </section>

      <section class="info">
        <container>
          <h2 class="info__title">#раклечится</h2>
          <div class="two-column-content">
            <div class="info__text">
              <section-title class="section-title_white"
                >О проекте</section-title
              >
              <section-subtitle class="section-subtitle_light">
                Этот проект был создан благотворительным фондом Константина
                Хабенского.
              </section-subtitle>
            </div>
            <nxt-options class="info__options" theme="dark" type="about" />
          </div>
        </container>
      </section>
    </div>
  </div>
</template>

<script>
import VideoIframe from '@/components/VideoIframe';
import VideoSlider from '@/components/VideoSlider';
import Banner from '@/components/Banner';
import Card from '@/components/Card';
import Button from '@/components/ui/Button';
import StatisticsCard from '@/components/StatisticsCard';
import WidthAdjustContainer from '@/components/WidthAdjustContainer';
import Options from '@/components/Options';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionSubtitle from '@/components/ui/SectionSubtitle';
export default {
  components: {
    container: WidthAdjustContainer,
    'section-title': SectionTitle,
    'section-subtitle': SectionSubtitle,
    'rak-video': VideoIframe,
    'rak-slider': VideoSlider,
    banner: Banner,
    card: Card,
    'rak-button': Button,
    'statistics-card': StatisticsCard,
    'nxt-options': Options,
  },
  computed: {
    videos() {
      return this.$store.getters['videos/getVideos'];
    },
    statistics() {
      return this.$store.getters['statistics/getStatistics'];
    },
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
};
</script>

<style scoped>
.root {
  width: 100vw;
}

.cover {
  width: 100vw;
  min-height: 689px;
  background: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.cover__title {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
  color: #fff;
}

.cover__arrow {
  align-self: center;
  position: absolute;
  left: calc(50% - (36px / 2));
  bottom: 40px;
}

.video {
  margin-top: 100px;
}

.video__text {
  display: flex;
  flex-direction: column;
}

.video__content {
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.video__button-container {
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 26px;
}

.two-column-content {
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2.1fr;
  grid-column-gap: 40px;
  min-height: 420px;
  overflow: hidden;
}

.video__text {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
}

.slider-button-container {
  display: flex;
  flex-direction: row;
  margin-top: auto;
  width: 80px;
  height: 40px;
  background: #fbfbfb;
}

.slider-button {
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
  color: #000000;
  background: transparent;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 50% 50%;
  border: none;
  cursor: pointer;
}

.slider-button_previous {
  background-image: url('../static/images/arrow-enabled-right.svg');
  transform: rotate(180deg);
}

.slider-button_next {
  background-image: url('../static/images/arrow-enabled-right.svg');
}

.slider-button_disabled {
  opacity: 0.3;
}

.section-title_white {
  color: white;
}

.section-subtitle_light {
  color: #dedede;
}

.video__container {
  grid-row-gap: 10px;
}

.video__description {
  grid-row: 2;
  grid-column: 2;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  margin-top: 10px;
}

.video__link {
  color: #666666;
}
.video__button {
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
}
.video__button_next {
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17L9 9L1 1' stroke='black'/%3E%3C/svg%3E");
}
.video__button_prev {
  background-image: url("data:image/svg+xml,%0A%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='black'/%3E%3C/svg%3E%0A");
}
.banner__text {
  max-width: 1000px;
  font-size: 30px;
  line-height: 46px;
  font-weight: 500;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0 13px;
}

.link_underline_false {
  text-decoration: none;
  color: inherit;
}

.important-text {
  font-weight: 800;
  font-size: 40px;
}

.stories__cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  margin: 70px 0;
}

.title-link {
  display: inline-block;
  text-decoration: none;
  border-bottom: solid black 2px;
  color: inherit;
  transition: 0.3s ease;
}

.title-link:hover {
  color: #121212;
  opacity: 0.8;
  border-bottom-color: rgba(18, 18, 18, 0.8);
}

.instagram__grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 100px;
}

.instagram__image {
  width: 100%;
}

.your-story {
  background: #f7f7f7;
  position: relative;
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  min-height: 520px;
  width: 100vw;
  padding-top: 100px;
}

.two-column-text {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 40px;
  margin-top: 100px;
}

.two-column-text_light {
  margin-top: 68px;
}

.two-column-text__brief {
  text-align: right;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.two-column-text__brief_light {
  color: #dedede;
  max-width: 150px;
}

.two-column-text__main {
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.two-column-text__main_light {
  color: #dedede;
  margin-bottom: 20px;
}

.two-column-text__main_light:last-of-type {
  margin-bottom: 0;
}

.your-story__button {
  margin-top: 80px;
}
.your-story__options {
  margin-top: 100px;
}
.statistics {
  margin-top: 100px;
}

.statistics__grid {
  margin: 70px 0 100px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
}

.info {
  background: #613a93;
  position: relative;
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100vw;
}

.info__title {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  padding-top: 90px;
  margin-bottom: 70px;
}
.info__options {
  margin-top: 68px;
}
</style>
