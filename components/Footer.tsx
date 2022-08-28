import React, { useState } from "react";
import { useRouter } from "next/router";
import RankingPageButton from "./Footer/Buttons/RankingPageButton";
import SearchPageButton from "./Footer/Buttons/SearchPageButton";
import DetailPageButton from "./Footer/Buttons/DetailPageButton";

export default function Footer(): JSX.Element {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const [isRankingPage, setIsRankingPage] = useState(true);
  const [isSearchPage, setIsSerachPage] = useState(false);
  const [isDetailPage, setIsDetailPage] = useState(false);

  return (
    <footer className="flex w-full h-16 bg-slate-50 justify-between px-8 pt-1 footer-box">
      <RankingPageButton
        isActive={isRankingPage}
        handleClick={handleHomeClick}
      />
      <SearchPageButton isActive={isSearchPage} handleClick={handleHomeClick} />
      <DetailPageButton isActive={isDetailPage} handleClick={handleHomeClick} />
    </footer>
  );
}


