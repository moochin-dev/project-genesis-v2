import React from "react";
import RankingIcon from "../../../src/svg/RankingIcon";
import RankingText from "../../../src/svg/RankingText";

type Props = {
  isActive: boolean;
  handleClick: () => void;
};

export default function RankingPageButton({ isActive, handleClick }: Props) {
  return (
    <div className="flex flex-col items-center gap-2.5" onClick={handleClick}>
      <RankingIcon isActive={isActive} />
      <RankingText isActive={isActive} />
    </div>
  );
}
