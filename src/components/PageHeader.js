import React from 'react';
import './PageHeader.css';
import { useAppData } from '../context/AppDataContext';

const PageHeader = ({ title }) => {
  const { toggleMenu } = useAppData();

  return (
    <header className="page-header">
      <h1 className="page-header-title">{title}</h1>
      <div className="page-header-menu-icon" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </header>
  );
};

export default PageHeader;
