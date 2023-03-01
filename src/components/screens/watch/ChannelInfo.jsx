import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FormatCash } from '@/utils/FormatCash';

const ChannelInfo = ({ video, channelVid }) => {
  // console.log(channelVid);
  const [ischeck, setIsCheck] = useState(false);
  const handleClick = () => {
    setIsCheck(!ischeck);
  };

  const formatCash = FormatCash(
    channelVid?.items[0]?.statistics?.subscriberCount,
  );

  return (
    <div className="watch__channel">
      {video && (
        <div>
          <Stack direction="row" spacing={0} className="flex-inline">
            <Stack direction="row" spacing={0} className="margin-center">
              <Avatar
                alt="Hi"
                src={channelVid?.items[0].snippet?.thumbnails?.medium?.url}
                sx={{
                  width: '48px',
                  height: '48px',
                }}
              />
              <div className="watch__channel__user">
                <p className="watch__channel__user-name">
                  {channelVid?.items[0]?.snippet?.localized?.title}
                </p>
                {formatCash ? (
                  <p className="watch__channel__user-subscribe">
                    {formatCash} subscribers
                  </p>
                ) : null}
              </div>
            </Stack>
            <Button
              title="subscribe"
              variant="contained"
              sx={{
                backgroundColor: '#c00',
                ':hover': { backgroundColor: '#c00' },
              }}>
              subscribe
            </Button>
          </Stack>
          <div
            className={
              ischeck
                ? 'watch__channel-text'
                : 'hidden-more watch__channel-text'
            }>
            {`${video?.snippet?.description}`}
          </div>
          <input
            type="button"
            value={ischeck ? 'Show less' : 'Show more'}
            onClick={handleClick}
            className="watch__channel-btn"
          />
        </div>
      )}

      <hr />
    </div>
  );
};
export default ChannelInfo;
