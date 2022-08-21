import React from "react";
import LogoIcon from "../src/svg/LogoIcon";
import ShareIcon from "../src/svg/ShareIcon";

export default function GNB() {
  return (
    <div className="flex justify-between px-3 items-center">
      <LogoIcon />
      <ShareIcon />
    </div>
  );
}
