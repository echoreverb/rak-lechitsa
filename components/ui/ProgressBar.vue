<template>
  <div class="container">
    <div
      v-if="barType === 'single'"
      :class="`progress-bar progress-bar_${barType}`"
    >
      <div class="progress-bar__fill" :style="style"></div>
    </div>

    <div
      v-if="barType === 'double'"
      :class="`progress-bar progress-bar_${barType}`"
    >
      <div class="progress-bar-previous">
        <div class="progress-bar-previous__fill" :style="previousStyle"></div>
      </div>
      <div class="progress-bar-current">
        <div class="progress-bar-current__fill" :style="currentStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    barType: String,
    value: Number,
    previousValue: Number,
    currentValue: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
    previousStyle() {
      return `width: ${(this.previousValue / this.maxValue) * 100}%;`;
    },
    currentStyle() {
      return `width: ${(this.currentValue / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.progress-bar {
  height: 100%;
  position: relative;
}

.progress-bar_single {
  width: 100%;
  background-color: #f4f4f4;
}

.progress-bar_double {
  width: 80%;
}

.progress-bar__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #613a93;
}

.progress-bar-previous {
  width: 100%;
  height: 50%;
  position: relative;
}

.progress-bar-previous__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #f4f4f4;
}

.progress-bar-current {
  width: 100%;
  height: 50%;
  position: relative;
}

.progress-bar-current__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #613a93;
}
</style>
