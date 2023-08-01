import React from 'react';
import PropTypes from 'prop-types';
import s from './LoadMoreButton.module.scss';

const LoadMoreButton = ({ onClickProp }) => {
  return (
    <button
      type="button"
      className={s.loadMoreButton}
      onClick={onClickProp}
    >
      Load more
    </button>
  )
};

LoadMoreButton.propTypes = {
    onClickProp: PropTypes.func.isRequired,
};

export default LoadMoreButton;