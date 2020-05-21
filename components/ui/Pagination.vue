<template>
  <div class="pagination">
    <div
      v-for="index in pagesCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        { 'pagination__item_is-active': index === active },
      ]"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allItems: Number,
    itemsOnPage: Number,
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.allItems / this.itemsOnPage);
    },
  },

  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('paginationClick', index);
    },
  },
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 102px;
}
.pagination__item {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  color: #181818;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.pagination__item:hover {
  background: #f8f8f8;
}

.pagination__item:last-of-type {
  margin-right: 0;
}

.pagination__item_is-active {
  color: #000;
  background: #f4f4f4;
}

@media (max-width: 1280px) {
  .pagination__item {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1024px) {
  .pagination__item {
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (max-width: 425px) {
  .pagination {
    justify-content: left;
    overflow: auto;
  }
  .pagination__item {
    flex-shrink: 0;
  }
}
</style>
