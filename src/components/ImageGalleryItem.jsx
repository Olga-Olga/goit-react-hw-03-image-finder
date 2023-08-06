import React from 'react';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, onModal }) => {
  return (
    <li className="gallery-item imageGalleryItem">
      <img
        className="imageGalleryItem-image"
        onClick={() => onModal(largeImageURL)}
        src={webformatURL}
        alt=""
      />
    </li>
  );
};
