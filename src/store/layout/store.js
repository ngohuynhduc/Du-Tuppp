import React, { createContext, useState } from 'react';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [filterSearchActive, setFilterSearchActive] = useState(false);
  const [isWatchingPage, setIsWatchingPage] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState('All');
  const [progress, setProgress] = useState(0);

  const handleClick = (value) => {
    setActive(value);
    setProgress(0);
  };

  const handleChange = (active, setActive) => {
    setActive(!active);
  };

  const handleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  const value = {
    isActive,
    setIsActive,
    handleChange,
    filterSearchActive,
    setFilterSearchActive,
    isWatchingPage,
    setIsWatchingPage,
    handleDrawer,
    isOpenDrawer,
    setIsOpenDrawer,
    isLoading,
    setIsLoading,
    active,
    setActive,
    handleClick,
    progress,
    setProgress,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export { LayoutProvider, LayoutContext };
