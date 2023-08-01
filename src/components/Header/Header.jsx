import React from 'react';
import s from './Header.module.scss';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
      <header className={s.header}>
          <NavBar />
      </header>
  )
}

export default Header