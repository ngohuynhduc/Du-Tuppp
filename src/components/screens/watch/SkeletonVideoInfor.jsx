import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';

export const SkeletonVideoInfor = () => {
  return (
    <div className="watch layout-center">
      <div className="watch__left padding-24">
        <Skeleton variant="rectangular" width={'100%'} height={'409px'} />
        <div className="watch__info">
          <div className="watch__info__title">
            {/* <Skeleton variant="rectangular" width={'30%'} height={'13px'} /> */}
            <Skeleton variant="rectangular" width={'50%'} height={'20px'} />
          </div>
          <Stack spacing={0} direction="row" className="watch__info__buttons">
            <Skeleton variant="rectangular" width={'100%'} height={'30px'} />
          </Stack>
          <div className="watch__channel">
            <Stack
              direction="row"
              spacing={0}
              className="flex-inline"
              style={{ marginTop: '7px' }}>
              <Stack direction="row" spacing={0} className="margin-center">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={'48px'}
                  height={'48px'}
                />
                <div className="watch__channel__user">
                  <Skeleton
                    variant="rectangular"
                    width={'25%'}
                    height={'14px'}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={'20%'}
                    height={'11px'}
                  />
                </div>
              </Stack>
              <Skeleton
                variant="rectangular"
                width={'70px'}
                height={'40px'}
                style={{ borderRadius: '4px' }}
              />
            </Stack>
            <Skeleton
              variant="rectangular"
              width={'100%'}
              height={'50px'}
              style={{ marginTop: '7px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
