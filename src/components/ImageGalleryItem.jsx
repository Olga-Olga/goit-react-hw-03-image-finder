import React from 'react';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="123" />
    </li>
  );
};
