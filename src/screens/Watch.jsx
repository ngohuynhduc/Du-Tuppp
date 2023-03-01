import ChannelInfo from '@/components/screens/watch/ChannelInfo';
import Comment from '@/components/screens/watch/Comment';
import RelatedList from '@/components/screens/watch/RelatedList';
import WatchContent from '@/components/screens/watch/WatchContent';
import WatchingInfo from '@/components/screens/watch/WatchingInfo';
import Siderbar from '@/components/_share/layout/Siderbar';
import { useStore } from '@/hooks';
import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import YoutubeApi from '@/services/watchApi/YoutubeApi';

import { useParams } from 'react-router-dom';
import { SkeletonVideoInfor } from '@/components/screens/watch/SkeletonVideoInfor';
// import MetaData from '@/components/_share/MetaData';

const Watch = () => {
  const {
    isOpenDrawer,
    setIsOpenDrawer,
    setIsWatchingPage,
    handleDrawer,
    isLoading,
    setIsLoading,
  } = useStore();
  const [video, setVideo] = useState();
  const [channelVideo, setChannelVideo] = useState();
  const params = useParams();
  const videoID = params.id;

  useEffect(() => {
    setIsWatchingPage(true);
  }, [setIsLoading, setIsWatchingPage]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setIsLoading(true);
        console.log('Loading');
        const vid = await YoutubeApi.getWatch(videoID);
        const vids = vid.data?.items[0];
        setVideo(vids);
        // setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getVideos();
  }, [videoID, setIsLoading]);

  const ChanneID = video?.snippet?.channelId;

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        setIsLoading(true);
        const channel = ChanneID && (await YoutubeApi.getChannel(ChanneID));
        const d = channel?.data;
        setChannelVideo(d);
        // setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchChannel();
  }, [ChanneID, setIsLoading]);

  return (
    <>
      <div className="watch layout-center">
        <Drawer
          anchor="left"
          PaperProps={{ sx: { width: '240px' } }}
          open={isOpenDrawer}
          onClose={() => {
            setIsOpenDrawer(false);
          }}>
          <div className="watch__drawer">
            <div className="header__logo header__logo--drawer">
              <MenuIcon
                className="header__logo__btn"
                onClick={() => handleDrawer()}
              />
              <img
                className="header__logo__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="logo"
              />
            </div>
            <Siderbar drawer={true} />
          </div>
        </Drawer>
        {isLoading ? (
          <SkeletonVideoInfor />
        ) : (
          video &&
          channelVideo && (
            <div className="watch__left padding-24">
              <WatchContent id={videoID} />
              <WatchingInfo video={video} />
              <ChannelInfo video={video} channelVid={channelVideo} />
              <Comment comment={video?.statistics?.commentCount} />
            </div>
          )
        )}
        <div className="watch__right">
          <RelatedList id={videoID} />
        </div>
      </div>
    </>
  );
};

export default Watch;
