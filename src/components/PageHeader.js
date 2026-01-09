import React from 'react';
import './PageHeader.css';
import { useAppData } from '../context/AppDataContext';
import menuIcon from '../assets/icons/menu-icon.svg';

const PageHeader = ({ title }) => {
  const { toggleMenu } = useAppData();

  return (
    <header className="page-header">
      <h1 className="page-header-title">{title}</h1>
      <div className="common-menu-icon" onClick={toggleMenu}>
        <img 
          src={menuIcon.src || menuIcon} 
          alt="Menu" 
          className="menu-icon-img" 
          width="24" 
          height="24"
        />
      </div>
    </header>
  );
};

export default PageHeader;
