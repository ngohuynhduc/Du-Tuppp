import React, { useCallback, useEffect, useRef, useState } from 'react';
import RelatedVideo from './RelatedVideo';
import YoutubeApi from '@/services/watchApi/YoutubeApi';
import { useStore } from '@/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';

const RelatedList = ({ id }) => {
  const [listVideo, setListVideo] = useState([]);
  const pageToken = useRef('');
  const { isLoading, setProgress, setIsLoading } = useStore();

  useEffect(() => {
    if (isLoading) {
      pageToken.current = '';
      setListVideo([]);
    }
  }, [isLoading, setListVideo]);

  const fetchRelatedVideos = useCallback(async () => {
    try {
      const list = await YoutubeApi.getRelatedVideos(id, pageToken.current);
      setListVideo((prev) => [...prev, ...list.data.items]);
      pageToken.current = list.data.nextPageToken;
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [id, setIsLoading]);

  useEffect(() => {
    setProgress(0);
    fetchRelatedVideos();
  }, [fetchRelatedVideos, setProgress]);

  return (
    <div>
      {listVideo !== [] && (
        <InfiniteScroll
          dataLength={listVideo.length}
          next={fetchRelatedVideos}
          hasMore={true}>
          {listVideo.map((item, index) => (
            <div key={index}>
              <RelatedVideo itemVideo={item} />
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};
export default RelatedList;
