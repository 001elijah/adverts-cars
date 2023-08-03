import React from 'react';
import PropTypes from 'prop-types';
import s from './Select.module.scss';

const Select = ({ selectName, id, values }) => {
    return (
        <select name={selectName} id={id}>
            <option key='none' value='----'>----</option>
            {values.map(value => <option key={value} value={value}>{value}</option>)}
        </select>
    )
};

Select.propTypes = {
    selectName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired
};

export default Select;