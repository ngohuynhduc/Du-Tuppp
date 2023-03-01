import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import SignInButton from '../SignInButton';
import { useStore } from '@/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .css-5xe99f-MuiLinearProgress-bar1': {
      height: '2px',
    },
    '&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)': {
      backgroundColor: '#ffffff',
    },
    '& .MuiLinearProgress-colorPrimary': {
      backgroundColor: '#ffffff',
    },
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: '#d40000',
    },
    '& .MuiLinearProgress-dashedColorPrimary': {
      backgroundImage:
        'radial-gradient(#ffffff 0%, #ffffff 16%, transparent 42%)',
    },
  },
  bar: {
    transition: 'none',
  },
});

const Header = () => {
  const [input, setInput] = useState('');
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    isWatchingPage,
    handleDrawer,
    handleChange,
    isActive,
    setIsActive,
    isLoading,
    setIsLoading,
    progress,
    setProgress,
  } = useStore();

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          const diff = Math.random() * 20;
          return Math.min(oldProgress + diff, 100);
        });
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isLoading, setProgress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setIsLoading(true);
      navigate(`results/search_query=${input}`);
      setProgress(0);
    }
  };
  return (
    <>
      {isLoading && (
        <Box
          sx={{
            width: '100%',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
          }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            classes={{
              root: classes.root,
            }}
          />
        </Box>
      )}
      <div className="header">
        <div className="header__logo">
          <MenuIcon
            className="header__logo__btn"
            onClick={() =>
              isWatchingPage
                ? handleDrawer()
                : handleChange(isActive, setIsActive)
            }
          />
          <Link to="/">
            <img
              className="header__logo__icon"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header__search">
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              name="search-bar"
              id="search-bar"
              className="search-bar__input"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="search-bar__icon">
              <button type="submit">
                <SearchIcon className="search-bar__icon__btn" />
              </button>
            </div>
          </form>
          <MicIcon className="header__search__mic" />
        </div>
        <div className="header__icons">
          <AppsIcon className="header__icons__item" />
          <MoreVertIcon className="header__icons__item" />
          <SignInButton ml={2} />
        </div>
      </div>
    </>
  );
};

export default Header;
