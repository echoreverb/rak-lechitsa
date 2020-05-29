<template>
  <swiper ref="videoySwiper" class="swiper swiper-mix" :options="swiperOption">
    <swiper-slide v-for="video in videosWithCovers" :key="video.id">
      <nxt-iframe :src="video.url" :cover="video.cover" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VideoIframe from '@/components/VideoIframe';

export default {
  name: 'video-slider',
  title: 'Navigation',
  components: {
    Swiper,
    SwiperSlide,
    'nxt-iframe': VideoIframe,
  },
  props: {
    videos: Array,
    covers: Array,
  },
  computed: {
    videosWithCovers() {
      const videoArr = this.videos;
      const coversArr = this.covers;
      return videoArr.map(function(item, ind) {
        let itemNew = item;
        itemNew.cover = coversArr[ind].url;
        return itemNew;
      });
    },
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.slider-button_next',
          prevEl: '.slider-button_previous',
        },
        spaceBetween: 10,
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
.swiper-mix {
  /* slider fix */
  width: 100%;
  height: 100%;
}
</style>
