import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';

const ListSkeleton = ({ listsToRender }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f9f9f9',
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[0],
  }));
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((index) => (
          <>
            <Grid item xs={3} key={index} sx={{ boxShadow: 0 }}>
              <Item className="list__video">
                <Skeleton variant="rectangular" width={245} height={138} />

                <div className="list__video-title">
                  <Skeleton variant="circular" width={36} height={36} />
                  <Box sx={{ width: '70%' }}>
                    <Skeleton variant="text" />
                    <Skeleton width="60%" />
                  </Box>
                </div>
              </Item>
            </Grid>
          </>
        ))}
    </>
  );
};

export default ListSkeleton;
