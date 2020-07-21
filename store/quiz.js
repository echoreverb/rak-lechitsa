export const state = () => ({
  questions: [
    {
      heading: 'Шаг 1 из 13',
      question: ['Как вас зовут?', ''],
      type: 'text',
      key: 'name',
      id: 0,
    },
    {
      heading: 'Шаг 2 из 13',
      question: [
        'Было ли у вас онкологическое заболевание?',
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
      ],
      type: 'text',
      key: 'cancerStory',
      id: 1,
    },
    {
      heading: 'Шаг 3 из 13',
      question: [
        'Какие занятия приносят Вам наибольшее удовольствие?',
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
      ],
      type: 'text',
      key: 'pleasureActivities',
      id: 2,
    },
    {
      heading: 'Шаг 4 из 13',
      question: [
        'На что, кроме семьи, быта и работы, Вы тратите свое время?',
        '',
      ],
      type: 'text',
      key: 'commonActivities',
      id: 3,
    },
    {
      heading: 'Шаг 5 из 13',
      question: [
        'Какие сильные увлечения у Вас есть?',
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
      ],
      type: 'text',
      key: 'hobbies',
      id: 4,
    },
    {
      heading: 'Шаг 6 из 13',
      question: [
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
        '',
      ],
      type: 'text',
      key: 'habits',
      id: 5,
    },
    {
      heading: 'Шаг 7 из 13',
      question: [
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
        'Кроме необходимых, таких, как чистка зубов.',
      ],
      type: 'text',
      key: 'regularActivities',
      id: 6,
    },
    {
      heading: 'Шаг 8 из 13',
      question: [
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
        '',
      ],
      type: 'text',
      key: 'aloneActivities',
      id: 7,
    },
    {
      heading: 'Шаг 9 из 13',
      question: ['Что Вас успокаивает/умиротворяет лучше всего?', ''],
      type: 'text',
      key: 'calmDownActivities',
      id: 8,
    },
    {
      heading: 'Шаг 10 из 13',
      question: [
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
        '',
      ],
      type: 'text',
      key: 'events',
      id: 9,
    },
    {
      heading: 'Шаг 11 из 13',
      question: ['Как вы обычно проводите выходные?', ''],
      type: 'text',
      key: 'weekends',
      id: 10,
    },
    {
      heading: 'Шаг 12 из 13',
      question: [
        'Телефон для связи.',
        ' После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
      ],
      type: 'tel',
      key: 'phone',
      id: 11,
    },
    {
      heading: 'Шаг 13 из 13',
      question: [
        'Почта  для связи.',
        'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
      ],
      type: 'email',
      key: 'email',
      id: 12,
    },
  ],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
  addAnswer(state, { index, value }) {
    console.log(state.answers);
    return (state.answers[index] = value);
  },
};

export const getters = {
  getQuestions(state) {
    return state.questions;
  },
};
