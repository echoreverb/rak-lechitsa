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
    justify-content: left;
  }
}
</style>
