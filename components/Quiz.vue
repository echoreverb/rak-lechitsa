<template>
  <div class="quiz">
    <h2 class="quiz__heading">{{ questions[currentQuestion].heading }}</h2>
    <p class="quiz__text">
      <span class="quiz__question quiz__question_bold">{{
        questions[currentQuestion].question[0]
      }}</span>
      <span class="quiz__question">{{
        questions[currentQuestion].question[1]
      }}</span>
    </p>
    <form action="" class="quiz__form">
      <nxt-input
        class="quiz__input"
        type="text"
        placeholder="Напишите тут"
        name="quizInput"
        required="required"
        v-model="inputValue"
      />
      <div class="quiz__controls">
        <div class="quiz__buttons">
          <nxt-button
            class="quiz__button quiz__button_prev"
            text="Назад"
            size="xs"
            @click="prevQuestion"
          />
          <nxt-button
            class="quiz__button quiz__button_next"
            text="Далее"
            size="md"
            type="button"
            @click="nextQuestion"
          />
        </div>
        <p class="quiz__link">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link to="/policy">обработку персональных данных</nuxt-link>
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
      inputValue: '',
      currentQuestion: 0,
      questions: [
        {
          heading: 'Шаг 1 из 12',
          question: ['Как вас зовут?', ''],
          id: 0,
        },
        {
          heading: 'Шаг 2 из 12',
          question: [
            'Было ли у вас онкологическое заболевание?',
            'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
          ],
          id: 1,
        },
        {
          heading: 'Шаг 3 из 12',
          question: [
            'Какие занятия приносят Вам наибольшее удовольствие?',
            'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
          ],
          id: 2,
        },
        {
          heading: 'Шаг 4 из 12',
          question: [
            'На что, кроме семьи, быта и работы, Вы тратите свое время?',
            '',
          ],
          id: 3,
        },
        {
          heading: 'Шаг 5 из 12',
          question: [
            'Какие сильные увлечения у Вас есть?',
            'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
          ],
          id: 4,
        },
        {
          heading: 'Шаг 6 из 12',
          question: [
            'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
            '',
          ],
          id: 5,
        },
        {
          heading: 'Шаг 7 из 12',
          question: [
            'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
            'Кроме необходимых, таких, как чистка зубов.',
          ],
          id: 6,
        },
        {
          heading: 'Шаг 8 из 12',
          question: [
            'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
            '',
          ],
          id: 7,
        },
        {
          heading: 'Шаг 9 из 12',
          question: ['Что Вас успокаивает/умиротворяет лучше всего?', ''],
          id: 8,
        },
        {
          heading: 'Шаг 10 из 12',
          question: [
            'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
            '',
          ],
          id: 9,
        },
        {
          heading: 'Шаг 11 из 12',
          question: ['Как вы обычно проводите выходные?', ''],
          id: 10,
        },
        {
          heading: 'Шаг 12 из 12',
          question: [
            'Почта или телефон для связи.',
            'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
          ],
          id: 11,
        },
      ],
    };
  },
  methods: {
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion -= 1;
      }
    },

    nextQuestion() {
      if (this.currentQuestion < 11) {
        this.currentQuestion += 1;
      }
    },
  },
};
</script>

<style scoped>
.quiz {
  min-width: 920px;
}
.quiz__heading {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 40px;
}
.quiz__text {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 110px;
}
.quiz__question_bold {
  font-weight: 500;
}
.quiz__input {
  margin-bottom: 200px;
}
.quiz__form {
  display: flex;
  flex-direction: column;
}
.quiz__button_prev {
  margin-right: 30px;
}
.quiz__controls {
  display: flex;
}
.quiz__buttons {
  display: flex;
}
.quiz__link {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  align-self: center;
  margin-left: 30px;
}
.quiz__link a {
  color: #666666;
}
</style>
