import React from 'react';
import { domAddClass } from '../helpers/domAddClass';
import '../stylesheets/matter-button.scss';

const RippleElement = () => {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  return ripple;
}

const createRipple = (e) => {
  const target = e.target;
  const button = target.closest('button');

  // create .ripple element
  const ripple = RippleElement();

  // set size of ripple
  // use button's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
  const radius = Math.max(button.offsetHeight, button.offsetWidth);
  console.log('radius:', radius);
  ripple.style.height = `${radius}px`;
  ripple.style.width = `${radius}px`;

  // get click coordinates
  // logic = click coordinates relative to page - button's position relative to page - half of self height/width to make it controllable from the center;
  const rect = button.getBoundingClientRect();
  console.log('rect:', rect);

  const offset = {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft,
  };
  console.log('offset:', offset);

  let x = e.pageX - offset.left - radius / 2;
  let y = e.pageY - offset.top - radius / 2;
  console.log('x, y:', x, y);

  // set the position and add class .animate
  ripple.style.top = `${y}px`;
  ripple.style.left = `${x}px`;
  domAddClass(ripple, 'animate');

  button.prepend(ripple);
}

export const MatterButton = ({ label, onClick, style }) => (
  <button className="MatterButton" onClick={(e) => { createRipple(e); onClick(e); }} style={style}>
    {label}
  </button>
);
