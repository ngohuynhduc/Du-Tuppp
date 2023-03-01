import createAxios from '../Api';

const YoutubeApi = {
  getWatch: (id) => {
    return createAxios.get(
      `videos?part=snippet&part=statistics&part=contentDetails&part=player&part=topicDetails&id=${id}`,
    );
  },
  getChannel: (id) => {
    return createAxios.get(
      `channels?part=snippet&part=contentDetails&part=statistics&part=status&id=${id}`,
    );
  },
  getRelatedVideos: (id, pageToken) => {
    return createAxios.get(
      `search?part=snippet&maxResults=30&pageToken=${pageToken}&relatedToVideoId=${id}&type=video`,
    );
  },
  getResults: (query, pageToken) => {
    return createAxios.get(
      `search?part=snippet&maxResults=40&pageToken=${pageToken}&q=${query}&type=video&type=channel`,
    );
  },
  getMostPopular: (pageToken) => {
    return createAxios.get(
      `videos?part=snippet&part=statistics&part=player&part=contentDetails&chart=mostPopular&maxResults=15&pageToken=${pageToken}`,
    );
  },
  getVideoByCategory: (query, pageToken) => {
    return createAxios.get(
      `search?part=snippet&maxResults=40&pageToken=${pageToken}&q=${query}&type=video`,
    );
  },
  // getResults: (query) => {
  //   return createAxios.get(`search?part=snippet&maxResults=10&q=${query}`);
  // },
};
export default YoutubeApi;
