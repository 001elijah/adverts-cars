import React from 'react';
import FavoriteAutoCardsList from '../components/AutoCardsList/AutoCardsList';



const Favorites = ({ addToFavorites, removeFromFavorites, favoritesItems }) => {
  return (
    <section className='container'>
      <FavoriteAutoCardsList vehiclesDatabase={null} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favoritesItems={favoritesItems} />
    </section>
  )
};

export default Favorites;