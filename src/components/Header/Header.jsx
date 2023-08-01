import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const navItems = [
    { href: "/", text: "Home" },
    { href: "catalog", text: "Catalog" },
    { href: "favorites", text: "Favorites" }
];

const Header = () => {
  return (
      <header className={s.header}>
          <NavBar />
      </header>
  )
}

export default Header