<template>
  <div class="iframe">
    <iframe
      class="iframe__video"
      :src="src"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['src'],
};
</script>

<style scoped>
.iframe {
  max-width: 867px;
  height: 450px;
  /* исстрадалась с резиновой высотой, пока решила оставить так  */
}

.iframe__video {
  border: 0;
  width: 100%;
  height: 100%;
}
</style>
