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
  margin: 76px 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
