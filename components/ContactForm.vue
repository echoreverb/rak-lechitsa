<template>
  <div class="contact">
    <h2 class="contact__heading">Оставьте контакт для связи</h2>
    <p class="contact__text">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <form action="" class="contact__form" novalidate>
      <div class="contact__form-group">
        <label for="name" class="contact__label">Как Вас зовут?</label>
        <nxt-input
          class="contact__input"
          type="text"
          placeholder="Напишите тут"
          name="name"
          id="name"
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
};
</script>

<style scoped>
.contact {
  min-width: 920px;
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
  margin: 40px 0;
}
.contact__form-row {
  display: flex;
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
  margin-top: 60px;
}
.contact__buttons {
  display: flex;
}
.contact__link {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  align-self: center;
  margin-left: 30px;
}
.contact__link a {
  color: #666666;
}
</style>
