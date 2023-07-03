import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const Hipercard = memo((props?: Props) => {
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
      <g clipPath="url(#clip0)">
        <path
          d="M16.761 10H12.9515C11.2682 10.0796 9.89228 10.7576 9.49499 12.1556C9.28784 12.8848 9.17383 13.6855 9.01184 14.4414C8.18834 18.2845 7.45813 22.2336 6.67041 26H36.3289C38.6218 26 40.1962 25.5155 40.6216 23.6956C40.8192 22.8502 41.0085 21.8928 41.1976 20.964C41.9348 17.3427 42.6726 13.7216 43.4277 10H16.761Z"
          fill="#822124"
        />
        <path
          d="M16.4636 15.6865C16.6229 15.5768 16.8281 15.077 16.5937 14.8689C16.5194 14.803 16.3953 14.7839 16.222 14.8132C16.0613 14.8403 15.9689 14.8949 15.9061 14.9804C15.8052 15.1179 15.7127 15.5326 15.869 15.6866C16.0212 15.8366 16.3622 15.7563 16.4636 15.6865ZM14.1965 14.8689C14.0823 15.6096 13.9537 16.3358 13.8248 17.0617C12.997 17.0704 12.1517 17.1025 11.3533 17.0431C11.5041 16.3329 11.6122 15.58 11.7621 14.8689H10.8701C10.5508 16.6804 10.2603 18.5209 9.90381 20.2952H10.8144C10.9572 19.3851 11.0908 18.4656 11.2789 17.6006C12.0553 17.5815 12.9858 17.5482 13.7319 17.6192C13.5781 18.5185 13.3922 19.3855 13.2488 20.2952H14.1594C14.452 18.4569 14.7602 16.6343 15.1258 14.8689H14.1965ZM27.0745 16.4299C26.366 16.1437 25.809 16.6273 25.5508 17.0803C25.6093 16.8788 25.6334 16.6428 25.6809 16.4299H24.9747C24.8021 17.7687 24.5477 19.0257 24.3058 20.2952H25.1049C25.2169 19.5417 25.2652 18.5259 25.5137 17.805C25.7122 17.229 26.2319 16.7383 26.9817 17.006C26.9921 16.7935 27.053 16.6313 27.0745 16.4299ZM27.5205 19.3847C27.4468 19.1943 27.4278 18.8802 27.4462 18.6412C27.4875 18.1043 27.6832 17.4506 27.9851 17.1546C28.4018 16.7462 29.2245 16.8138 29.8806 17.0431C29.9009 16.822 29.9454 16.6247 29.9736 16.4113C28.8975 16.2356 27.8763 16.345 27.3349 16.9131C26.8047 17.4693 26.4574 18.7476 26.7029 19.5519C26.9904 20.4931 28.2795 20.5443 29.3232 20.1838C29.3694 19.9946 29.3938 19.7837 29.4347 19.5892C28.8643 19.8854 27.7739 20.0393 27.5205 19.3847ZM36.4961 16.4484C35.7899 16.0953 35.2019 16.6878 34.9724 17.0431C35.0377 16.8608 35.0415 16.6167 35.1024 16.4298H34.3963C34.2059 17.7571 33.9764 19.0452 33.7088 20.2951H34.5264C34.5316 19.7828 34.6322 19.4039 34.7122 18.9015C34.883 17.8287 35.134 16.6523 36.3848 17.0059C36.4261 16.8245 36.4434 16.6187 36.4961 16.4484ZM15.6459 16.4299C15.6243 16.433 15.6257 16.4593 15.6273 16.4856C15.4513 17.8024 15.2129 19.057 14.9584 20.2951H15.7574C15.9494 18.9695 16.1693 17.6719 16.445 16.4298L15.6459 16.4299ZM22.6703 16.3556C22.0929 16.4001 21.6049 16.5662 21.258 16.9317C20.8326 17.3798 20.4881 18.3707 20.5891 19.2732C20.7331 20.5606 22.336 20.5143 23.6181 20.2023C23.6399 19.9763 23.6946 19.7832 23.7296 19.5705C23.2015 19.7681 22.2844 20.044 21.7411 19.7006C21.331 19.4412 21.3286 18.7847 21.4624 18.2139C22.324 18.1865 23.2196 18.1917 24.0825 18.2139C24.1372 17.8094 24.2939 17.3684 24.1569 16.9689C23.9762 16.4414 23.3289 16.3048 22.6703 16.3556ZM23.4322 17.7679H21.5552C21.6147 17.3364 22.0029 16.8621 22.6145 16.8387C23.1902 16.8167 23.6023 17.0501 23.4322 17.7679ZM19.6413 16.4299C18.965 16.1758 18.1408 16.4791 17.7834 16.7676C17.7847 16.7803 17.7749 16.782 17.7643 16.783C17.7704 16.7778 17.777 16.7727 17.7834 16.7676C17.7833 16.7665 17.7832 16.7655 17.783 16.7644C17.789 16.6404 17.8327 16.5539 17.8387 16.4299H17.1512C16.8646 18.3362 16.5248 20.1891 16.1663 22.0234H16.9654C17.081 21.3091 17.1574 20.5554 17.3185 19.8864C17.501 20.59 18.6925 20.4556 19.1954 20.1837C20.2328 19.6226 21.033 16.9526 19.6413 16.4299ZM19.0095 19.5705C18.582 20.0232 17.531 20.0165 17.4485 19.2545C17.4126 18.923 17.5361 18.5754 17.5973 18.2325C17.659 17.8853 17.7035 17.5523 17.7644 17.2476C18.1855 16.7334 19.4229 16.6713 19.5484 17.5263C19.6573 18.2686 19.3635 19.1955 19.0095 19.5705ZM39.4694 14.7574C39.4009 15.3579 39.3093 15.9353 39.1907 16.4856C37.2306 15.8651 36.0286 17.3073 36.0502 19.0873C36.0545 19.4316 36.1137 19.7729 36.3289 20.0165C36.7 20.436 37.7623 20.5365 38.2988 20.1836C38.4025 20.1154 38.5087 19.9911 38.5775 19.905C38.6292 19.8401 38.7112 19.6702 38.7262 19.7191C38.6979 19.9077 38.6557 20.0824 38.6519 20.2951H39.3766C39.5164 18.2915 39.9482 16.5802 40.2686 14.7573H39.4694V14.7574H39.4694ZM37.6855 19.8677C37.1476 19.8793 36.8801 19.5464 36.8677 18.9944C36.8463 18.0276 37.2704 16.9536 38.1315 16.8573C38.5324 16.8125 38.8226 16.9057 39.1164 17.006C38.8467 18.0919 38.944 19.8408 37.6855 19.8677ZM30.7911 16.4299C30.7518 16.6507 30.6914 16.8505 30.6425 17.0617C31.114 16.9434 32.5823 16.5809 32.7238 17.2103C32.7708 17.4194 32.6897 17.6416 32.6308 17.805C31.3032 17.6793 30.221 17.8998 29.9363 18.8457C29.7456 19.4792 29.9576 20.1026 30.3637 20.2767C31.1458 20.6117 32.0971 20.2279 32.4264 19.7006C32.3922 19.8831 32.3598 20.0676 32.3708 20.2952H33.0583C33.0657 19.6367 33.1615 19.1037 33.2627 18.5112C33.349 18.0066 33.5114 17.507 33.4857 17.0617C33.4266 16.0418 31.7369 16.4025 30.7911 16.4299ZM32.0919 19.5519C31.6801 19.955 30.5242 20.0695 30.6425 19.1059C30.7406 18.3055 31.6121 18.1354 32.5564 18.251C32.4862 18.6888 32.4057 19.2447 32.0919 19.5519Z"
          fill="white"
        />
      </g>
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
        <clipPath id="clip0">
          <rect
            width="36.7647"
            height="16"
            fill="white"
            transform="translate(6.6665 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Hipercard;