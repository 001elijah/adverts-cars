import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import s from './Modal.module.scss';
import xIcon from '../../assets/icons/xIcon.svg';

const Modal = ({ onClose, children }) => {
    
    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <Backdrop closeModal={onClose}>
      <div className={s.modal}>
          <button 
            type='button' 
            onClick={handleClose} 
            className={s.close}
          >
            <img src={xIcon} alt="close" />
          </button>
              <div className={s.modalWrapper}>
                  {children}
              </div>
      </div>
    </Backdrop>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;