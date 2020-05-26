export const state = () => ({
  videos: [
    {
      id: 0,
      url: 'https://www.youtube.com/embed/coOppM34GtI',
    },
    {
      id: 1,
      url: 'https://www.youtube.com/embed/FFrioIZ65q0',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/ZKWilQnPovg',
    },
  ],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const getters = {
  getVideos(state) {
    return state.videos;
  },
};
