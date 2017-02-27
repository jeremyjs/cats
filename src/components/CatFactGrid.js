import React from 'react';
import { CatFactGridItem } from './CatFactGridItem';

export const CatFactGrid = ({ cats }) => (
  <div className="CatFactGrid">
    {cats.map(CatFactGridItem)}
  </div>
);
