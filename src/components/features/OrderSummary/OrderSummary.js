import React from 'react';
import PropTypes from 'prop-types';

import {Grid} from 'react-flexbox-grid';

import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = ({tripprice, options}) => (
  <Grid>
    {console.log('summary', options)}
    <h2 className={styles.component}> Total: <strong> { formatPrice(calculateTotal(tripprice, options)) } </strong> </h2>
  </Grid>
);

OrderSummary.propTypes = {
  tripprice: PropTypes.string,
  options: PropTypes.object,
};
  
export default OrderSummary;
