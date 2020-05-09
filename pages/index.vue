<template>
  <div class="root">
    <nxt-cover />
    <div class="container">
      <section class="videos">
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
      </section>
      <section class="stories">
        <h2 class="stories__heading">Истории неизлечимых привычек</h2>
        <nxt-grid class="stories__grid" :cards="cards" />
      </section>
    </div>
  </div>
</template>

<script>
import Cover from '@/components/Cover';
import Columns from '@/components/Columns';
import Banner from '@/components/Banner';
import CardGrid from '@/components/CardGrid';
export default {
  components: {
    'nxt-cover': Cover,
    'nxt-columns': Columns,
    'nxt-banner': Banner,
    'nxt-grid': CardGrid,
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
</style>
