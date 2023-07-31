import React from 'react'
import FavoriteAutoCardsList from '../components/FavoriteAutoCardsList/FavoriteAutoCardsList'

const Favorites = ({ vehiclesDatabase, addToFavorites, removeFromFavorites, favoritesItems }) => {
  return (
    <section className='container'>
      <FavoriteAutoCardsList vehiclesDatabase={vehiclesDatabase} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favoritesItems={favoritesItems}  />
    </section>
  )
}

export default Favorites