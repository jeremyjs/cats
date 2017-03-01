import React from 'react';
import { CatFactGridItem } from './CatFactGridItem';
import '../stylesheets/cat-fact-grid.scss';

export const CatFactGrid = ({ cats }) => (
  <div className="CatFactGrid">
    {cats.map((cat) => (
      <CatFactGridItem key={cat.imgUrl} {...cat} />
    ))}
  </div>
);
