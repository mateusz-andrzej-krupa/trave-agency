import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionText = ({currentValue, name, setOptionValue}) => (

  <div className={styles.component}>
    <input type="text"
      className={styles.input}
      value={currentValue}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
      name= {name} 
      placeholder={'write here'}
    />

  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;