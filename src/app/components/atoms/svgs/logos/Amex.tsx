import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Amex = memo((props?: Props) => {
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
          d="M45.0309 2H6.30273C5.21515 2 4.3335 3.10207 4.3335 4.46154V31.5385C4.3335 32.8979 5.21515 34 6.30273 34H45.0309C46.1185 34 47.0002 32.8979 47.0002 31.5385V4.46154C47.0002 3.10207 46.1185 2 45.0309 2Z"
          fill="#1A1A1A"
        />
      </g>
      <path
        d="M45.0309 2H6.30273C5.21515 2 4.3335 3.10207 4.3335 4.46154V31.5385C4.3335 32.8979 5.21515 34 6.30273 34H45.0309C46.1185 34 47.0002 32.8979 47.0002 31.5385V4.46154C47.0002 3.10207 46.1185 2 45.0309 2Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M14.0001 8.66663H37.3335C38.2535 8.66663 39.0002 9.41326 39.0002 10.3341V26.1674C39.0002 27.0874 38.2535 27.8341 37.3335 27.8341H14.0001C13.0793 27.8342 12.3335 27.0874 12.3335 26.1675V10.3341C12.3335 9.41326 13.0801 8.66663 14.0001 8.66663Z"
        fill="#26A6D1"
      />
      <path
        d="M16.6334 15.3328L14 21.1603H17.1525L17.5433 20.2312H18.4366L18.8275 21.1603H22.2975V20.4511L22.6067 21.1603H24.4016L24.7108 20.4362V21.1603H31.9275L32.805 20.2553L33.6267 21.1603L37.3334 21.1678L34.6917 18.2628L37.3334 15.3328H33.6842L32.83 16.2211L32.0342 15.3328H24.1834L23.5092 16.8369L22.8193 15.3328H19.6733V16.0178L19.3234 15.3328C19.3234 15.3328 16.6334 15.3328 16.6334 15.3328ZM17.2433 16.1603H18.78L20.5267 20.112V16.1603H22.2101L23.5592 18.9936L24.8026 16.1603H26.4776V20.3419H25.4584L25.4501 17.0652L23.9642 20.3419H23.0525L21.5583 17.0652V20.3419H19.4617L19.0642 19.4045H16.9167L16.52 20.3411H15.3967L17.2433 16.1603ZM27.41 16.1603H31.5542L32.8217 17.5294L34.13 16.1603H35.3976L33.4717 18.262L35.3976 20.3395H34.0726L32.805 18.9544L31.49 20.3395H27.41V16.1603ZM17.9909 16.8678L17.2834 18.5378H18.6976L17.9909 16.8678ZM28.4334 17.0261V17.7895H30.6942V18.6403H28.4334V19.4736H30.9692L32.1475 18.2462L31.0192 17.0254H28.4334V17.0261Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0.333496"
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
          x1="25.6668"
          y1="2"
          x2="25.6668"
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

export default Amex;
