<template>
  <div>
    Stories page
  </div>
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
