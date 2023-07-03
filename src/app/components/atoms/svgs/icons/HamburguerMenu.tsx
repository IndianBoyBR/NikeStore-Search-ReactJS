import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const HamburguerMenu = memo((props?: Props) => {
  return (
    <svg viewBox="0 0 100 70" width="36" height="36" {...props}>
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );
});

export default HamburguerMenu;
