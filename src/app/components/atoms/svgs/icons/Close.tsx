import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Close = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#1A1A1A"
        d="M17.448 19.333a1.333 1.333 0 101.885-1.885L11.886 10l7.447-7.448A1.333 1.333 0 1017.448.667L10 8.114 2.552.667A1.333 1.333 0 10.667 2.552L8.114 10 .667 17.448a1.333 1.333 0 101.885 1.885L10 11.886l7.448 7.447z"
      />
    </svg>
  );
});

export default Close;
