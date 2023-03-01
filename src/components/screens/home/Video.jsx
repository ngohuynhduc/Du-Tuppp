import React, { useEffect, useState } from 'react';
import VideoInfo from '@/components/_share/VideoInfo';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import moment from 'moment';
import { FormatCash } from '@/utils/FormatCash';
import YoutubeApi from '@/services/watchApi/YoutubeApi';
// import ListSkeleton from '@/components/_share/ListSkeleton';

const Video = ({ videoInfo }) => {
  const [channel, setChannel] = useState();
  const [listVideo, setListVideo] = useState();
  const idChannel = videoInfo?.snippet?.channelId;
  const idVideo = videoInfo?.id?.videoId;
  const isVideo = videoInfo?.kind === 'youtube#video';

  useEffect(() => {
    const getAvatarChannel = async () => {
      try {
        const getChannel = await YoutubeApi.getChannel(idChannel);
        const getListVideo = await YoutubeApi.getWatch(idVideo);
        setChannel(getChannel.data);
        setListVideo(getListVideo.data.items[0]);
      } catch (e) {
        console.log(e);
      }
    };
    getAvatarChannel();
  }, [idChannel, idVideo]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f9f9f9',
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[0],
  }));

  // if (isLoading) {
  //   return <ListSkeleton listsToRender={15} />;
  // }

  return (
    <>
      {/* <ListSkeleton listsToRender={15} /> */}
      <Item className="list__video">
        <img
          src={videoInfo?.snippet?.thumbnails?.medium?.url}
          className="list__video-img"
        />
        <div className="list__video-title">
          {channel && (
            <Avatar
              alt="Hi"
              src={channel?.items[0]?.snippet?.thumbnails?.medium?.url}
              sx={{
                width: '36px',
                height: '36px',
              }}
            />
          )}

          <VideoInfo
            title={videoInfo?.snippet?.title}
            author={videoInfo?.snippet?.channelTitle}
            viewsCount={
              isVideo
                ? FormatCash(videoInfo?.statistics?.viewCount)
                : FormatCash(listVideo?.statistics?.viewCount)
            }
            dateAgo={moment(videoInfo?.snippet?.publishedAt).fromNow()}
          />
        </div>
      </Item>
    </>
  );
};

export default Video;
