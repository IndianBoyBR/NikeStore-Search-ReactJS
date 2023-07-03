import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Bag = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      fill="none"
      viewBox="0 0 20 22"
      {...props}
    >
      <path
        fill="#1A1A1A"
        d="M14 6a1 1 0 01-1-1V2H7v3a1 1 0 01-2 0V2a2 2 0 012-2h6a2 2 0 012 2v3a1 1 0 01-1 1z"
      />
      <path
        fill="#1A1A1A"
        d="M18 4H2a2 2 0 00-2 2v13a3 3 0 003 3h14a3 3 0 003-3V6a2 2 0 00-2-2zm0 15a1 1 0 01-1 1H3a1 1 0 01-1-1V6h16v13z"
      />
    </svg>
  );
});

export default Bag;
