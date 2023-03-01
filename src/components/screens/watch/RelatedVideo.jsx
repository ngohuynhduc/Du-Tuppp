import VideoInfo from '@/components/_share/VideoInfo';
import YoutubeApi from '@/services/watchApi/YoutubeApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormatCash } from '@/utils/FormatCash';
import moment from 'moment';

const RelatedVideo = ({ itemVideo }) => {
  const [channel, setChannel] = useState();
  const id = itemVideo?.id?.videoId;

  useEffect(() => {
    const callChannel = async () => {
      try {
        const dataVideo = await YoutubeApi.getWatch(id);
        setChannel(dataVideo.data.items[0]);
      } catch (e) {
        console.log(e);
      }
    };
    callChannel();
  }, [id]);

  return (
    <>
      {itemVideo?.snippet && (
        <Link to={`/watch/${itemVideo.id.videoId}`} className="style-links">
          <div className="video">
            <img
              src={itemVideo?.snippet?.thumbnails?.medium.url}
              alt="ảnh lỗi"
              width="170px"
              height="95px"
              className="style-img"
            />
            {channel && (
              <VideoInfo
                title={itemVideo?.snippet?.title}
                author={itemVideo?.snippet?.channelTitle}
                viewsCount={FormatCash(channel.statistics.viewCount)}
                dateAgo={moment(channel?.snippet?.publishedAt).fromNow()}
              />
            )}
          </div>
        </Link>
      )}
    </>
  );
};
export default RelatedVideo;
