<template>
  <button class="button" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  width: 280px;
  height: 52px;
  background: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
}

.button:hover {
  cursor: pointer;
}
</style>
