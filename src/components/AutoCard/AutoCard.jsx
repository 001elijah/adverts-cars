import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import s from './AutoCard.module.scss';
import Modal from '../Modal/Modal';
import shortid from 'shortid';
import LearnMoreModalMarkup from '../LearnMoreModalMarkup/LearnMoreModalMarkup';
import likeIcon from '../../assets/icons/like.svg';
import isLikedIcon from '../../assets/icons/liked.svg';

const AutoCard = ({ vehicleInfo, onAddToFavorites, onRemoveFromFavorites, favoritesItems }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const { id, make, model, type, img, functionalities, rentalPrice, rentalCompany, address, mileage } = vehicleInfo;
    const location = address.substring(address.indexOf(',') + 1, address.length).split(',');
    const prettifiedMileage = String(mileage).slice(0, 1) + ',' + String(mileage).slice(1);
    const info = [location[0].trim(), location[1].trim(), rentalCompany, type, prettifiedMileage, functionalities];
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
                  ? (<button type='button' onClick={() => handleToggleLiked(id)} className={s.liked}>
                        <img src={isLikedIcon} alt="like" />
                    </button>)
                  : (<button type='button' onClick={() => handleToggleLiked(id)} className={s.liked}>
                        <img src={likeIcon} alt="like" />
                    </button>)}
              <img className={s.image} src={img} alt="car" />
              <div className={s.titleWrapper}>
                  <p>{make}<span className={s.modelHighlight}> {model}</span></p>
                  <p>{rentalPrice}</p>
              </div>
              <ul className={s.infoWrapper}>{info?.map(item => <span key={shortid.generate()}>{item}</span>)}</ul>
              <button className={s.button} onClick={handleToggleModal} type='button'>Learn more</button>
          </div>
          {isModalOpen && (
                  <Modal onClose={handleToggleModal}>
                    <LearnMoreModalMarkup vehicleInfo={vehicleInfo} />
                  </ Modal>
          )}
      </li>
  )
}

AutoCard.propTypes = {
  vehicleInfo: PropTypes.object.isRequired,
};

export default AutoCard