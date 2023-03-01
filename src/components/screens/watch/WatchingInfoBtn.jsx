import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { ButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import { FormatNumber } from '@/utils/FormatNumber';
import { FormatDate } from '@/utils/FormatDate';
import { FormatCash } from '@/utils/FormatCash';

const WatchingInfoBtn = ({ infoVideo }) => {
  const [isCheckIconLike, setIsCheckIconLike] = useState(false);
  const [isCheckIconDisLike, setIsCheckIconDisLike] = useState(false);

  const handleIconLike = () => {
    setIsCheckIconLike(!isCheckIconLike);
    setIsCheckIconDisLike(false);
  };
  const handleIconDisLike = () => {
    setIsCheckIconLike(false);
    setIsCheckIconDisLike(!isCheckIconDisLike);
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '0.8rem',
            color: '#030303',
            cursor: 'pointer',
            paddingRight: '3px',
            '&:hover': {
              backgroundColor: '#f9f9f9',
            },
          },
          size: 'small',
        },
      },
      MuiButtonGroup: {
        styleOverrides: {
          root: {
            border: 'none',
          },
        },
      },
    },
  });
  const formatView = FormatNumber(infoVideo?.statistics?.viewCount);
  const formatDate = FormatDate(infoVideo?.snippet?.publishedAt);
  const formatCash = FormatCash(infoVideo?.statistics?.likeCount);

  return (
    <Stack spacing={0} direction="row" className="watch__info__buttons">
      <p className="watch__info__buttons-view">
        <span className="view-count">{formatView} views </span>
        <span>{formatDate}</span>
      </p>
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="none">
          <Button
            startIcon={
              isCheckIconLike ? <ThumbUpRoundedIcon /> : <ThumbUpOutlinedIcon />
            }
            onClick={handleIconLike}>
            {formatCash ? formatCash : 'like'}
          </Button>
          <Button
            onClick={handleIconDisLike}
            startIcon={
              isCheckIconDisLike ? (
                <ThumbDownAltRoundedIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )
            }
            title="dislikes">
            dislikes
          </Button>
          <Button startIcon={<ReplyOutlinedIcon />} title="share">
            share
          </Button>
          <Button startIcon={<PlaylistAddOutlinedIcon />} title="save">
            save
          </Button>
          <Button startIcon={<MoreHorizOutlinedIcon />} title="⋮"></Button>
        </ButtonGroup>
      </ThemeProvider>
    </Stack>
  );
};

export default WatchingInfoBtn;
