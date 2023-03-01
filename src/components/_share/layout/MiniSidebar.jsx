import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useStore } from '@/hooks';

const MiniSidebar = () => {
  const { isActive } = useStore();
  return (
    <div className={`mini-sidebar mini-sidebar${isActive ? '--active' : ''}`}>
      <div className="mini-sidebar__item">
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className="mini-sidebar__item">
        <ExploreIcon />
        <p>Explore</p>
      </div>
      <div className="mini-sidebar__item">
        <AutoGraphIcon />
        <p>Shorts</p>
      </div>
      <div className="mini-sidebar__item">
        <SubscriptionsIcon />
        <p>Subscriptions</p>
      </div>
      <div className="mini-sidebar__item">
        <VideoLibraryIcon />
        <p>Library</p>
      </div>
    </div>
  );
};

export default MiniSidebar;
