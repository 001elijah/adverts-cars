import React from 'react';
// import PropTypes from 'prop-types';
import s from './LoadMoreButton.module.scss';
import Loader from '../Loader/Loader';

const LoadMoreButton = ({ onClickProp, isLoading }) => {
  return (
    <button type="button" className={s.loadMoreButton} onClick={onClickProp}>
            Load more {isLoading && <Loader/>}
    </button>
  )
}

// LoadMoreButton.propTypes = {
//     onClickProp: PropTypes.func.isRequired,
//     isLoading: PropTypes.bool.isRequired
// };

export default LoadMoreButton