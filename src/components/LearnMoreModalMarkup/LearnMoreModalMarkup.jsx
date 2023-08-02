import React from 'react';
import PropTypes from 'prop-types';
import s from './LearnMoreModalMarkup.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const LearnMoreModalMarkup = ({ vehicleInfo }) => {
  const { 
    id, 
    year, 
    make, 
    model, 
    type, 
    fuelConsumption, 
    engineSize, 
    img, 
    description, 
    accessories, 
    functionalities, 
    rentalPrice, 
    address, 
    rentalConditions, 
    mileage
  } = vehicleInfo;

  const location = address.substring(address.indexOf(',') + 1, address.length).split(',');

  const info = [
    location[0].trim(), 
    location[1].trim(), 
    `id: ${id}`, 
    `Year: ${year}`, 
    `Type: ${type}`, 
    `Fuel Consumption: ${fuelConsumption}`, 
    `Engine Size: ${engineSize}`
  ];
  
  const prettifiedMileage = String(mileage).replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");

  const conditions = [
    ...rentalConditions.split('\n'),
    `Mileage: ${prettifiedMileage}`,
    `Price: ${rentalPrice}`
  ];
  return (
    <>
      <img 
        className={s.modalImage} 
        src={img} 
        alt={[make, ' ' + model]} 
      />
      <div className={s.titleWrapper}>
        <span>{make} <span className={s.modelHighlight}> {model}</span>, {year}</span>
      </div>
      <ul 
        className={clsx(s.infoWrapper, s.clamp)}
      >
        {info?.map(item =>
          <span
            key={shortid.generate()}
          >
            {item}
          </span>
        )}
      </ul>
      <p className={s.descriptionStyle}>{description}</p>
      <span className={s.accessoriesTitleStyle}>
        Accessories and functionalities:
      </span>
      <ul
        className={s.infoWrapper}
      >
        {accessories?.concat(functionalities)?.map(item =>
          <span key={shortid.generate()}>
            {item}
          </span>
        )}
      </ul>
      <span className={s.conditionsTitleStyle}>
        Rental conditions:
      </span>
      <ul className={s.conditionsWrapper}>
        {conditions?.map(item => {
        if (item.match('Minimum age:') || item.match('Mileage:') || item.match('Price:')) {
          const newItem = item.split(':');
          return <span key={shortid.generate()}>
            {newItem[0]}:
            <span className={s.numberStyle}>
              {newItem[1]}
            </span>
          </span>
        } else {
          return <span key={shortid.generate()}>
            {item}
          </span>
        }
      })}
      </ul>
      <a href='tel:+380730000000' className={s.button}>
        <span>
          ☎️ Rental car
        </span>
      </a>
    </>
  )
};

LearnMoreModalMarkup.propTypes = {
  vehicleInfo: PropTypes.object.isRequired,
};

export default LearnMoreModalMarkup;