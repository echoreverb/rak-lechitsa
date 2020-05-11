<template>
  <div class="iframe">
    <iframe
      class="iframe__video"
      src="https://www.youtube.com/embed/coOppM34GtI"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.iframe {
  width: 100%;
  position: relative;
  padding-bottom: calc(0.52 * 100%);
  /* max-width: 867px; */
}

.iframe__video {
  border: 0;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
