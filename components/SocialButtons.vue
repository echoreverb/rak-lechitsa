<template>
  <div class="social-buttons">
    <h2 class="social-buttons__heading">Поделитесь</h2>
    <ul class="social-buttons__links">
      <li class="social-buttons__item"></li>
      <li>
        <a
          :href="instagramUrl"
          class="social-buttons__link social-buttons__link_facebook"
        ></a>
      </li>
      <li class="social-buttons__item"></li>
      <li>
        <a
          :href="twitterUrl"
          class="social-buttons__link social-buttons__link_twitter"
        ></a>
      </li>
      <li class="social-buttons__item"></li>
      <li>
        <a
          :href="vkUrl"
          class="social-buttons__link social-buttons__link_vk"
        ></a>
      </li>
      <li class="social-buttons__item"></li>
      <li>
        <a
          :href="odnoklassnikiUrl"
          class="social-buttons__link social-buttons__link_ok"
        ></a>
      </li>
      <li class="social-buttons__item"></li>
      <li>
        <a
          :href="instagramUrl"
          class="social-buttons__link social-buttons__link_instagram"
        ></a>
      </li>
      <li class="social-buttons__item"></li>
      <li>
        <a
          :href="youtubeUrl"
          class="social-buttons__link social-buttons__link_youtube"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instagramUrl: process.env.instagramUrl,
      youtubeUrl:
        'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
      facebookUrl: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
        window.location.href
      )}&title=${document.querySelector('title').innerText}`,
      vkUrl: `https://vk.com/share.php?url=${encodeURI(
        window.location.href
      )}&title=${document.querySelector('title').innerText}`,
      odnoklassnikiUrl: `https://connect.ok.ru/offer?url=${encodeURI(
        window.location.href
      )}&amp;title=${document.querySelector('title').innerText}`,
      twitterUrl: `https://twitter.com/intent/tweet?text=${
        document.querySelector('title').innerText
      }&url=${encodeURI(window.location.href)}`,
    };
  },
};
</script>

<style scoped>
.social-buttons {
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-buttons__heading {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 100px;
}
.social-buttons__links {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 80px;
}
.social-buttons__link {
  display: block;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  width: 48px;
  height: 48px;
  transition: ease 0.3s;
}
.social-buttons__link:hover {
  opacity: 0.5;
}
.social-buttons__link_facebook {
  background-image: url('/images/social/fb.svg');
}
.social-buttons__link_twitter {
  background-image: url('/images/social/twitter.svg');
}
.social-buttons__link_vk {
  background-image: url('/images/social/vk.svg');
}
.social-buttons__link_ok {
  background-image: url('/images/social/ok.svg');
}
.social-buttons__link_instagram {
  background-image: url('/images/social/instagram.svg');
}
.social-buttons__link_youtube {
  background-image: url('/images/social/youtube.svg');
}

@media screen and (max-width: 1280px) {
  .social-buttons {
    width: 720px;
  }

  .social-buttons__links {
    width: 388px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 840px) {
  .social-buttons {
    width: 500px;
  }
}

@media screen and (max-width: 600px) {
  .social-buttons {
    width: 360px;
  }
}

@media screen and (max-width: 450px) {
  .social-buttons {
    width: 260px;
  }

  .social-buttons__links {
    width: 282px;
    margin-bottom: 45px;
  }

  .social-buttons__heading {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 60px;
  }

  .social-buttons__link {
    width: 35px;
    height: 35px;
  }
}
</style>
