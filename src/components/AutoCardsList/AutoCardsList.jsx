import React, { useEffect, useState } from 'react';
import AutoCard from '../AutoCard/AutoCard';
import s from './AutoCardsList.module.scss';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const VEHICLES_PER_PAGE = 8;

const AutoCardsList = ({ vehiclesDatabase, addToFavorites, removeFromFavorites, favoritesItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastVehicle = currentPage * VEHICLES_PER_PAGE;
    const currentVehicles = vehiclesDatabase.slice(0, indexOfLastVehicle);

    const showNext = () => {
        if (currentPage * VEHICLES_PER_PAGE > currentVehicles.length) {
            alert('That\'s all')
            return
        };
        return setCurrentPage(prevState => prevState + 1);
    };
    
  return (
      <>
          <ul className={s.wrapper}>
              {vehiclesDatabase && currentVehicles.map(vehicle => <AutoCard key={vehicle.id} vehicleInfo={vehicle} onAddToFavorites={addToFavorites} onRemoveFromFavorites={removeFromFavorites} favoritesItems={favoritesItems} />)}
          </ul>
          <LoadMoreButton
                  onClickProp={showNext}
                //   isLoading={isLoading}
          />
      </>
  )
}

export default AutoCardsList