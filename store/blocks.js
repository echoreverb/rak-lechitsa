export const state = () => ({
  blocks: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchBlocks(state) {
    const blocks = await this.$axios.$get(`${process.env.baseUrl}/blocks`);
    state.commit('setState', {
      name: 'blocks',
      value: blocks,
    });
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
};
