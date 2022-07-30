import Image from "next/image";
import { useRouter } from "next/router";
import * as TYPE from "../src/types";
import Header from "./Header";
import { imgLoader } from "../lib/utils";

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

  console.log(waterBrands);

  const router = useRouter();

  const handleClick = () => {
    router.push("/detail-demo");
  };

  return (
    <>
      <Header pageName="생수" />
      <div className="flex flex-col gap-2">
        {sortedWaterBrands.map((waterBrand, index) => {
          return (
            <div key={waterBrand.id} className="h-20 flex gap-2">
              <div className="my-2 w-16 h-16 border rounded-lg overflow-hidden">
                <Image
                  loader={imgLoader}
                  src={waterBrand.image_url}
                  alt={waterBrand.name}
                  width={64}
                  height={64}
                  priority
                />
              </div>
              <div className="flex-1 flex border-b">
                <div className="mt-2 flex gap-4">
                  {waterBrand.passed ? (
                    <span className="font-semibold">{index + 1}</span>
                  ) : (
                    <span className="font-semibold">X</span>
                  )}
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="text-xs">
                      {waterBrand.name}
                    </span>
                    <span className="font-light text-xs">
                      {waterBrand.company}
                    </span>
                    <span className="font-light text-xs">{`${waterBrand.price} 원/100ml`}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                  <button
                    className="rounded-full border text-sm w-20 h-7"
                    onClick={handleClick}
                  >
                    세부정보
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
