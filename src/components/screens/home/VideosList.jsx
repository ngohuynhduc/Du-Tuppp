import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import { useStore } from '@/hooks';
// import ListSkeleton from '@/components/_share/ListSkeleton';

const VideosList = ({ list }) => {
  const { isLoading } = useStore();

  console.log('list', isLoading);
  // if (isLoading) {
  //   return <ListSkeleton listsToRender={15} />;
  // }
  return (
    <Box sx={{ width: '95%' }} className="list">
      <Grid
        container
        direction="row"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="flex-start">
        {list &&
          list.map((video, index) => {
            const isVideo = video?.kind === 'youtube#video';
            return (
              <Grid item xs={3} key={index} sx={{ boxShadow: 0 }}>
                <Link
                  to={`/watch/${isVideo ? video?.id : video?.id?.videoId}`}
                  className="style-links">
                  <Video videoInfo={video} />
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default VideosList;
