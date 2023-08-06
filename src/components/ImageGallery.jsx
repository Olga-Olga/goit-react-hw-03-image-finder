import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ total, hits, totalHits }) => {
  return (
    <div>
      <ul className="gallery">
        {hits.map(pic => (
          <ImageGalleryItem key={pic.id} webformatURL={pic.webformatURL} />
          // <img key={pic.id} src={pic.webformatURL} alt="123" />
        ))}
      </ul>
    </div>
  );
};
