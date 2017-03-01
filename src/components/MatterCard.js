import React from 'react';
import { MatterButton } from './MatterButton';
import '../stylesheets/matter-card.scss';

export const MatterCard = ({ width, imgSrc, overlayText, actions }) => (
  <div className="MatterCard" style={{ width }}>
    <div className="image-container">
      <img className="image" src={imgSrc} style={{ width }} />
      <div className="overlay">
        {overlayText}
      </div>
    </div>
    <div className="actions">
      {actions.map((action, index) => (
        <MatterButton key={index} {...action} />
      ))}
    </div>
  </div>
);
