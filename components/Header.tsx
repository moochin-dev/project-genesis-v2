import React from "react";

export default function Header() {
  return (
    <nav className="h-16 mt-10 mb-8">
      <div className="flex flex-col gap-2">
        <p className="contentSubTitle fontColor707070 ">당신이 먹는 생수</p>
        <p className="mainTitle fontColor222222">수질 랭킹</p>
      </div>
    </nav>
  );
}
