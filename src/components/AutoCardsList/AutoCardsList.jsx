import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AutoCard from '../AutoCard/AutoCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { VEHICLES_PER_PAGE } from '../../utils/constants';
import s from './AutoCardsList.module.scss';

const AutoCardsList = ({ vehiclesDatabase, addToFavorites, removeFromFavorites, favoritesItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastVehicle = currentPage * VEHICLES_PER_PAGE;
    const currentVehicles = vehiclesDatabase
        ? vehiclesDatabase.slice(0, indexOfLastVehicle)
        : favoritesItems.slice(0, indexOfLastVehicle);

    const showNext = () => {
        return setCurrentPage(prevState => prevState + 1);
    };
    return (
        <section className='container'>
          <ul className={s.wrapper}>
              {(vehiclesDatabase || favoritesItems)
                  && currentVehicles.map(vehicle =>
                  <AutoCard 
                    key={vehicle.id} 
                    vehicleInfo={vehicle} 
                    onAddToFavorites={addToFavorites} 
                    onRemoveFromFavorites={removeFromFavorites}
                    favoritesItems={favoritesItems}
                  />)}
          </ul>
            {
                currentPage * VEHICLES_PER_PAGE <
                (vehiclesDatabase
                ? vehiclesDatabase.length
                : favoritesItems.length)
                && <LoadMoreButton onClickProp={showNext}/>
            }
        </section>
  )
};

AutoCardsList.propTypes = {
    vehiclesDatabase:PropTypes.array, 
    addToFavorites:PropTypes.func.isRequired, 
    removeFromFavorites:PropTypes.func.isRequired, 
    favoritesItems:PropTypes.array
};

export default AutoCardsList;