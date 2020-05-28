export const state = () => ({
  videos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchVideos(state) {
    const videos = await this.$axios.$get(`${process.env.baseUrl}/videos`);
    state.commit('setState', {
      name: 'videos',
      value: videos,
    });
  },
};

export const getters = {
  getVideos(state) {
    return state.videos;
  },
};
