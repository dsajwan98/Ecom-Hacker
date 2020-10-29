import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ children, title }) => (
  <div>
    <b>{title}</b>
    {children}
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList