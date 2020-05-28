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
    const stories = await this.$axios.$get(`${process.env.baseUrl}/stories`);
    state.commit('setState', {
      name: 'stories',
      value: stories,
    });
  },
};

export const getters = {
  getStories(state) {
    return state.stories;
  },
};
