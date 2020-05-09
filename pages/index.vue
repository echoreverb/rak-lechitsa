<template>
  <div>
    <main-header />
    <section class="cover">
      <width-adjust-container />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header';
import WidthAdjustContainer from '@/components/WidthAdjustContainer';

export default {
  components: {
    'main-header': Header,
    'width-adjust-container': WidthAdjustContainer,
  },
};
</script>

<style></style>
