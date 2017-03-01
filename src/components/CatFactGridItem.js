import React from 'react';
import { MatterCard } from './MatterCard';
import '../stylesheets/cat-fact-grid-item.scss';

const remove = ({ target }) => {
  const gridItemEl = target.closest('.CatFactGridItem');
  gridItemEl.style.opacity = 0;
  window.setTimeout(() => {
    gridItemEl.parentNode.removeChild(gridItemEl);
  }, 250);
};

const actions = [
  {
    label: 'Remove',
    onClick: remove,
    style: {
      color: 'red',
    },
  },
];

export const CatFactGridItem = ({ imgUrl, fact }) => (
  <div className="CatFactGridItem">
    <MatterCard
      imgSrc={imgUrl}
      overlayText={fact}
      actions={actions}
      width={300}
    />
  </div>
);
