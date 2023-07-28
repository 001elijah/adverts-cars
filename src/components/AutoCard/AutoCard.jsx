import React from 'react';
import s from './AutoCard.module.scss';

const AutoCard = ({ vehicleInfo }) => {
    const { year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address, mileage } = vehicleInfo;
    const location = address.substring(address.indexOf(',') + 1, address.length).split(',');
    const info = [location[0].trim(), location[1].trim(), rentalCompany, type, mileage, functionalities[0]];
  return (
      <div className={s.wrapper}>
          <img className={s.image} src={img} alt="car" />
          <div className={s.titleWrapper}>
              <p>{make}<span>{model}</span></p>
              <p>{rentalPrice}</p>
          </div>
          <p className={s.infoWrapper}>{info?.map(item => <span>{item}</span>)}</p>
          <button className={s.button} type='button'>Learn more</button>
      </div>
  )
}

export default AutoCard