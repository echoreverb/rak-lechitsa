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
  margin: 70px 0 100px;
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
  transition: 0.3s ease;
}

.banner_grey:hover {
  background: #f8f8f8;
}
</style>
