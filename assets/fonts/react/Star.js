import React from 'react';
export const Star = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`svgtofont ${props.className ? props.className : ''}`}><path d="m16.3 37.5 7.7-4.6 7.7 4.65-2.1-8.7L36.35 23l-8.9-.8L24 14l-3.45 8.15-8.9.8 6.75 5.85Zm-5.1 7.1 3.4-14.55-11.35-9.8L18.2 19 24 5.25 29.8 19l14.95 1.25-11.35 9.8 3.4 14.55L24 36.9ZM24 26.25Z" fillRule="evenodd" /></svg>
);
