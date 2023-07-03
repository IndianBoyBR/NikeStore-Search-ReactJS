import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const ArrowLeft = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="12"
      fill="none"
      viewBox="0 0 6 12"
      {...props}
    >
      <path
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M.333 6.002c0 .167.063.32.165.436l3.992 4.658a.665.665 0 001.177-.43.664.664 0 00-.16-.433L1.877 6l3.625-4.228A.667.667 0 104.494.9l-4 4.666-.004.005a.664.664 0 00-.156.425v.006z"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ArrowLeft;
