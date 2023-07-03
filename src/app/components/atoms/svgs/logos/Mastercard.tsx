import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Mastercard = memo((props?: Props) => {
  return (
    <svg
      width="51"
      height="40"
      viewBox="0 0 51 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M44.6974 2H5.96923C4.88165 2 4 3.10207 4 4.46154V31.5385C4 32.8979 4.88165 34 5.96923 34H44.6974C45.785 34 46.6667 32.8979 46.6667 31.5385V4.46154C46.6667 3.10207 45.785 2 44.6974 2Z"
          fill="#1A1A1A"
        />
      </g>
      <path
        d="M44.6974 2H5.96923C4.88165 2 4 3.10207 4 4.46154V31.5385C4 32.8979 4.88165 34 5.96923 34H44.6974C45.785 34 46.6667 32.8979 46.6667 31.5385V4.46154C46.6667 3.10207 45.785 2 44.6974 2Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M29.6594 26.1566H20.4395V9.58691H29.6596L29.6594 26.1566Z"
        fill="#FF5F00"
      />
      <path
        d="M21.0239 17.8714C21.0239 14.5102 22.5977 11.516 25.0484 9.58649C23.1934 8.12377 20.899 7.32989 18.5366 7.33339C12.7173 7.33339 8 12.0513 8 17.8714C8 23.6914 12.7173 28.4093 18.5366 28.4093C20.899 28.4129 23.1935 27.619 25.0486 26.1562C22.5981 24.227 21.0239 21.2327 21.0239 17.8714Z"
        fill="#EB001B"
      />
      <path
        d="M42.0983 17.8718C42.0983 23.6919 37.3811 28.4098 31.5617 28.4098C29.199 28.4133 26.9043 27.6194 25.0488 26.1567C27.5002 24.2272 29.074 21.2332 29.074 17.8718C29.074 14.5105 27.5002 11.5165 25.0488 9.58698C26.9042 8.1243 29.1989 7.33044 31.5615 7.33387C37.3809 7.33387 42.0982 12.0518 42.0982 17.8718"
        fill="#F79E1B"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="50.6667"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="25.3333"
          y1="2"
          x2="25.3333"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Mastercard;
