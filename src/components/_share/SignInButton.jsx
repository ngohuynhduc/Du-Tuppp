import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const SignInButton = ({ ml }) => {
  return (
    <>
      <Box ml={ml}>
        <Button
          variant="outlined"
          startIcon={<AccountCircleOutlinedIcon />}
          className="header__icons__item">
          SIGN IN
        </Button>
      </Box>
    </>
  );
};

export default SignInButton;
