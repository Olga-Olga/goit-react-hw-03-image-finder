import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ total, hits, totalHits, onModal }) => {
  return (
    <div>
      <ul className="imageGallery">
        {hits.map(pic => (
          <ImageGalleryItem
            onModal={onModal}
            key={pic.id}
            webformatURL={pic.webformatURL}
            largeImageURL={pic.largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};
