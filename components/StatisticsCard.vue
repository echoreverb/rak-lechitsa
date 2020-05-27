<template>
  <div class="statistics-card">
    <p class="statistics-card__text">{{ data.description }}</p>
    <div class="statistics-card__bar-container">
      <progress-bar
        :value="currentValue"
        :max-value="data.maxValue"
        :previous-value="previousValue"
        :bar-type="barType"
      />
    </div>
    <p class="statistics-card__digits">{{ data.summary }}</p>
    <p class="statistics-card__source">{{ data.source }}</p>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
export default {
  props: {
    data: Object,
  },
  components: {
    'progress-bar': ProgressBar,
  },
  computed: {
    barType() {
      let barType = 'single';
      if (this.data.oldValue === null) barType = 'double';
      return barType;
    },
    previousValue() {
      if (this.data.id === 3) return 74;
      if (this.data.id === 4) return 100;
    },
    currentValue() {
      if (this.data.id === 3) return 100;
      if (this.data.id === 4) return 75;
      else return this.data.currentValue;
    },
  },
};
</script>

<style scoped>
.statistics-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: space-between;
  width: 100%;
  min-height: 300px;
  max-width: 300px;
  border: 1px solid #efefef;
  padding: 20px;
}

.statistics-card__text {
  align-self: flex-start;
  font-size: 12px;
  line-height: 16px;
}

.statistics-card__bar-container {
  width: 100%;
  height: 40px;
  margin-top: auto;
}

.statistics-card__digits {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin-top: 20px;
}

.statistics-card__source {
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
  margin-top: 20px;
}

@media screen and (max-width: 1280px) {
  .statistics-card {
    min-height: 265px;
    max-width: 265px;
    padding: 18px;
  }

  .statistics-card__bar-container {
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .statistics-card {
    min-height: 208px;
    max-width: 208px;
    padding: 10px;
  }

  .statistics-card__bar-container {
    height: 28px;
  }

  .statistics-card__text {
    font-size: 10px;
    line-height: 14px;
  }

  .statistics-card__digits {
    font-size: 26px;
    line-height: 30px;
    margin-top: 10px;
  }
  .statistics-card__source {
    font-size: 10px;
    line-height: 14px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  .statistics-card {
    min-height: 216px;
    min-width: 216px;
  }
}
</style>
