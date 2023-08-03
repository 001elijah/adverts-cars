import * as AiIcons from 'react-icons/ai';

export const VEHICLES_PER_PAGE = 8;

export const SIDEBAR_DATA = [
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

export const PRICE_FILTER_INTERVAL = 10;