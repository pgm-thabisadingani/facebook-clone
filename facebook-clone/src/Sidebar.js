import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
const Sidebar = () => {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow 
        title={user.displayName} 
        src={user.photoURL} 
      />
      <SidebarRow 
        title="COVID-19 Information Center" 
        Icon={LocalHospitalIcon}
      />
      <SidebarRow 
        title="Pages" 
        Icon={EmojiFlagsIcon}
      />
      <SidebarRow 
        title="Friends" 
        Icon={PeopleIcon}
      />
      <SidebarRow 
        title="Messenger" 
        Icon={ChatIcon}
      />
      <SidebarRow 
        title="Marketplace" 
        Icon={StorefrontIcon}
      />
      <SidebarRow 
        title="Videos" 
        Icon={VideoLibraryIcon}
      />
      <SidebarRow 
        title="Marketplace" 
        Icon={ExpandMoreOutlined}
      />

    </div>
  )
}

export default Sidebar;
