import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const PinLocation = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      fill="none"
      viewBox="0 0 16 20"
      {...props}
    >
      <path
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M8 2c-1.574 0-3.095.657-4.225 1.846C2.644 5.036 2 6.66 2 8.364c0 2.48 1.536 4.901 3.243 6.796A23.147 23.147 0 008 17.745a23.145 23.145 0 002.757-2.585C12.464 13.265 14 10.844 14 8.364c0-1.704-.644-3.328-1.775-4.518C11.095 2.657 9.575 2 8 2zm0 17c-.574.819-.574.819-.575.818l-.002-.001-.006-.004-.018-.014a9.849 9.849 0 01-.305-.225A25.142 25.142 0 013.757 16.5C1.964 14.508 0 11.61 0 8.364 0 6.16.831 4.04 2.325 2.468 3.821.894 5.861 0 8 0s4.179.894 5.675 2.468C15.168 4.04 16 6.16 16 8.364c0 3.246-1.964 6.144-3.757 8.135a25.146 25.146 0 01-3.337 3.075 14.92 14.92 0 01-.305.225l-.018.014-.006.004h-.002c0 .001 0 .002-.575-.817zm0 0l.574.819a1 1 0 01-1.149 0L8 19z"
        clipRule="evenodd"
      />
      <path
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M8 7a1 1 0 100 2 1 1 0 000-2zM5 8a3 3 0 116 0 3 3 0 01-6 0z"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default PinLocation;
