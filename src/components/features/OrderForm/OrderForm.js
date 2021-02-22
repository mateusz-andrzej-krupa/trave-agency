import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({tripCost, options}) => (
  <Grid>
    {/* {console.log('props', tripCost)} */}
    <Row>
      <Col xs={12}>
        {/* <div>{'Total price:'} {tripCost} </div> */}
        <OrderSummary tripprice={tripCost} options={options} /> 
        {/* cost={tripCost}> {'cena wycieczki'} {tripCost}</OrderSummary */}
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
  
export default OrderForm;
