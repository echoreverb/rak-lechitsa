<template>
  <div :class="{ 'error-page': $route.path === '/error' }">
    <mobile-menu v-if="isMobileMenuOpened" />
    <rak-header />
    <nuxt />
    <rak-footer />
    <pop-up v-if="popupShown" :theme="'dark'">
      <quiz v-if="quizShown" />
      <contact-form v-if="contactShown" />
      <social-buttons v-if="socialShown" />
    </pop-up>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopUp from '@/components/ui/PopUp';
import Quiz from '@/components/Quiz';
import MobileMenu from '@/components/MobileMenu';
import ContactForm from '@/components/ContactForm';
import SocialButtons from '@/components/SocialButtons';
export default {
  components: {
    'rak-header': Header,
    'rak-footer': Footer,
    'pop-up': PopUp,
    quiz: Quiz,
    'mobile-menu': MobileMenu,
    'contact-form': ContactForm,
    'social-buttons': SocialButtons,
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    quizShown() {
      return this.$store.getters['popup/getQuizShown'];
    },
    contactShown() {
      return this.$store.getters['popup/getContactShown'];
    },
    socialShown() {
      return this.$store.getters['popup/getSocialShown'];
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.error-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
