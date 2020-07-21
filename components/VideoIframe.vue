<template>
  <div class="iframe">
    <iframe
      class="iframe__video"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      :src="playAuto"
    ></iframe>
    <img v-if="coverShown" :src="cover" class="cover" @click="noCover" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    cover: String,
  },
  computed: {
    playAuto() {
      if (this.coverShown) return this.src + '?autoplay=0';
      return this.src + '?autoplay=1';
    },
  },
  methods: {
    noCover() {
      this.coverShown = false;
    },
  },
  data() {
    return {
      coverShown: true,
    };
  },
};
</script>

<style scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  cursor: pointer;
}

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

@media screen and (max-width: 400px) {
  .iframe {
    max-width: 100%;
    margin: 0;
    padding-bottom: calc(0.52 * 100%);
  }
}
</style>
