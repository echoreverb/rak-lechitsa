<template>
  <div class="banner banner_grey">
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

.banner_grey {
  min-height: 82px;
  background: #fbfbfb;
  font-size: 16px;
  line-height: 20px;
  color: black;
}
</style>
