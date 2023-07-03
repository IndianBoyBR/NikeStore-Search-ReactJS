import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const Rotate360 = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const RotateStroke = keyframes`
  0% {
    stroke-dasharray: 0 150;
    stroke-dashoffset: 0;
  }
  47.5% {
    stroke-dasharray: 42 150;
    stroke-dashoffset: -16;
  }
  95%,
  100% {
    stroke-dasharray: 42 150;
    stroke-dashoffset: -59;
  }
`;

const G = styled.g`
  transform-origin: center;
  animation: ${Rotate360} 2s linear infinite;
`;

const Circle = styled.circle`
  stroke-linecap: round;
  animation: ${RotateStroke} 1.5s ease-in-out infinite;
`;

interface Props extends React.SVGProps<SVGSVGElement> {}

const Loading = memo((props?: Props) => {
  return (
    <svg
      width="70"
      height="70"
      stroke="#000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G>
        <Circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></Circle>
      </G>
    </svg>
  );
});

export default Loading;
