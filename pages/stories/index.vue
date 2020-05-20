<template>
  <container class="container">
    <section class="search container__search">
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

<style scoped></style>
