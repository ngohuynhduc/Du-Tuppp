import React from 'react';
import Header from './Header';
import Siderbar from './Siderbar';
import { Outlet } from 'react-router-dom';
import MiniSidebar from './MiniSidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Siderbar drawer={false} />
        <MiniSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
