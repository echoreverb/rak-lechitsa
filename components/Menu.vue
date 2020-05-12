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
</style>
