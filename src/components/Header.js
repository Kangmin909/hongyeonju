import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  const handleClick = () => {
    navigate(isMenuPage ? '/' : '/menu');
  };

  return (
    <header className="header">
      <div className="header-title" onClick={() => navigate('/')}>
        <p>HONG<br />YEONJU</p>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {isMenuPage ? '←' : '≡'}
      </div>
    </header>
  );
}

export default Header;
