import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOption = ({options}) => (
  <div className={styles.component}>
    <h3 className={styles.title}>{'options'} {options}</h3>
  </div>
);

OrderOption.propTypes = {
  options: PropTypes.object,
};
  
export default OrderOption;