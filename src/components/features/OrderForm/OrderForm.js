import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../TripSummary/TripSummary';

const OrderForm = ({cost}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary cost={cost} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  cost: PropTypes.arrayOf(PropTypes.string),
};
  
export default OrderForm;
