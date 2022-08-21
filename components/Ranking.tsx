import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import * as TYPE from "../src/types";
import { imgLoader } from "../lib/utils";
import RankingRow from "./RankingRow";

interface RankingProps {
  waterBrands: TYPE.BRAND[];
}

export default function Ranking({ waterBrands }: RankingProps): JSX.Element {
  const sortedWaterBrands = [...waterBrands].sort((a, b) => {
    if (a.passed && b.passed) {
      if (a.price < b.price) return -1;
      return 1;
    }
    if (a.passed && !b.passed) return -1;
    if (!a.passed && b.passed) return 1;
    return 0;
  });

  const router = useRouter();

  const handleClick = () => {
    router.push("/detail-demo");
  };

  return (
    <div className="flex flex-col gap-2 border-t">
      {sortedWaterBrands.map((waterBrand, index) => {
        const imageJSX = (
          <Image
            loader={imgLoader}
            src={waterBrand.image_url}
            alt={waterBrand.name}
            width={64}
            height={64}
            priority
          />
        );

        return (
          <RankingRow
            key={waterBrand.id}
            imageJSX={imageJSX}
            isPassed={waterBrand.passed}
            rankingNo={index + 1}
            name={waterBrand.name}
            company={waterBrand.company}
            price={waterBrand.price}
          />
        );
      })}
    </div>
  );
}
