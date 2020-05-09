<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  width: 100%;
  min-height: 86px;
  background-color: #613a93;
  border: 1px solid #000000;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
