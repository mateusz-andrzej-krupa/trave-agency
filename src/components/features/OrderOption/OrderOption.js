import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
};

const OrderOption = ({id, name, type, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent 
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps} 
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  options: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
};
  
export default OrderOption;