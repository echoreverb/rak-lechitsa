export const state = () => ({
  stories: [],
  currentStory: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStories(state) {
    try {
      const stories = await this.$axios.$get(`${process.env.baseUrl}/stories`);
      state.commit('setState', {
        name: 'stories',
        value: stories,
      });
    } catch {
      console.log('Что-то пошло не так, но Вы не отчаивайтесь!');
    }
  },
};

export const getters = {
  getStories(state) {
    return state.stories;
  },
};
