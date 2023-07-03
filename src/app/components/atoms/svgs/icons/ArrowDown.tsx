import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const ArrowDown = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="6"
      fill="none"
      viewBox="0 0 12 6"
      {...props}
    >
      <path
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M5.998 5.667a.664.664 0 01-.436-.164L.904 1.51a.665.665 0 01.43-1.177c.165 0 .317.06.433.16L6 4.123 10.23.498a.667.667 0 11.872 1.009l-4.667 4-.005.003a.664.664 0 01-.425.157h-.006z"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ArrowDown;
