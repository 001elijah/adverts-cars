import React from 'react'
import AutoCard from '../AutoCard/AutoCard'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import s from './FavoriteAutoCardsList.module.scss'

const FavoriteAutoCardsList = ({ addToFavorites, removeFromFavorites, favoritesItems }) => {
  return (
    <>
          <ul className={s.wrapper}>
              {favoritesItems
                  && favoritesItems.map(vehicle =>
                      <AutoCard 
                          key={vehicle.id} 
                          vehicleInfo={vehicle}
                          onAddToFavorites={addToFavorites}
                          onRemoveFromFavorites={removeFromFavorites}
                          favoritesItems={favoritesItems}
                      />)}
          </ul>
          <LoadMoreButton />
      </>
  )
}

export default FavoriteAutoCardsList