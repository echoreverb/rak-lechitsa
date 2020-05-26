<template>
  <div>
    <nav class="menu">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .menu {
    font-size: 16px;
    line-height: 24px;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 425px) {
  .menu {
    flex-direction: column;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
