<template>
  <div class="statistics-card">
    <p class="statistics-card__text">{{ data.text }}</p>
    <div class="statistics-card__bar-container">
      <progress-bar
        v-if="data.barType === '1'"
        :value="data.value"
        :max-value="data.maxValue"
      />
      <progress-bar-double
        v-if="data.barType === '2'"
        :previous-value="data.previousValue"
        :current-value="data.currentValue"
        :max-value="data.maxValue"
      />
    </div>
    <p class="statistics-card__digits">{{ data.digits }}</p>
    <p class="statistics-card__source">{{ data.source }}</p>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
import ProgressBarDouble from '@/components/ui/ProgressBarDouble.vue';
export default {
  props: ['data'],
  components: {
    'progress-bar': ProgressBar,
    'progress-bar-double': ProgressBarDouble,
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
</style>
