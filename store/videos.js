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
    try {
      const videos = await this.$axios.$get(`${process.env.baseUrl}/videos`);
      state.commit('setState', {
        name: 'videos',
        value: videos,
      });
    } catch {
      console.log('Что-то пошло не так, но Вы не отчаивайтесь!');
    }
  },
};

export const getters = {
  getVideos(state) {
    return state.videos;
  },
};
