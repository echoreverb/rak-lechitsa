export const state = () => ({
  popupShown: false,
  quizShown: false,
  contactShown: false,
  socialShown: false,
});

// change state from here

export const mutations = {
  togglePopUp(state) {
    state.popupShown = !state.popupShown;
    if (!state.popupShown) {
      state.quizShown = false;
      state.contactShown = false;
      state.socialShown = false;
    }
  },
  toggleQuiz(state) {
    state.popupShown = !state.popupShown && !state.quizShown;
    state.quizShown = state.popupShown && !state.quizShown;
  },
  toggleContact(state) {
    state.popupShown = !state.popupShown && !state.contactShown;
    state.contactShown = state.popupShown && !state.contactShown;
  },
  toggleSocial(state) {
    state.popupShown = !state.popupShown && !state.socialShown;
    state.socialShown = state.popupShown && !state.socialShown;
  },
};

// get data about my state
export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
  getQuizShown(state) {
    return state.quizShown;
  },
  getContactShown(state) {
    return state.contactShown;
  },
  getSocialShown(state) {
    return state.socialShown;
  },
};
