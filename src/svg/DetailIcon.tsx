import React from "react";

type Props = {
  isActive: boolean;
};

export default function DetailIcon({ isActive }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 0H12V24H22V4H18V0Z"
        fill={isActive ? "#D0F4FE" : "#A6A6A6"}
      />
      <path d="M18 0L20 2L22 4H18V0Z" fill={isActive ? "#AACCD6" : "#707070"} />
      <rect
        x="2"
        width="10"
        height="24"
        fill={isActive ? "#E6F9FE" : "#D0D0D0"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 8H17.5C17.7761 8 18 7.77614 18 7.5C18 7.22386 17.7761 7 17.5 7H12V8Z"
        fill={isActive ? "#222222" : "#D7D7D7"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 13H17.5C17.7761 13 18 12.7761 18 12.5C18 12.2239 17.7761 12 17.5 12H12V13Z"
        fill={isActive ? "#222222" : "#D7D7D7"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 18H17.5C17.7761 18 18 17.7761 18 17.5C18 17.2239 17.7761 17 17.5 17H12V18Z"
        fill={isActive ? "#222222" : "#D7D7D7"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 17H6.5C6.22386 17 6 17.2239 6 17.5C6 17.7761 6.22386 18 6.5 18H12V17Z"
        fill={isActive ? "#474B51" : "#EEEEEE"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 12H6.5C6.22386 12 6 12.2239 6 12.5C6 12.7761 6.22386 13 6.5 13H12V12Z"
        fill={isActive ? "#474B51" : "#EEEEEE"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H12V7Z"
        fill={isActive ? "#474B51" : "#EEEEEE"}
      />
    </svg>
  );
}
