export const state = () => ({
  instagram: [],
});

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`,
    };
  });
};

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchInstagram(state) {
    try {
      const data = await this.$axios.$get(`${process.env.instagramUrl}/?__a=1`);
      state.commit('setState', {
        name: 'instagram',
        value: getPosts(data),
      });
    } catch {
      console.log('Что-то пошло не так, но Вы не отчаивайтесь!');
    }
  },
};

export const getters = {
  getInstagram(state) {
    return state.instagram;
  },
};
