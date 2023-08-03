import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import s from './CustomSelect.module.scss';

const CustomSelect = ({ labelCaption, selectName, id, values, labelClassName }) => {
    return (
        <label className={labelClassName} htmlFor={id}>
            {labelCaption}
            <Select 
                className={id === 'make' ? s.selectBrandStyle : s.selectPriceStyle}
                name={selectName} 
                defaultValue='----' 
                id={id}
                slotProps={{
                    listbox: { className: [s.customSelectListbox, id === 'make' ? s.brand : s.price] },
                    popper: { className: s.customSelectPopper },
                }}
            >
                <Option 
                    className={s.customSelectOption} 
                    key='none' 
                    value='----'
                >
                    {id === 'make' ? 'Enter the text' : 'To $'}
                </Option>
                {values.map(value =>
                    <Option
                        className={s.customSelectOption}
                        key={value}
                        value={value}
                    >
                        {value}
                    </Option>
                )}
            </Select>
        </label>
    )
};

Select.propTypes = {
    labelCaption: PropTypes.string,
    selectName: PropTypes.string,
    id: PropTypes.string.isRequired,
    values: PropTypes.array,
    labelClassName: PropTypes.string,
};

export default CustomSelect;