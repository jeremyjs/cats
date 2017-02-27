import React from 'react';

export const CatFactGridItem = ({ imgUrl, fact }) => (
  <div className="CatFactGridItem">
    <img className="image" src={imgUrl} />
    <div className="text">
      {fact}
    </div>
  </div>
);
