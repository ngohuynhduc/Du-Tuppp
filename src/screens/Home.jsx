import VideosList from '@/components/screens/home/VideosList';
import FilterBar from '@/components/_share/FilterBar';
import ListSkeleton from '@/components/_share/ListSkeleton';
import MetaData from '@/components/_share/MetaData';
import { useStore } from '@/hooks';
import YoutubeApi from '@/services/watchApi/YoutubeApi';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const { setIsWatchingPage, active, isLoading, setIsLoading } = useStore();
  const [listVideo, setListVideo] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const pageTokenRef = useRef('');

  useEffect(() => {
    setIsWatchingPage(false);
    if (active) {
      pageTokenRef.current = '';
      setListCategory([]);
    }
  }, [active, setIsWatchingPage, setListCategory]);

  const getListVideo = useCallback(async () => {
    try {
      const video = await YoutubeApi.getMostPopular(pageTokenRef.current);
      setListVideo((prev) => [...prev, ...video.data.items]);
      pageTokenRef.current = video.data.nextPageToken;
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [setIsLoading]);

  const getListVideoCategory = useCallback(async () => {
    try {
      const getVideos = await YoutubeApi.getVideoByCategory(
        active,
        pageTokenRef.current,
      );
      setListCategory((prev) => [...prev, ...getVideos.data.items]);
      pageTokenRef.current = getVideos.data.nextPageToken;
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [active, setIsLoading]);

  useEffect(() => {
    setIsLoading(true);
    if (active === 'All') {
      getListVideo();
    } else {
      getListVideoCategory();
    }
  }, [active, getListVideo, getListVideoCategory, setIsLoading]);

  console.log(isLoading);

  if (isLoading) {
    return (
      <div className="home">
        <div className="style-sticky">
          <FilterBar />
        </div>
        <Box sx={{ width: '95%' }} className="list">
          <Grid
            container
            direction="row"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="flex-start">
            <ListSkeleton listsToRender={15} />
          </Grid>
        </Box>
      </div>
    );
  }
  return (
    !isLoading && (
      <>
        <MetaData title="Youtube" />
        <div className="home">
          <div className="style-sticky">
            <FilterBar />
          </div>
          {active === 'All'
            ? listVideo !== [] && (
                <InfiniteScroll
                  dataLength={listVideo.length}
                  next={getListVideo}
                  hasMore={true}>
                  <VideosList list={listVideo} />
                </InfiniteScroll>
              )
            : listCategory !== [] && (
                <InfiniteScroll
                  dataLength={listCategory.length}
                  next={getListVideoCategory}
                  hasMore={true}>
                  <VideosList list={listCategory} />
                </InfiniteScroll>
              )}
        </div>
      </>
    )
  );
};

export default Home;
