<template>
  <div class="contact">
    <h2 class="contact__heading">Оставьте контакт для связи</h2>
    <p class="contact__text">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <form action="" class="contact__form" novalidate @submit.prevent="sendData">
      <div class="contact__form-group">
        <label for="name" class="contact__label">Как Вас зовут?</label>
        <nxt-input
          class="contact__input"
          type="text"
          placeholder="Напишите тут"
          name="name"
          id="name"
          v-model="name"
          required="required"
        />
      </div>
      <div class="contact__form-row">
        <div class="contact__form-group">
          <label for="email" class="contact__label">Электронная почта</label>
          <nxt-input
            class="contact__input"
            type="email"
            placeholder="pochta@example.com"
            name="email"
            id="email"
            v-model="email"
            required="required"
          />
        </div>
        <div class="contact__form-group">
          <label for="phone" class="contact__label">Телефон</label>
          <nxt-input
            class="contact__input"
            type="tel"
            placeholder="+7 000 000 00 00"
            name="phone"
            id="phone"
            v-model="phone"
            required="required"
          />
        </div>
      </div>
      <div class="contact__form-group">
        <label for="contactWay" class="contact__label"
          >Напишите, если есть предпочтительный способ связи и удобное
          время</label
        >
        <nxt-input
          class="contact__input"
          type="text"
          placeholder="Телефон / почта и удобное время"
          name="contactWay"
          id="contactWay"
          v-model="contactWay"
          required="required"
        />
      </div>
      <div class="contact__controls">
        <nxt-button
          class="contact__button contact__button_next"
          text="Отправить"
          size="md"
          type="submit"
        />
        <p class="contact__link">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link to="/policy" target="_blank"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
export default {
  components: {
    'nxt-input': Input,
    'nxt-button': Button,
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      contactWay: '',
    };
  },
  methods: {
    togglePopUp() {
      this.$store.commit('popup/togglePopUp');
    },
    sendData() {
      console.log({
        fullName: this.name,
        email: this.email,
        phone: this.phone,
        preferred: this.contactWay,
      });
      this.togglePopUp();
    },
  },
};
</script>

<style scoped>
.contact {
  min-width: 840px;
}
.contact__heading {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 40px;
}
.contact__text {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 50px;
  font-weight: 500;
}
.contact__label {
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 40px;
}

.contact__input {
  margin-bottom: 40px;
  padding-top: 0;
  width: 100%;
  max-width: 840px;
}

.contact__form-group {
  min-width: 400px;
  max-width: 840px;
}

.contact__form-row {
  display: flex;
  justify-content: space-between;
}

.contact__form {
  display: flex;
  flex-direction: column;
}
.contact__button_prev {
  margin-right: 30px;
}
.contact__controls {
  display: flex;
}
.contact__buttons {
  display: flex;
}
.contact__link {
  font-weight: normal;
  max-width: 378px;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  align-self: center;
  margin-left: 30px;
}
.contact__link a {
  color: #666;
}

@media screen and (max-width: 1280px) {
  .contact {
    min-width: 720px;
  }
  .contact__heading {
    font-size: 28px;
    line-height: 32px;
  }
  .contact__text {
    font-size: 16px;
    line-height: 22px;
  }
  .contact__label {
    font-size: 16px;
    line-height: 22px;
  }

  .contact__input {
    margin-bottom: 40px;
    padding-top: 0;
    width: 100%;
    max-width: 720px;
  }

  .contact__form-group {
    min-width: 337px;
    max-width: 720px;
  }
}

@media screen and (max-width: 860px) {
  .contact {
    min-width: 560px;
  }

  .contact__input {
    margin-bottom: 40px;
    padding-top: 0;
    width: 100%;
    max-width: 560px;
  }

  .contact__form-group {
    min-width: 260px;
    max-width: 560px;
  }
}

@media screen and (max-width: 768px) {
  .contact {
    min-width: 500px;
  }
  .contact__heading {
    font-size: 26px;
    line-height: 30px;
  }
  .contact__text {
    font-size: 15px;
    line-height: 19px;
  }
  .contact__label {
    font-size: 15px;
    line-height: 19px;
  }

  .contact__input {
    max-width: 500px;
  }

  .contact__form-group {
    min-width: 230px;
    max-width: 500px;
  }

  .contact__button {
    max-width: 200px;
    max-height: 46px;
  }
}

@media screen and (max-width: 600px) {
  .contact {
    min-width: 400px;
  }

  .contact__input {
    max-width: 400px;
  }

  .contact__form-group {
    min-width: 180px;
    max-width: 400px;
  }

  .contact__button {
    max-width: 180px;
    max-height: 46px;
  }
}

@media screen and (max-width: 500px) {
  .contact {
    min-width: 260px;
  }
  .contact__heading {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 35px;
    max-width: 185px;
  }
  .contact__text {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 30px;
    letter-spacing: -0.8px;
  }
  .contact__label {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  .contact__input {
    margin-bottom: 30px;
    padding-top: 0;
    width: 100%;
  }

  .contact__form-group {
    min-width: 260px;
  }

  .contact__form-row {
    flex-direction: column;
  }

  .contact__form {
    flex-direction: column;
  }
  .contact__button_prev {
    margin-right: 0px;
  }
  .contact__controls {
    flex-direction: column;
  }
  .contact__link {
    max-width: 260px;
    font-size: 11px;
    line-height: 13px;
    margin-left: 0px;
    margin-top: 10px;
  }
  .contact__button {
    max-width: 100%;
    max-height: 40px;
  }
}
</style>
