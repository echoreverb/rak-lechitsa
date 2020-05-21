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
    <form
      action=""
      class="quiz__form"
      @submit.prevent="nextQuestion"
      novalidate
    >
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
            type="button"
            @click="prevQuestion"
          />
          <nxt-button
            class="quiz__button quiz__button_next"
            :text="!isLastQuestion ? 'Далее' : 'Отправить'"
            size="md"
            type="submit"
            @click="nextQuestion"
          />
        </div>
        <p v-if="isLastQuestion" class="quiz__link">
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
      inputValue: '',
      currentQuestion: 0,
      answers: [],
    };
  },
  computed: {
    questions() {
      return this.$store.getters['quiz/getQuestions'];
    },
    isLastQuestion() {
      return this.currentQuestion === this.questions.length - 1;
    },
  },
  methods: {
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion -= 1;
        this.inputValue = this.answers[this.currentQuestion];
      }
    },
    nextQuestion() {
      if (this.currentQuestion < 11) {
        if (this.inputValue) {
          this.answers[this.currentQuestion] = this.inputValue;
          this.inputValue = '';
          this.currentQuestion += 1;
        }
      } else {
        if (this.inputValue) {
          this.answers[this.currentQuestion] = this.inputValue;
          console.log(this.answers); //отправка данных на сервер
          this.togglePopUp();
        }
      }
    },
    togglePopUp() {
      this.$store.commit('popup/togglePopUp');
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
