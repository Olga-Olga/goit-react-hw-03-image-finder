import React from 'react';

export const ImageGalleryItem = ({ total, hits, totalHits }) => {
  console.log(hits, total, totalHits);
  return (
    <div>
      <li className="gallery-item">
        {hits.map(pic => (
          <img key={pic.id} src={pic.webformatURL} alt="123" />
        ))}
      </li>
    </div>
  );
};
