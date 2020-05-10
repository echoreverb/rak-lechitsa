<template>
  <div class="root">
    <main class="main">
      <nxt-cover />
      <section class="videos">
        <div class="container">
          <nxt-columns
            class="videos__columns"
            heading="Истории людей, победивших рак, но не свои привычки"
            text="Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями."
          >
            <iframe
              width="867"
              height="450"
              src="https://www.youtube.com/embed/coOppM34GtI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p class="videos__text">
              Все видео вы можете найте на нашем
              <a href="#" class="videos__link">YouTube канале</a>.
            </p>
          </nxt-columns>
          <nxt-banner
            class="videos__banner"
            text="и в отличие от рака,"
            hashtag="#этонелечится"
          />
        </div>
      </section>
      <section class="stories">
        <div class="container">
          <h2 class="stories__heading">Истории неизлечимых привычек</h2>
          <nxt-grid class="stories__grid" :cards="cards" />
          <nxt-button text="Больше статей" size="lg" />
        </div>
      </section>
      <section class="instagram">
        <div class="container">
          <nxt-banner
            class="instagram__banner"
            text="РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ"
            hashtag="#этонелечится"
          />

          <nxt-columns
            class="instagram__columns"
            heading="Инстаграм "
            text="Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю."
          >
            <nxt-instagram :images="images" />
          </nxt-columns>
        </div>
      </section>
      <!-- придумать имя секции -->
      <section class="send-story">
        <div class="container">
          <nxt-columns
            class="send-story__columns"
            heading="Расскажите свою историю"
            text="Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей."
          >
            <nxt-options :current="0" :options="formOptions" />
          </nxt-columns>
        </div>
      </section>
      <section class="statistics">
        <div class="container statistics__container">
          <nxt-stat
            v-for="stat in stats"
            :key="stat.id"
            :text="stat.text"
            :digit="stat.digit"
            :bar="stat.bar"
            :organization="stat.organization"
          />
        </div>
      </section>

      <section class="about">
        <div class="container">
          <h1 class="about__heading">#РАКЛЕЧИТСЯ</h1>
          <nxt-columns
            class="about__columns"
            heading="О проекте"
            text="Этот проект был создан благотворительным фондом Константина Хабенского."
          >
            <nxt-options current="0" :options="aboutOptions" />
          </nxt-columns>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Cover from '@/components/Cover';
import Columns from '@/components/Columns';
import Banner from '@/components/Banner';
import CardGrid from '@/components/CardGrid';
import Button from '@/components/ui/Button';
import Grid from '@/components/Grid';
import Options from '@/components/Options';
import StatisticCard from '@/components/StatisticCard';
export default {
  components: {
    'nxt-cover': Cover,
    'nxt-columns': Columns,
    'nxt-banner': Banner,
    'nxt-grid': CardGrid,
    'nxt-button': Button,
    'nxt-instagram': Grid,
    'nxt-options': Options,
    'nxt-stat': StatisticCard,
  },
  data() {
    return {
      cards: [
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 0,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 1,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 2,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 3,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 4,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 5,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 6,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 7,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 8,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 9,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 10,
        },
        {
          image:
            'https://static.tildacdn.com/tild3336-6231-4463-b364-303232383463/noroot.png',
          heading: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          id: 11,
        },
      ],
      images: [
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 0,
        },
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 1,
        },
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 2,
        },
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 3,
        },
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 4,
        },
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 5,
        },
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 6,
        },
        {
          src:
            'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84346680_485380995429197_2768633197494545679_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=t1962d1vWUMAX8mJVjX&oh=fc9b509420d7f0ffb6c937a712ead264&oe=5EE194BD',
          alt: 'Instagram image',
          id: 7,
        },
      ],
      stats: [
        {
          id: 0,
          text:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          digit: '1 из 3',
          bar: '[-->      ]',
          organization: 'Левада-Центр 2018',
        },
        {
          id: 1,
          text: '2,6% Россиян имеют онкозаболевания.',
          digit: '3 700 000',
          bar: '[>                    ]',
          organization: 'Росстат 2018',
        },
        {
          id: 2,
          text:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          digit: '↑28%',
          bar: '[-->      ]',
          organization: 'МНИОИ Герцена 2018',
        },
        {
          id: 3,
          text:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          digit: '↓25%',
          bar: '[->     ]',
          organization:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
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

<style>
.container {
  max-width: 1320px;
  margin: 0 auto;
}
.videos {
  padding: 100px 0 50px;
}
.videos__banner {
  margin-top: 100px;
}
.stories {
  padding: 50px 0 50px;
}
.stories__grid {
  padding: 70px 0;
}
.stories__heading {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 400px;
}
.instagram {
  padding: 50px 0;
}
.instagram__banner {
  margin-bottom: 100px;
}
.send-story {
  background-color: #f7f7f7;
  padding: 100px 0;
}
.statistics {
  padding: 100px 0;
}
.statistics__container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40;
}
.about {
  background-color: #613a93;
  color: white;
  padding: 100px 0;
}
.about__heading {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  margin-bottom: 70px;
}
</style>
