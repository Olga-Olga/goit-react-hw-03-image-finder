import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onPageUpload, buttonStatus }) => {
  // {
  //   buttonStatus === true ? 'Load More' : 'Hide';
  // }

  return (
    <div className="searchbar">
      <button className="searchForm-button button" onClick={onPageUpload}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onPageUpload: PropTypes.func.isRequired,
};
