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
  display: block;
  width: 100%;
  position: relative;
  padding-bottom: calc(0.52 * 100%);
  max-width: 867px;
}

.iframe__video {
  border: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

@media screen and (max-width: 768px) {
  .iframe {
    max-width: 580px;
    margin: 0 auto;
    padding-bottom: calc(0.436 * 100%);
  }
}

@media screen and (max-width: 320px) {
  .iframe {
    max-width: 290px;
    margin: 0;
    padding-bottom: calc(0.52 * 100%);
  }
}
</style>
