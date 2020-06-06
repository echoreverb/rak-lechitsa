export const state = () => ({
  covers: [
    {
      id: 1,
      url: '/images/video-covers/pozner.png',
    },
    {
      id: 2,
      url: '/images/video-covers/tattoo.png',
    },
    {
      id: 3,
      url: '/images/video-covers/cleaning.png',
    },
  ],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const getters = {
  getCovers(state) {
    return state.covers;
  },
};
