import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Visa = memo((props?: Props) => {
  return (
    <svg
      width="52"
      height="40"
      viewBox="0 0 52 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M45.3639 2H6.63573C5.54816 2 4.6665 3.10207 4.6665 4.46154V31.5385C4.6665 32.8979 5.54816 34 6.63573 34H45.3639C46.4515 34 47.3332 32.8979 47.3332 31.5385V4.46154C47.3332 3.10207 46.4515 2 45.3639 2Z"
          fill="#1A1A1A"
        />
      </g>
      <path
        d="M45.3639 2H6.63573C5.54816 2 4.6665 3.10207 4.6665 4.46154V31.5385C4.6665 32.8979 5.54816 34 6.63573 34H45.3639C46.4515 34 47.3332 32.8979 47.3332 31.5385V4.46154C47.3332 3.10207 46.4515 2 45.3639 2Z"
        fill="url(#paint0_linear)"
      />
      <g clipPath="url(#clip0)">
        <path
          d="M23.7614 23.9458H21.0146L22.7313 13.3952H25.4785L23.7614 23.9458ZM18.7037 13.3952L16.085 20.652L15.7751 19.0893L15.7754 19.0899L14.8511 14.3452C14.8511 14.3452 14.7393 13.3952 13.5481 13.3952H9.21877L9.16797 13.5738C9.16797 13.5738 10.4919 13.8493 12.0413 14.7798L14.4278 23.9461H17.2898L21.66 13.3952H18.7037ZM40.3093 23.9458H42.8315L40.6324 13.3949H38.4243C37.4046 13.3949 37.1563 14.1812 37.1563 14.1812L33.0595 23.9458H35.923L36.4956 22.3786H39.9875L40.3093 23.9458ZM37.2867 20.2137L38.73 16.2654L39.5419 20.2137H37.2867ZM33.2743 15.9324L33.6663 13.6667C33.6663 13.6667 32.4567 13.2067 31.1957 13.2067C29.8326 13.2067 26.5955 13.8024 26.5955 16.6995C26.5955 19.4252 30.3948 19.459 30.3948 20.8907C30.3948 22.3225 26.987 22.0659 25.8623 21.1631L25.4539 23.5321C25.4539 23.5321 26.6805 24.1278 28.5544 24.1278C30.4289 24.1278 33.2568 23.1573 33.2568 20.5157C33.2568 17.7725 29.4234 17.5171 29.4234 16.3244C29.4237 15.1314 32.0989 15.2847 33.2743 15.9324Z"
          fill="#2566AF"
        />
        <path
          d="M15.7754 19.0896L14.8511 14.3449C14.8511 14.3449 14.7393 13.3949 13.5481 13.3949H9.21877L9.16797 13.5735C9.16797 13.5735 11.2488 14.0048 13.2447 15.6205C15.1531 17.1648 15.7754 19.0896 15.7754 19.0896Z"
          fill="#E6A540"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.666504"
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
          x1="25.9998"
          y1="2"
          x2="25.9998"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E0E0E0" />
        </linearGradient>
        <clipPath id="clip0">
          <rect
            width="40"
            height="16"
            fill="white"
            transform="translate(6 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Visa;
