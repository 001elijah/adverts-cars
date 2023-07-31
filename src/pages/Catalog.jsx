import React from 'react';
import AutoCardsList from '../components/AutoCardsList/AutoCardsList';

const Catalog = ({ vehiclesDatabase, addToFavorites, removeFromFavorites, favoritesItems }) => {
  return (
    <section className='container'>
      <AutoCardsList vehiclesDatabase={vehiclesDatabase} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favoritesItems={favoritesItems} />
    </section>
  )
}

export default Catalog