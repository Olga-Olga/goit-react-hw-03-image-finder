import React from 'react';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, onModal }) => {
  return (
    <li className="gallery-item">
      <img onClick={() => onModal(largeImageURL)} src={webformatURL} alt="" />
    </li>
  );
};
