import React from 'react';
import AutoCard from '../AutoCard/AutoCard';
import s from './AutoCardsList.module.scss';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const AutoCardsList = ({ vehiclesDatabase, addToFavorites, removeFromFavorites, favoritesItems }) => {
  return (
      <>
          <ul className={s.wrapper}>
              {vehiclesDatabase && vehiclesDatabase.map(vehicle => <AutoCard key={vehicle.id} vehicleInfo={vehicle} onAddToFavorites={addToFavorites} onRemoveFromFavorites={removeFromFavorites} favoritesItems={favoritesItems} />)}
          </ul>
          <LoadMoreButton />
      </>
  )
}

export default AutoCardsList