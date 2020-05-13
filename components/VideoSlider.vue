<template>
  <swiper ref="videoySwiper" class="swiper" :options="swiperOption">
    <swiper-slide v-for="video in videos" :key="video.id">
      <nxt-iframe :src="video.src" />
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
  props: ['videos', 'prev', 'next'],
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.video__button_next',
          prevEl: '.video__button_prev',
        },
        spaceBetween: 10,
        loop: true,
      },
    };
  },
};
</script>

<style scoped></style>
