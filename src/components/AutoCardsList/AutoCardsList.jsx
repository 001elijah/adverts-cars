import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AutoCard from '../AutoCard/AutoCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { VEHICLES_PER_PAGE } from '../../utils/constants';
import s from './AutoCardsList.module.scss';

const AutoCardsList = ({ addToFavorites, removeFromFavorites, favoritesItems, allVehicles, allFavoriteVehicles, currentPage, showNext }) => {
    const [vehiclesToShow, setVehiclesToShow] = useState([])
    const [indexOfLastVehicle, setIndexOfLastVehicle] = useState([]);

    useEffect(() => {
        allVehicles ? setVehiclesToShow(allVehicles.slice(0, indexOfLastVehicle)) : setVehiclesToShow(allFavoriteVehicles.slice(0, indexOfLastVehicle));
    }, [allVehicles, allFavoriteVehicles, indexOfLastVehicle]);

    useEffect(() => {
      setIndexOfLastVehicle(currentPage * VEHICLES_PER_PAGE)
    }, [currentPage])
    return (
        <>
          <ul className={s.wrapper}>
              {Boolean(vehiclesToShow.length) ? vehiclesToShow.map(vehicle =>
                  <AutoCard 
                    key={vehicle.id} 
                    vehicleInfo={vehicle} 
                    onAddToFavorites={addToFavorites} 
                    onRemoveFromFavorites={removeFromFavorites}
                    favoritesItems={favoritesItems}
                  />)
                    : <h2>No vehicles yet...</h2>
                }
          </ul>
            {
                indexOfLastVehicle < (allVehicles ? allVehicles.length : allFavoriteVehicles.length)
                && <LoadMoreButton onClickProp={showNext}/>
            }
        </>
  )
};

AutoCardsList.propTypes = {
    addToFavorites:PropTypes.func.isRequired, 
    removeFromFavorites:PropTypes.func.isRequired, 
    favoritesItems:PropTypes.array
};

export default AutoCardsList;