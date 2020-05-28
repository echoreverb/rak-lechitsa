export default async function({ route, store }) {
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('stories/fetchStories');
  await store.dispatch('videos/fetchVideos');
  await store.dispatch('statistics/fetchStatistics');
  await store.dispatch('instagram/fetchInstagram');
}
