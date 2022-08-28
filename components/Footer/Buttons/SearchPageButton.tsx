import React from "react";
import SearchIcon from "../../../src/svg/SearchIcon";
import SearchText from "../../../src/svg/SearchText";

type Props = {
  isActive: boolean;
  handleClick: () => void;
};

export default function SearchPageButton({ isActive, handleClick }: Props) {
  return (
    <div className="flex flex-col items-center gap-2.5" onClick={handleClick}>
      <SearchIcon isActive={isActive} />
      <SearchText isActive={isActive} />
    </div>
  );
}
