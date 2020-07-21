<template>
  <div class="pagination">
    <p
      :class="
        active === 1
          ? 'pagination__text pagination__text_active'
          : 'pagination__text'
      "
      @click="setActive(1)"
    >
      Первая
    </p>
    <div
      class="pagination__arrow pagination__arrow_prev"
      @click="prevPage"
    ></div>
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
    <div
      class="pagination__arrow pagination__arrow_next"
      @click="nextPage"
    ></div>
    <p
      :class="
        active === pagesCount
          ? 'pagination__text pagination__text_active'
          : 'pagination__text'
      "
      @click="setActive(pagesCount)"
    >
      Последняя
    </p>
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
    nextPage() {
      this.active < this.pagesCount
        ? (this.active = this.active + 1)
        : (this.active = this.active);
      this.setActive(this.active);
    },
    prevPage() {
      this.active != 1
        ? (this.active = this.active - 1)
        : (this.active = this.active);
      this.setActive(this.active);
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
  align-items: center;
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

.pagination__arrow {
  width: 58px;
  height: 58px;
  cursor: pointer;
  margin-right: 10px;
}

.pagination__arrow:last-of-type {
  margin-right: 0;
}

.pagination__arrow_prev {
  background: url(../../static/images/arrow_left.svg) no-repeat center;
}

.pagination__arrow_next {
  background: url(../../static/images/arrow_right.svg) no-repeat center;
}

.pagination__text {
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  cursor: pointer;
  transition: color 0.3s linear;
}

.pagination__text:hover {
  color: #181818;
}

.pagination__text_active {
  color: #181818;
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

  .pagination__arrow {
    width: 50px;
    height: 50px;
  }

  .pagination__text {
    font-size: 15px;
    line-height: 18px;
  }
}

@media (max-width: 425px) {
  .pagination {
    justify-content: left;
    overflow: auto;
    position: relative;
  }
  .pagination__item {
    flex-shrink: 0;
  }

  .pagination__text {
    display: none;
  }
}
</style>
