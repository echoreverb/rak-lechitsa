<template>
  <button
    :class="['button']"
    @click="$emit('storieClick', source.id, $event.target)"
  >
    <slot>{{ +source.id + 1 }}</slot>
  </button>
</template>

<script>
export default {
  props: ['source'],
};
</script>

<style scoped>
.button {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  color: #181818;
  cursor: pointer;
}
.button:focus {
  outline: none;
}

.button_is-active {
  color: #000;
  background: #f4f4f4;
}

.button:hover {
  background: #f8f8f8;
}
</style>
