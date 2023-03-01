import React from 'react';
import MoreOptions from './MoreOptions';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ReplyIcon from '@mui/icons-material/Reply';

const options = [
  {
    icon: <PlaylistPlayIcon />,
    title: 'Add to queue',
  },
  {
    icon: <ReplyIcon />,
    title: 'Share',
  },
];

const VideoInfo = ({ title, author, viewsCount, dateAgo }) => {
  return (
    <div className="video__title">
      <MoreOptions options={options} />
      <p
        className="video__title-music"
        dangerouslySetInnerHTML={{
          __html: title,
        }}></p>
      <p className="video__title-author">{author}</p>
      <p className="video__title-view">
        <span className="view-count">{viewsCount} views</span>
        <span>{dateAgo}</span>
      </p>
    </div>
  );
};
export default VideoInfo;
