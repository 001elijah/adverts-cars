import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../CustomSelect/CustomSelect';
import s from './Filter.module.scss';
import { PRICE_FILTER_INTERVAL } from '../../utils/constants';

const Filter = ({ vehiclesDatabase = null, favoritesItems = null, allVehicles = null, allFavoriteVehicles = null, setAllVehicles, setAllFavoriteVehicles }) => {
    const [minMileage, setMinMileage] = useState('');
    const [maxMileage, setMaxMileage] = useState('');
    const makeItems = [...new Set(vehiclesDatabase ? vehiclesDatabase.map(vehicle => vehicle.make).sort() : favoritesItems.map(vehicle => vehicle.make).sort())];

    const priceItems = [...new Set(vehiclesDatabase ? vehiclesDatabase.map(vehicle => +vehicle.rentalPrice.replace('$', '')) : favoritesItems.map(vehicle => +vehicle.rentalPrice.replace('$', '')))];
    const minPrice = Math.min(...priceItems);
    const maxPrice = Math.max(...priceItems);
    const length = (maxPrice - minPrice) / PRICE_FILTER_INTERVAL + 2;
    const filterPriceValues = Array.from({ length }, (_, i) => minPrice + i * PRICE_FILTER_INTERVAL);
    const handleInputChange = (e) => {
        e.target.id === 'minMileage' ? setMinMileage(e.target.value) : setMaxMileage(e.target.value);
    }

    const handleReset = () => {
        vehiclesDatabase && setAllVehicles(vehiclesDatabase);
        favoritesItems && setAllFavoriteVehicles(favoritesItems);
        setMinMileage('');
        setMaxMileage('');
    }

    const handleSearch = (e) => {
        e.preventDefault();
        vehiclesDatabase && setAllVehicles(vehiclesDatabase);
        favoritesItems && setAllFavoriteVehicles(favoritesItems);
        const form = e.target;
        const formData = new FormData(form);
        const { make, minMileage, maxMileage, price } = Object.fromEntries(formData.entries());

        if (!minMileage.match('^[0-9]*$') || !maxMileage.match('^[0-9]*$')) {
            alert('Mileage can be number only');
            return;
        }

        if (minMileage && maxMileage) {
            if (maxMileage < minMileage) {
                alert('"To" mileage must be greater than "From" mileage')
                return;
            }
        }

        if ((minMileage && +minMileage === 0) || (maxMileage && +maxMileage === 0)) {
            alert('Mileage can\'t be equal to 0')
            return;
        }

        if (allVehicles) {
            if (make !== '----') {
                setAllVehicles(prevState => 
                    prevState.filter(vehicle => 
                        vehicle.make === make
                    )
                );
            }
            if (price !== '----') {
                setAllVehicles(prevState => 
                    prevState.filter(vehicle => 
                        +vehicle.rentalPrice.replace('$', '') <= +price
                    )
                );
            }
            if (minMileage) {
                 setAllVehicles(prevState => 
                    prevState.filter(vehicle => 
                        vehicle.mileage >= minMileage
                     )
                 );
            }
            if (maxMileage) {
                 setAllVehicles(prevState => 
                    prevState.filter(vehicle => 
                        vehicle.mileage <= maxMileage
                     )
                 );
            }
        } else if (allFavoriteVehicles) {
            if (make !== '----') {
                setAllFavoriteVehicles(prevState =>
                    prevState.filter(vehicle =>
                        vehicle.make === make
                    )
                );
            }
            if (price !== '----') {
                setAllFavoriteVehicles(prevState =>
                    prevState.filter(vehicle =>
                        +vehicle.rentalPrice.replace('$', '') <= +price
                    )
                );
            }
            if (minMileage) {
                setAllFavoriteVehicles(prevState =>
                    prevState.filter(vehicle =>
                        vehicle.mileage >= minMileage
                    )
                );
            }
            if (maxMileage) {
                setAllFavoriteVehicles(prevState =>
                    prevState.filter(vehicle =>
                        vehicle.mileage <= maxMileage
                    )
                );
            }
        }
    }
    return (
        <>
            <form className={s.filterWrapper} method="post" onSubmit={handleSearch}>
                <CustomSelect 
                    labelClassName={s.labelStyle}
                    labelCaption={'Car brand'}
                    selectName={"make"} 
                    id={"make"} 
                    values={makeItems} 
                />
                <CustomSelect 
                    labelClassName={s.labelStyle}
                    labelCaption={'Price/ 1 hour'}
                    selectName={"price"} 
                    id={"price"} 
                    values={filterPriceValues} 
                />
                <div className={s.inputGroup}>
                    <label className={s.labelStyle} htmlFor="minMileage">
                        Сar mileage / km
                        <input 
                            className={s.inputLeftStyle}
                            type="text" 
                            id="minMileage" 
                            name="minMileage" 
                            placeholder='From' 
                            value={minMileage} 
                            onChange={e => handleInputChange(e)}
                        />
                    </label>
                    <label className={s.labelStyle} htmlFor="maxMileage">
                        <br></br>
                        <input 
                            className={s.inputRightStyle}
                            type="text" 
                            id="maxMileage" 
                            name="maxMileage" 
                            placeholder='To' 
                            value={maxMileage} 
                            onChange={e => handleInputChange(e)} 
                        />
                    </label>
                </div>
                <button className={s.buttonStyle} type='submit'>Search</button>
                <button className={s.buttonStyle} type='button' onClick={handleReset}>Reset</button>
            </form>
        </>
    )
};

Filter.propTypes = {
    vehiclesDatabase: PropTypes.array, 
    allVehicles: PropTypes.array,
    setAllVehicles: PropTypes.func,
    favoritesItems: PropTypes.array,
    allFavoriteVehicles: PropTypes.array,
    setAllFavoriteVehicles: PropTypes.func
};

export default Filter;