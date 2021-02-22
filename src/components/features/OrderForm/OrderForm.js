import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options}) => (
  <Grid>
    {/* {console.log('props', tripCost)} */}
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          {' '}
          <OrderOption
            // setOrderOption={setOrderOption}
            currentValue={options[option.id]}
            title={option.id}
            {...option}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripprice={tripCost} options={options} /> 
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
  
export default OrderForm;
