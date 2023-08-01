import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';
import clsx from 'clsx';
import Backdrop from '../Backdrop/Backdrop';

const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiOutlineHome />
    },
    {
        title: 'Catalog',
        path: '/catalog',
        icons: <AiIcons.AiOutlineAppstore />
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icons: <AiIcons.AiOutlineHeart />
    }
]

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    useEffect(() => {
        if (sidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [sidebar])
  return (
        <IconContext.Provider value={{ color: 'undefined' }}>
            <div className={s.navBar}>
                <Link to='#' className={s.menuItems}></Link>
                <FaIcons.FaBars className={s.burgerIcon} onClick={showSidebar} />
            </div>
          {sidebar && <Backdrop closeModal={showSidebar} >
                <nav className={sidebar ? clsx(s.sidebar, s.active) : s.sidebar}>
                    <ul className={s.navBarItems}>
                        <li className={s.navBarToggle}>
                            <Link to='#' className={s.menuItems} onClick={showSidebar}>
                                <AiIcons.AiOutlineClose className={s.closeIcon}/>
                            </Link>
                        </li>
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={s.navText}>
                                    <NavLink 
                                        to={item.path} 
                                        onClick={showSidebar} 
                                        className={({ isActive }) =>
                                            isActive
                                                ? s.isActive
                                                : ""
                                        }
                                    >
                                        {item.icons}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </Backdrop>}
        </ IconContext.Provider>
  )
}

export default NavBar