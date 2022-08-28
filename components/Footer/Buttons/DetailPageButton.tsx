import React from "react";
import DetailIcon from "../../../src/svg/DetailIcon";
import DetailText from "../../../src/svg/DetailText";

type Props = {
  isActive: boolean;
  handleClick: () => void;
};

export default function DetailPageButton({ isActive, handleClick }: Props) {
  return (
    <div className="flex flex-col items-center gap-2.5" onClick={handleClick}>
      <DetailIcon isActive={isActive} />
      <DetailText isActive={isActive} />
    </div>
  );
}
