import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const ArrowRight = memo((props?: Props) => {
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
        d="M5.667 6.002c0 .167-.062.32-.164.436L1.51 11.096a.665.665 0 01-1.177-.43c0-.165.06-.316.161-.433L4.122 6 .498 1.772A.667.667 0 111.507.9l4 4.666.003.005a.664.664 0 01.157.425v.006z"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ArrowRight;
