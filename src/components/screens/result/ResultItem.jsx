import MoreOptions from '@/components/_share/MoreOptions';
import { Avatar, Button } from '@mui/material';
import React, { useEffect } from 'react';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import moment from 'moment';
import { Link } from 'react-router-dom';
import axios from 'axios';
import YoutubeApi from '@/services/watchApi/YoutubeApi';
import { useState } from 'react';
import { FormatNumber } from '@/utils/FormatNumber';
import { FormatCash } from '@/utils/FormatCash';
import Duration from '@/components/_share/layout/Duration';

const options = [{ icon: <PlaylistPlayIcon />, title: 'Add to queue' }];

const ResultItem = ({ data }) => {
  // console.log('Data', data);
  const [videoData, setVideoData] = useState();
  const [channelData, setChannelData] = useState();
  const isVideo = data?.id?.kind === 'youtube#video';
  const videoID = isVideo && data?.id?.videoId;
  const channelID = data?.snippet?.channelId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('Start...');
        const [video, channel] = await axios.all([
          videoID && YoutubeApi.getWatch(videoID),
          YoutubeApi.getChannel(channelID),
        ]);
        setVideoData(video.data);
        setChannelData(channel.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [videoID, channelID]);

  console.log('Video: ', videoData);
  console.log('Channel', channelData);
  return (
    <>
      {isVideo ? (
        <Link
          to={`/watch/${data.id.videoId}`}
          style={{ textDecoration: 'none' }}>
          <div className="list-result__item list-result__item--video">
            <MoreOptions options={options} />
            <div className="list-result__item__thumbnail">
              <Duration
                duration={videoData?.items[0]?.contentDetails?.duration}
              />
              <img
                className="thumnail-img"
                src={data?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
              />
            </div>
            <div className="list-result__item__info">
              <div className="result-info__title">
                <h2
                  className="result-info__title__text"
                  dangerouslySetInnerHTML={{
                    __html: data?.snippet?.title,
                  }}></h2>
              </div>
              <div className="result-info__sub">
                <div className="result-info__sub__view-count">
                  {videoData &&
                    FormatCash(videoData?.items[0]?.statistics.viewCount)}{' '}
                  views
                </div>
                <div className="result-info__sub__day">
                  {moment(data?.snippet?.publishedAt).fromNow()}
                </div>
              </div>
              <div className="result-info__channel">
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  className="result-info__channel__avatar"
                  src={channelData?.items[0]?.snippet?.thumbnails?.default?.url}
                />
                <div className="result-info__channel__name">
                  {data?.snippet?.channelTitle}
                </div>
              </div>
              <div className="result-info__description">
                <p>{data?.snippet?.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="list-result__item list-result__item--channel">
          <div className="list-result__item__thumbnail list-result__item__thumbnail--channel">
            <img
              className="thumbnail-img"
              src={data?.snippet?.thumbnails?.medium?.url}
              alt="thumbnail"
              // width="360px"
            />
          </div>
          <div className="list-result__item__info list-result__item__info--channel">
            <div className="result-info__title">
              <h2 className="result-info__title__text">
                {data?.snippet?.channelTitle}
              </h2>
            </div>
            <div className="result-info__sub">
              <div className="result-info__sub__view-count">
                {channelData &&
                  FormatCash(
                    channelData?.items[0]?.statistics?.subscriberCount,
                  )}{' '}
                subscribers
              </div>
              <div className="result-info__sub__day">
                {channelData &&
                  FormatNumber(
                    channelData?.items[0]?.statistics?.videoCount,
                  )}{' '}
                videos
              </div>
            </div>
            <div className="result-info__description result-info__description--channel">
              <p>{data?.snippet?.description}</p>
            </div>
          </div>
          <Button
            title="subscribe"
            variant="contained"
            sx={{
              backgroundColor: '#c00',
              ':hover': { backgroundColor: '#c00' },
              height: '10%',
              alignSelf: 'center',
            }}>
            subscribe
          </Button>
        </div>
      )}
    </>
  );
};

export default ResultItem;
