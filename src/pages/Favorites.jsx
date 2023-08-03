import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../components/Filter/Filter';
import FavoriteAutoCardsList from '../components/AutoCardsList/AutoCardsList';



const Favorites = ({ addToFavorites, removeFromFavorites, favoritesItems, allFavoriteVehicles, currentPage, showNext, setAllFavoriteVehicles }) => {
  return (
    <section className='container'>
      {favoritesItems.length ? <Filter 
        favoritesItems={favoritesItems} 
        allFavoriteVehicles={allFavoriteVehicles} 
        setAllFavoriteVehicles={setAllFavoriteVehicles}
      /> : <span></span>}
      <FavoriteAutoCardsList 
        addToFavorites={addToFavorites} 
        removeFromFavorites={removeFromFavorites} 
        favoritesItems={favoritesItems} 
        allFavoriteVehicles={allFavoriteVehicles}
        currentPage={currentPage}
        showNext={showNext}
      />
    </section>
  )
};

Favorites.propTypes = {
  addToFavorites:PropTypes.func.isRequired, 
  removeFromFavorites:PropTypes.func.isRequired, 
  favoritesItems: PropTypes.array.isRequired,
  allFavoriteVehicles: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  showNext: PropTypes.func.isRequired,
  setAllFavoriteVehicles: PropTypes.func.isRequired
};

export default Favorites;