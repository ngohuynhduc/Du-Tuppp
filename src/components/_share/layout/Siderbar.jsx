import React from 'react';
import SidebarItem from './SidebarItem';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import SignInButton from '../SignInButton';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SensorsIcon from '@mui/icons-material/Sensors';
import FiberDvrIcon from '@mui/icons-material/FiberDvr';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useStore } from '@/hooks';

const Siderbar = ({ drawer }) => {
  const { isActive, isWatchingPage } = useStore();
  return (
    <div
      className={`${
        !drawer
          ? `sidebar sidebar${isActive || isWatchingPage ? '--active' : ''}`
          : 'sidebar'
      }`}>
      <div className="sidebar__list">
        <SidebarItem Icon={HomeIcon} title="Home" />
        <SidebarItem Icon={ExploreIcon} title="Explore" />
        <SidebarItem Icon={AutoGraphIcon} title="Shorts" />
        <SidebarItem Icon={SubscriptionsIcon} title="Subscription" />
      </div>
      <div className="sidebar__list">
        <SidebarItem Icon={VideoLibraryIcon} title="Library" />
        <SidebarItem Icon={HistoryIcon} title="History" />
      </div>
      <div className="sidebar__list sidebar__list--padding">
        <p className="sidebar__list__text">
          Sign in to like videos, comment, and subscribe.
        </p>
        <SignInButton ml={0} />
      </div>
      <div className="sidebar__list">
        <h2 className="sidebar__list__title">BEST OF YOUTUBE</h2>
        <SidebarItem Icon={AudiotrackIcon} title="Music" modified="rounded" />
        <SidebarItem Icon={EmojiEventsIcon} title="Sports" modified="rounded" />
        <SidebarItem
          Icon={VideogameAssetIcon}
          title="Gaming"
          modified="rounded"
        />
        <SidebarItem Icon={NewspaperIcon} title="News" modified="rounded" />
        <SidebarItem Icon={SensorsIcon} title="Live" modified="rounded" />
        <SidebarItem
          Icon={FiberDvrIcon}
          title="360&deg; Video"
          modified="rounded"
        />
      </div>
      <div className="sidebar__list">
        <SidebarItem Icon={AddCircleOutlineIcon} title="Browser channels" />
      </div>
      <div className="sidebar__list">
        <h2 className="sidebar__list__title">MORE FROM YOUTUBE</h2>
        <SidebarItem Icon={SensorsIcon} title="Live" />
      </div>
      <div className="sidebar__list">
        <SidebarItem Icon={SettingsIcon} title="Settings" />
        <SidebarItem Icon={FlagIcon} title="Report history" />
        <SidebarItem Icon={HelpIcon} title="Help" />
        <SidebarItem Icon={ChatBubbleIcon} title="Send feedback" />
      </div>
    </div>
  );
};

export default Siderbar;
