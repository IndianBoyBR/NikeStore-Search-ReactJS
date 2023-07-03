import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Nike = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="32"
      fill="none"
      viewBox="0 0 91 32"
      {...props}
    >
      <path
        fill="#000"
        d="M51.228 10.309l-5.607 1.49-15.559 4.12c-5.494 1.376-10.3 3.208-14.932 1.604C8.834 14.773 8.947 7.614 13.64 0 5.343 6.93-9.59 29.088 10.607 31.325c2.572.343 7.153-.57 12.128-2.688l22.887-9.504L90.76.457l-39.533 9.851z"
      />
    </svg>
  );
});

export default Nike;
