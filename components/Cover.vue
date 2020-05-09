<template>
  <div class="cover">
    <h1 class="cover__title">#РАКЛЕЧИТСЯ</h1>
    <div class="cover__arrow"></div>
  </div>
</template>

<script>
export default {
  props: ['text', 'background'],
};
</script>

<style scoped>
.cover {
  position: relative;
  width: 100%;
  background: #613a93;
  padding: calc((100vh - 111px) / 2) 0;
}

.cover__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #ffffff;
}

.cover__arrow {
  width: 38px;
  height: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='15' viewBox='0 0 38 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13L1 1' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");

  position: absolute;
  bottom: 40px;
  right: calc(50% - 19px);
  cursor: pointer;
}
</style>
