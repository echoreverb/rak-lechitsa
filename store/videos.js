export const state = () => ({
  videos: [
    {
      id: 0,
      src: 'https://www.youtube.com/embed/coOppM34GtI',
    },
    {
      id: 1,
      src: 'https://www.youtube.com/embed/FFrioIZ65q0',
    },
    {
      id: 2,
      src: 'https://www.youtube.com/embed/ZKWilQnPovg',
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
