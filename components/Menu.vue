<template>
  <nav class="menu">
    <slot></slot>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 500px) {
  .menu {
    flex-direction: column;
  }
}
</style>
