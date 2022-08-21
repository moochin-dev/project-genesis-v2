import React from "react";
import LogoIcon from "../src/svg/LogoIcon";
import ShareIcon from "../src/svg/ShareIcon";

export default function GNB() {
  return (
    <nav className="flex justify-between items-center h-14">
      <LogoIcon />
      <ShareIcon />
    </nav>
  );
}
