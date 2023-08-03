import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../components/Filter/Filter';
import AutoCardsList from '../components/AutoCardsList/AutoCardsList';

const Catalog = ({ vehiclesDatabase, addToFavorites, removeFromFavorites, favoritesItems, allVehicles, currentPage, showNext, setAllVehicles }) => {
  return (
    <section className='container'>
      <Filter 
        vehiclesDatabase={vehiclesDatabase} 
        allVehicles={allVehicles} 
        setAllVehicles={setAllVehicles}
      />
      <AutoCardsList
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        favoritesItems={favoritesItems}
        allVehicles={allVehicles}
        currentPage={currentPage}
        showNext={showNext}
      />
    </section>
  )
};

Catalog.propTypes = {
  vehiclesDatabase:PropTypes.array, 
  addToFavorites:PropTypes.func.isRequired, 
  removeFromFavorites: PropTypes.func.isRequired, 
  favoritesItems: PropTypes.array.isRequired,
  allVehicles: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  showNext: PropTypes.func.isRequired,
  setAllVehicles: PropTypes.func.isRequired
};

export default Catalog;