import React from "react";
import DetailButton from "../src/svg/DetailButton";

type props = {
  key: number;
  imageJSX: JSX.Element;
  isPassed: boolean;
  rankingNo: number;
  name: string;
  company: string;
  price: number;
};
/**
 * Ranking 컴포넌트의 한 행을 표현하는 RankingRow 컴포넌트
 */
export default function RankingRow({
  key,
  imageJSX,
  isPassed,
  rankingNo,
  name,
  company,
  price,
}: props): JSX.Element {
  return (
    <div className="pl-2 pt-2 w-full h-19 flex gap-2" key={key}>
      {/* 이미지 */}
      <div className="pb-2 w-15 h-15 border rounded-lg overflow-hidden">
        {imageJSX}
      </div>
      <div className="pb-2 flex border-b w-full">
        <div className="flex">
          {/* 랭킹 (passed가 false인 경우 X로 표현) */}
          <div className="w-5 h-15">
            {isPassed ? (
              <span className="font-semibold">{rankingNo}</span>
            ) : (
              <span className="font-semibold">X</span>
            )}
          </div>
          {/* 상품명, 브랜드, 가격 */}
          <div className="p-1 flex flex-col">
            <p className="contentChartTitle">{name}</p>
            <p className="contentCharBrand mt-2">{company}</p>
            <p className="contentCharPrice mt-3">{`${price} 원/100ml`}</p>
          </div>
        </div>
        <div className="ml-auto mr-2 flex flex-col justify-center">
          <DetailButton />
        </div>
      </div>
    </div>
  );
}
