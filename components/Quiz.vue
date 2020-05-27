<template>
  <div class="quiz">
    <h2 class="quiz__heading">
      {{
        isSended
          ? 'Спасибо что приняли участие!'
          : questions[currentQuestion].heading
      }}
    </h2>
    <p class="quiz__text" v-if="!isSended">
      <span class="quiz__question quiz__question_bold">{{
        questions[currentQuestion].question[0]
      }}</span>
      <span class="quiz__question">{{
        questions[currentQuestion].question[1]
      }}</span>
    </p>
    <form
      v-if="!isSended"
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
    <nxt-button
      v-if="isSended"
      class="quiz__button quiz__button_close"
      text="Закрыть"
      size="md"
      type="submit"
      @click="togglePopUp"
    />
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
      isSended: false,
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
          this.isSended = true;
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
  width: 840px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  min-height: 72px;
  max-width: 840px;
  margin-bottom: 86px;
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
.quiz__button_close {
  display: block;
  max-width: 230px;
  margin: 0 auto;
}
.quiz__link {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  align-self: center;
  margin-left: 30px;
}
.quiz__link a {
  color: #666;
}

@media screen and (max-width: 1280px) {
  .quiz {
    width: 720px;
    min-height: 440px;
  }
  .quiz__heading {
    font-size: 28px;
    line-height: 32px;
  }
  .quiz__text {
    font-size: 16px;
    line-height: 22px;
    min-height: 60px;
    max-width: 720px;
    margin-bottom: 60px;
  }

  .quiz__input {
    margin-bottom: 170px;
  }
}

@media screen and (max-width: 840px) {
  .quiz {
    width: 650px;
  }
}

@media screen and (max-width: 768px) {
  .quiz {
    width: 500px;
  }
  .quiz__heading {
    font-size: 26px;
    line-height: 30px;
  }
  .quiz__text {
    font-size: 15px;
    line-height: 19px;
    max-width: 500px;
  }
}

@media screen and (max-width: 600px) {
  .quiz {
    width: 370px;
  }
}

@media screen and (max-width: 450px) {
  .quiz {
    width: 260px;
    min-height: 490px;
  }
  .quiz__heading {
    font-size: 18px;
    line-height: 21px;
  }
  .quiz__text {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }

  .quiz__input {
    margin-bottom: 257px;
  }

  .quiz__button_prev {
    margin-right: 15px;
  }

  .quiz__button_next {
    padding: 12px 70px;
  }
}
</style>
