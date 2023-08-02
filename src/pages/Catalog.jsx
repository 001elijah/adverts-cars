import React from 'react';
import PropTypes from 'prop-types';
import AutoCardsList from '../components/AutoCardsList/AutoCardsList';

const Catalog = ({ vehiclesDatabase, addToFavorites, removeFromFavorites, favoritesItems }) => {
  return (
    <AutoCardsList
      vehiclesDatabase={vehiclesDatabase}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
      favoritesItems={favoritesItems}
    />
  )
};

Catalog.propTypes = {
    vehiclesDatabase:PropTypes.array, 
    addToFavorites:PropTypes.func.isRequired, 
    removeFromFavorites:PropTypes.func.isRequired, 
    favoritesItems:PropTypes.array
};

export default Catalog;