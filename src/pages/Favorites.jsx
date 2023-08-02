import React from 'react';
import PropTypes from 'prop-types';
import FavoriteAutoCardsList from '../components/AutoCardsList/AutoCardsList';



const Favorites = ({ addToFavorites, removeFromFavorites, favoritesItems }) => {
  return (
    <FavoriteAutoCardsList 
      vehiclesDatabase={null} 
      addToFavorites={addToFavorites} 
      removeFromFavorites={removeFromFavorites} 
      favoritesItems={favoritesItems} 
    />
  )
};

Favorites.propTypes = {
    addToFavorites:PropTypes.func.isRequired, 
    removeFromFavorites:PropTypes.func.isRequired, 
    favoritesItems:PropTypes.array
};

export default Favorites;