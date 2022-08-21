import React from "react";

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
    <div className="p-2 h-19 flex gap-2" key={key}>
      {/* 이미지 */}
      <div className="w-15 h-15 border rounded-lg overflow-hidden">
        {imageJSX}
      </div>
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
          <p className="contentText">{company}</p>
          <p>{`${price} 원/100ml`}</p>
        </div>
      </div>
    </div>
  );
}
