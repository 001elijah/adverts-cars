import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import LearnMoreModalMarkup from '../LearnMoreModalMarkup/LearnMoreModalMarkup';
import likeIcon from '../../assets/icons/like.svg';
import isLikedIcon from '../../assets/icons/liked.svg';
import LikeButton from '../LikeButton/LikeButton';
import s from './AutoCard.module.scss';

const AutoCard = ({ vehicleInfo, onAddToFavorites, onRemoveFromFavorites, favoritesItems }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const { 
        id, 
        year,
        make, 
        model, 
        type, 
        img, 
        functionalities, 
        rentalPrice, 
        rentalCompany, 
        address, 
        mileage 
    } = vehicleInfo;

    const location = address.substring(address.indexOf(',') + 1, address.length).split(',');
    const prettifiedMileage = String(mileage).slice(0, 1) + ',' + String(mileage).slice(1);

    const info = [
        location[0].trim(), 
        location[1].trim(), 
        rentalCompany, 
        type, 
        prettifiedMileage, 
        functionalities
    ];

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleToggleLiked = (id) => {
        if (!isLiked) {
            onAddToFavorites(id);
        } else {
            onRemoveFromFavorites(id);
        }
    }
    
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen])

    useEffect(() => {
      if (favoritesItems?.length) {
            setIsLiked(favoritesItems?.find(vehicle => vehicle.id === id) || false);
        } else {
            setIsLiked(false)
        }
    }, [favoritesItems, id])

  return (
      <li>
          <div className={s.wrapper}>
              {isLiked
                  ? <LikeButton 
                        handleClick={handleToggleLiked} 
                        id={id} 
                        icon={isLikedIcon} 
                        alt={'liked'} 
                    />
                  : <LikeButton 
                        handleClick={handleToggleLiked} 
                        id={id} 
                        icon={likeIcon} 
                        alt={'like'} 
                    />
              }
              <img className={s.image} src={img} alt={[make, ' ' + model]} />
              <div className={s.titleWrapper}>
                  <span className={s.clamspan}>
                      {make}
                      <span className={s.modelHighlight}> {model}</span>, {year}
                  </span>
                  <span>{rentalPrice}</span>
              </div>
              <ul className={s.infoWrapper}>
                  {info?.map(item =>
                      <span key={shortid.generate()}>
                        {item}
                      </span>
                  )}
              </ul>
              <button 
                className={s.button} 
                onClick={handleToggleModal} 
                type='button'
              >
                  Learn more
              </button>
          </div>
          {isModalOpen
              && (
                  <Modal onClose={handleToggleModal}>
                    <LearnMoreModalMarkup vehicleInfo={vehicleInfo} />
                  </ Modal>
          )}
      </li>
  )
}

AutoCard.propTypes = {
    vehicleInfo: PropTypes.object.isRequired,
    onAddToFavorites:PropTypes.func.isRequired, 
    onRemoveFromFavorites:PropTypes.func.isRequired, 
    favoritesItems:PropTypes.array.isRequired
};

export default AutoCard