<template>
  <div class="progress-bar-double">
    <div class="progress-bar-previous">
      <div class="progress-bar-previous__fill" :style="previousStyle"></div>
    </div>
    <div class="progress-bar-current">
      <div class="progress-bar-current__fill" :style="currentStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previousValue: Number,
    currentValue: Number,
    maxValue: Number,
  },
  computed: {
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
.progress-bar-double {
  /* max-width: 260px;
  max-height: 40px; */
  width: 80%;
  height: 100%;
  position: relative;
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
