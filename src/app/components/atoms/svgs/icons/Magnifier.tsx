import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Magnifier = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M5.333 0a5.333 5.333 0 103.27 9.547l1.592 1.591a.667.667 0 00.943-.943L9.547 8.604A5.333 5.333 0 005.334 0zm-4 5.333a4 4 0 118 0 4 4 0 01-8 0z"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default Magnifier;
