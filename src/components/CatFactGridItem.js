import React from 'react';
import '../stylesheets/cat-fact-grid-item.scss';

export const CatFactGridItem = ({ imgUrl, fact }) => (
  <div className="CatFactGridItem">
    <div className="image-outer">
      <img className="image" src={imgUrl} />
    </div>
    <div className="text">
      {fact}
    </div>
  </div>
);
