import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const FacebookRoundedWhite = memo((props?: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.6668 16C26.6668 10.1084 21.8918 5.33337 16.0002 5.33337C10.1085 5.33337 5.3335 10.1084 5.3335 16C5.3335 21.8917 10.1085 26.6667 16.0002 26.6667C16.0627 26.6667 16.1252 26.6667 16.1877 26.6625V18.3625H13.896V15.6917H16.1877V13.725C16.1877 11.4459 17.5793 10.2042 19.6127 10.2042C20.5877 10.2042 21.4252 10.275 21.6668 10.3084V12.6917H20.2668C19.1627 12.6917 18.946 13.2167 18.946 13.9875V15.6875H21.5918L21.246 18.3584H18.946V26.2542C23.4043 24.975 26.6668 20.8709 26.6668 16V16Z"
        fill="white"
      />
    </svg>
  );
});

export default FacebookRoundedWhite;
