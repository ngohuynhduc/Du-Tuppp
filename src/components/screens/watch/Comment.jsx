import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { FormatNumber } from '@/utils/FormatNumber';

const Comment = ({ comment }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const formatNumber = FormatNumber(comment);

  return (
    <div>
      <Stack direction="row" spacing={2} className="watch__comments">
        <p className="watch__comments-count">{`${formatNumber} Comments`}</p>
        <Button
          title="Sort by"
          startIcon={<SortIcon />}
          sx={{ color: '#030303' }}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          Sort by
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}>
          <MenuItem onClick={handleClose}>Top comments</MenuItem>
          <MenuItem onClick={handleClose}>Newest first</MenuItem>
        </Menu>
      </Stack>
    </div>
  );
};
export default Comment;
