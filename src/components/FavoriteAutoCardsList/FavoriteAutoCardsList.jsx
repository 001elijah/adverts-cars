import React, { useState } from 'react'
import AutoCard from '../AutoCard/AutoCard'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import s from './FavoriteAutoCardsList.module.scss'

const VEHICLES_PER_PAGE = 8;

const FavoriteAutoCardsList = ({ addToFavorites, removeFromFavorites, favoritesItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastVehicle = currentPage * VEHICLES_PER_PAGE;
    const currentVehicles = favoritesItems.slice(0, indexOfLastVehicle);

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
              {favoritesItems
                  && currentVehicles.map(vehicle =>
                      <AutoCard 
                          key={vehicle.id} 
                          vehicleInfo={vehicle}
                          onAddToFavorites={addToFavorites}
                          onRemoveFromFavorites={removeFromFavorites}
                          favoritesItems={favoritesItems}
                      />)}
          </ul>
          { currentPage * VEHICLES_PER_PAGE < favoritesItems.length && <LoadMoreButton
                  onClickProp={showNext}
                //   isLoading={isLoading}
          />}
      </>
  )
}

export default FavoriteAutoCardsList