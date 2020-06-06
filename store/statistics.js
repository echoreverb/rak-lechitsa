export const state = () => ({
  statistics: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStatistics(state) {
    try {
      const statistics = await this.$axios.$get(
        `${process.env.baseUrl}/statistics`
      );
      state.commit('setState', {
        name: 'statistics',
        value: statistics,
      });
    } catch {
      console.log('Что-то пошло не так, но Вы не отчаивайтесь!');
    }
  },
};

export const getters = {
  getStatistics(state) {
    return state.statistics;
  },
};
