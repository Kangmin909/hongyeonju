import React from 'react';
import './PageHeader.css';
import { useAppData } from '../context/AppDataContext';
import menuIcon from '../assets/icons/menu-icon.svg';

const PageHeader = ({ title }) => {
  const { toggleMenu } = useAppData();

  return (
    <header className="page-header">
      <h1 className="page-header-title">{title}</h1>
      <div className="page-header-menu-icon" onClick={toggleMenu}>
        <img src={menuIcon.src || menuIcon} alt="Menu" className="menu-icon-img" />
      </div>
    </header>
  );
};

export default PageHeader;
