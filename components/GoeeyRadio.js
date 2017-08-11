import React from 'react';

export default ({width, height, clicked, selected}) => {
  return (
    <div>
      <svg
        width={width || 50}
        height={height || 50}
        viewBox={"0 0 " + 125 + " " + 125}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo" height="300%" y="-100%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7"
            />
          </filter>
        </defs>

        <g id="radioContainer" className={selected ? 'selected' : ''} overflow="hidden" filter="url(#goo)" onClick={clicked}>
          <g
            id="clickLineGroup"
            strokeWidth="5"
          >
            <path d="M 0    40 L 60 65 Z"/>
            <path d="M 35   0 L 60 65 Z"/>
            <path d="M 85   0 L 60 65 Z"/>
            <path d="M 120  40 L 60 65 Z"/>
            <path d="M 120  90 L 60 65 Z"/>
            <path d="M 85   125 L 60 65 Z"/>
            <path d="M 35   125 L 60 65 Z"/>
            <path d="M 0    90 L 60 65 Z"/>
          </g>

          <circle
            cx="60"
            cy="65"
            r="10"
          />
          <ellipse
            fill="none"
            cx={60}
            cy={65}
            rx={20}
            ry={20}
          />

        </g>
      </svg>

    </div>
  );
};
