<template>
  <div>
    <div class="root">
      <section class="cover">
        <h1 class="cover__title">#раклечится</h1>
        <img class="cover__arrow" src="../static/images/arrow_down.svg" />
      </section>

      <section class="video">
        <container>
          <div class="two-column-content">
            <div class="video__text">
              <section-title>
                Истории людей, победивших рак, но не свои привычки
              </section-title>
              <section-subtitle>
                Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
                фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
                доказательство — люди с их историями.
              </section-subtitle>
            </div>
            <div class="video__content">
              <rak-video />
              <p class="video__description">
                Все видео вы можете найте на нашем
                <a
                  class="video__link"
                  href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
                  >YouTube канале</a
                >.
              </p>
            </div>
          </div>
          <banner>
            <h2 class="banner__text">
              и в отличие от рака, <span class="important">#этонелечится</span>
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
          <nuxt-link to="/stories">
            <banner-grey
              ><span class="banner-grey__text">Больше статей</span></banner-grey
            >
          </nuxt-link>
        </container>
      </section>

      <section class="instagram">
        <container>
          <banner>
            <h2 class="banner__text">
              рассказывайте ваши истории в инстаграм
              <span class="important">#этонелечится</span>
            </h2>
          </banner>
          <div class="two-column-content">
            <div class="instagram__text">
              <section-title>Инстаграм</section-title>
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
              current="0"
              theme="light"
              :options="formOptions"
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
            <nxt-options
              class="info__options"
              current="0"
              theme="dark"
              :options="aboutOptions"
            />
          </div>
        </container>
      </section>
    </div>
  </div>
</template>

<script>
import VideoIframe from '@/components/VideoIframe';
import Banner from '@/components/Banner';
import Card from '@/components/Card';
import Banner_grey from '@/components/Banner_grey';
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
    banner: Banner,
    card: Card,
    'banner-grey': Banner_grey,
    'rak-button': Button,
    'statistics-card': StatisticsCard,
    'nxt-options': Options,
  },
  data() {
    return {
      stories: [
        {
          id: '1',
          img:
            'https://cdn25.img.ria.ru/images/148839/96/1488399659_0:0:960:960_600x600_80_0_1_b5d1bbc3011e64dcc29927f4f599fc75.jpg',
          name: 'Котик Пушистый',
          story: 'Котик никогда не болел и Вам не советует!',
        },
        {
          id: '2',
          img:
            'https://planeta-kigurumi.ru/image/cache/catalog/1_fractal/kategoryunicorn-350x350.png',
          name: 'Единорожка',
          story: 'Единорожка делится с Вами хорошим настроением!',
        },
        {
          id: '3',
          img:
            'https://i.pinimg.com/originals/63/45/21/634521c154b7f3c10a92c2375b182760.jpg',
          name: 'Черепаха Тортилла',
          story: 'Несмотря на преклонный возраст, отлично плавает!',
        },
        {
          id: '4',
          img:
            'https://vignette.wikia.nocookie.net/harrypotter/images/6/6e/VoldemortHeadshot_DHP1.png/revision/latest/top-crop/width/360/height/360?cb=20161203031453',
          name: 'Том Реддл',
          story: 'Не теряет надежды победить облысение!',
        },
        {
          id: '5',
          img:
            'https://nrj.ua/thumb/detail_308_308/news/f6/43/597701259ac29_w1023.jpg',
          name: 'Джоуи Триббиани',
          story: 'Не делится едой!',
        },
        {
          id: '6',
          img:
            'https://pbs.twimg.com/profile_images/893172702164393985/xUvzpgdL_400x400.jpg',
          name: 'Альпака',
          story: 'Плевала на все эти вирусы!',
        },
        {
          id: '7',
          img:
            'https://lapki.pet/uploads/article/7/soderzhanie-velsh-korgi-pembroka.jpg',
          name: 'Корги',
          story: 'Говорят Вам не переживать по пустякам!',
        },
        {
          id: '8',
          img:
            'data:image/jpeg;base64,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',
          name: 'Альберт Эйнштейн',
          story: 'Говорит, что всё относительно!',
        },
      ],
      statistics: [
        {
          id: '1',
          text:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          barType: '1',
          digits: '1 из 3',
          source: 'Левада-Центр 2018',
          value: 1,
          maxValue: 3,
        },
        {
          id: '2',
          text: '2,6% Россиян имеют онкозаболевания.',
          barType: '1',
          digits: '3 700 000',
          source: 'Росстат 2018',
          value: 2.6,
          maxValue: 100,
        },
        {
          id: '3',
          text:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          barType: '2',
          digits: '↑28%',
          source: 'МНИОИ Герцена 2018',
          previousValue: 78.1,
          currentValue: 100,
          maxValue: 100,
        },
        {
          id: '4',
          text:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          barType: '2',
          digits: '↓25%',
          source: 'МНИОИ Герцена 2018',
          previousValue: 100,
          currentValue: 75,
          maxValue: co100,
        },
      ],
      formOptions: [
        {
          text:
            'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
          button: 'Заполнить форму',
          link: '1-й вариант',
          id: 0,
        },
        {
          text:
            'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
          button: 'Оставить контакт',
          link: '2-й вариант',
          id: 1,
        },
      ],
      aboutOptions: [
        {
          text:
            'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.\nРак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.',
          link: 'Рак Лечится',
          id: 0,
        },
        {
          text:
            'Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.',
          link: 'Фонд Хабенского',
          id: 1,
        },
      ],
    };
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

.two-column-content {
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2.1fr;
  grid-column-gap: 40px;
  min-height: 420px;
}

.section-title_white {
  color: white;
}

.section-subtitle_light {
  color: #dedede;
}

.video__description {
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  margin-top: 10px;
  margin-bottom: -26px;
}

.video__link {
  color: #666666;
}

.banner__text {
  max-width: 750px;
  font-size: 30px;
  line-height: 46px;
  font-weight: 300;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
}

.banner-grey__text {
  font-size: 16px;
  line-height: 20px;
  color: #000;
  text-decoration: none;
}

.important {
  font-weight: 800;
  font-size: 38px;
}

.stories__cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  margin: 70px 0;
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
