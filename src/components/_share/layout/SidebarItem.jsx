import React from 'react';

const SidebarItem = ({ Icon, title, modified }) => {
  return (
    <div className="sidebar-item">
      <Icon className={`sidebar-item__icon sidebar-item__icon--${modified}`} />
      <h2 className="sidebar-item__title">{title}</h2>
    </div>
  );
};

export default SidebarItem;
