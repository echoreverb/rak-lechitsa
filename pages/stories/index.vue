<template>
  <container class="container">
    <section class="search container__search" ref="start">
      <h1 class="search__title">Истории неизлечимых привычек</h1>
      <form class="search__form">
        <stories-input class="search__input" />
        <nxt-button :text="'Поиск'" class="search__button"></nxt-button>
      </form>
    </section>
    <section class="stories">
      <div class="stories__grid-container">
        <card
          v-for="storie in getPieceOfStories"
          :key="storie.id"
          :source="storie"
        ></card>
      </div>
      <pagination
        :allItems="allStories.length"
        :itemsOnPage="itemsOnPage"
        @paginationClick="changeStartCard"
      ></pagination>
    </section>
  </container>
</template>

<script>
import WidthAdjustContainer from '@/components/WidthAdjustContainer';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/Card';
import Pagination from '@/components/ui/Pagination';
export default {
  components: {
    container: WidthAdjustContainer,
    'stories-input': Input,
    'nxt-button': Button,
    card: Card,
    pagination: Pagination,
  },
  methods: {
    changeStartCard(index) {
      this.sectionStartFrom = (index - 1) * this.itemsOnPage;
      this.$refs['start'].scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
  computed: {
    allStories() {
      return this.$store.getters['stories/getStories'];
    },
    getPieceOfStories() {
      if (process.browser) {
        let copy = this.allStories.slice(0);
        // console.log(window.innerWidth)
        let stories = [];
        if (window.innerWidth <= 768) {
          this.itemsOnPage = 12;
        }
        if (window.innerWidth <= 425) {
          this.itemsOnPage = 9;
        }
        stories = copy.splice(this.sectionStartFrom, this.itemsOnPage);
        return stories;
      }
    },
  },
  data() {
    return {
      itemsOnPage: 16,
      sectionStartFrom: '0',
    };
  },
};
</script>

<style scoped>
.container__search {
  margin: 100px 0 70px;
}

.search__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  margin-bottom: 60px;
}

.search__form {
  display: flex;
  justify-content: space-between;
}

.search__button {
  padding: 16.5px 44px;
  width: 226px;
  background-color: #613a93;
  color: #fff;
}

.search__button:hover {
  opacity: 0.9;
}

.search__input {
  width: calc(100% - 246px);
  border: 1px solid #e8e8e8;
  padding-left: 10px;
}

.stories__grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  margin: 0 0 162px;
}

@media (max-width: 1280px) {
  .search__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    max-width: 413px;
    margin-bottom: 50px;
  }
  .container__search {
    margin: 100px 0 60px;
  }

  .stories__grid-container {
    grid-row-gap: 60px;
    margin: 0 0 149px;
  }

  .search__button {
    padding: 14.5px 44px;
    width: 226px;
    background-color: #613a93;
    color: #fff;
  }
}

@media (max-width: 1024px) {
  .search__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
    margin-bottom: 40px;
  }

  .search__button {
    padding: 13.5px 44px;
    width: 208px;
  }

  .search__input {
    width: calc(100% - 228px);
  }

  .stories__grid-container {
    grid-column-gap: 30px;
    grid-row-gap: 65px;
    margin: 0 0 125px;
  }

  .container__search {
    margin: 100px 0 47px;
  }
}

@media (max-width: 768px) {
  .stories__grid-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 58px;
    margin: 0 0 150px;
  }

  .search__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 380px;
    text-align: center;
    margin: 0 auto 49px;
  }

  .container__search {
    margin: 74px 0 62px;
  }

  .search__button {
    width: 27vw;
    padding: 16.5px 0;
  }

  .search__input {
    width: calc(100% - 28vw);
  }
}

@media (max-width: 540px) {
  .search__button {
    width: 46px;
    height: 46px;
    color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5.91304' cy='5.91304' r='5.41304' stroke='white'/%3E%3Cline x1='10.0918' y1='10.0813' x2='16.3527' y2='16.3421' stroke='white'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }

  .search__input {
    width: calc(100% - 52px);
  }
}

@media (max-width: 425px) {
  .search__title {
    font-size: 18px;
    line-height: 21px;
    max-width: 290px;
    text-align: left;
    margin: 0 0 49px;
  }

  .stories__grid-container {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    margin: 0 0 50px;
    justify-content: center;
  }

  .search__title {
    margin: 0 0 40px;
  }

  .container__search {
    margin: 74px 0 30px;
  }
}
</style>
