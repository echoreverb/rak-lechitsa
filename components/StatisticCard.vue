<template>
  <div class="statistic-card">
    <p class="statistic-card__text">
      {{ text }}
    </p>
    <div class="statistic-card__bar">
      {{ bar }}
      <!-- TODO-->
    </div>
    <p class="statistic-card__digit">{{ digit }}</p>
    <p class="statistic-card__organization">{{ organization }}</p>
  </div>
</template>

<script>
export default {
  props: ['text', 'digit', 'organization', 'bar'],
};
</script>

<style scoped>
.statistic-card {
  padding: 20px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
}
.statistic-card__text {
  font-size: 12px;
  line-height: 16px;
}
.statistic-card__bar {
}
.statistic-card__digit {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
}
.statistic-card__organization {
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
}
</style>
