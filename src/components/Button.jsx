import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onPageUpload, buttonStatus }) => {
  // {
  //   buttonStatus === true ? 'Load More' : 'Hide';
  // }

  return <button onClick={onPageUpload}>Load more</button>;
};

Button.propTypes = {
  onPageUpload: PropTypes.func.isRequired,
};
