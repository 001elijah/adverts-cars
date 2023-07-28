import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const navItems = [
    { href: "/", text: "Home" },
    { href: "catalog", text: "Catalog" },
    { href: "favorites", text: "Favorites" }
];

const Header = () => {
  return (
      <header className={s.header}>
            <nav className={s.navigation}>
                {navItems.map(({ href, text }) =>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                padding: '7px 10px',
                                color: '#fff',
                                background: '#7600dc',
                                borderRadius: '8px',
                                }
                            : { padding: '7px 10px', color: '#545e6f', background: '#ffe600' }
                        }
                        to={href}
                        key={href}
                    >
                        {text}
                    </NavLink>
                )}
            </nav>
        </header>
  )
}

export default Header