import React from "react";

type Props = {
  isActive: boolean;
};

export default function SearchIcon({ isActive }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_551_2699)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9215 12.0755C10.9698 11.1237 9.41021 11.1402 8.43812 12.1123L0.757014 19.7934C-0.215075 20.7655 -0.231568 22.3251 0.720176 23.2768L11.9215 12.0755Z"
          fill={isActive ? "#474B51" : "#D0D0D0"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.719586 23.2767C1.67133 24.2285 3.2309 24.212 4.20299 23.2399L11.8841 15.5588C12.8562 14.5867 12.8727 13.0271 11.9209 12.0754L0.719586 23.2767Z"
          fill={isActive ? "#222222" : "#A6A6A6"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.1065 2.87202C17.2994 -0.935108 11.1272 -0.934951 7.32024 2.87202C3.51327 6.67899 3.51311 12.8512 7.32024 16.6583L21.1065 2.87202Z"
          fill={isActive ? "#00FFB2" : "#D0D0D0"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.3832 4.59527C16.5279 1.73992 11.8988 1.74004 9.04352 4.59527C6.1883 7.4505 6.18818 12.0796 9.04352 14.935L19.3832 4.59527Z"
          fill={isActive ? "#E6F9FE" : "#EEEEEE"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.32024 16.6584C11.1274 20.4655 17.2995 20.4653 21.1065 16.6584C24.9135 12.8514 24.9136 6.67922 21.1065 2.87209L7.32024 16.6584Z"
          fill={isActive ? "#069F72" : "#A6A6A6"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.04352 14.935C11.8989 17.7904 16.528 17.7902 19.3832 14.935C22.2385 12.0798 22.2386 7.45064 19.3832 4.5953L9.04352 14.935Z"
          fill={isActive ? "#D0F4FE" : "#D7D7D7"}
        />
      </g>
      <defs>
        <clipPath id="clip0_551_2699">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
