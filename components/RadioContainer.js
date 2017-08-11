import React from 'react';
import GoeeyRadio from './GoeeyRadio';

export default ({label, width, height, clicked, selected}) => {
  return (
    <div className="radioContainer">
      <GoeeyRadio width={width} height={height} clicked={clicked} selected={selected} />
      <div className={`radioLabel centeredContent ${selected ? 'selected' : ''}`}>{label}</div>
    </div>
  );
};
