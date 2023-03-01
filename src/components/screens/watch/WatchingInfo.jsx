import MetaData from '@/components/_share/MetaData';
import React from 'react';
import WatchingInfoBtn from './WatchingInfoBtn';

const WatchingInfo = ({ video }) => {
  return (
    <>
      <MetaData title={video?.snippet?.title} />
      <div className="watch__info">
        <div className="watch__info__title">
          <p className="watch__info__title-tab">#tab thịnh hành</p>
          <p className="watch__info__title-music">{video?.snippet?.title}</p>
        </div>
        <WatchingInfoBtn infoVideo={video} />
        <hr />
      </div>
    </>
  );
};
export default WatchingInfo;
