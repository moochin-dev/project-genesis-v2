import Image from "next/image";
import { imgLoader } from "../lib/utils";

export default function Detail() {
  return (
    <>
      <div className="flex w-full py-4 gap-4 justify-center border-b">
        <div className="border rounded-lg overflow-hidden">
          <Image
            loader={imgLoader}
            src={
              "https://passu-content.s3.ap-northeast-2.amazonaws.com/img/1.jpeg?w=128"
            }
            alt={"삼다수"}
            width={128}
            height={128}
            priority
          />
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="font-semibold text-lg">제주 삼다수</span>
            <span className="font-light text-sm my-auto">삼다수</span>
          </div>
          <span>제주특별자치도개발공사</span>
          <p>
            49
            <span className="font-extralight text-sm">원/100ml</span>
          </p>
          <div className="flex mt-auto gap-2">
            <button className="rounded-full text-white text-sm w-20 h-7 bg-sky-400">
              구매하기
            </button>
            <span className="font-extralight text-xs my-auto">
              쿠팡으로 이동
            </span>
          </div>
        </div>
      </div>
      <div className="h-14 overflow-auto border-b text-sm">
        <div className="flex divide-x h-full w-max">
          <div className="h-full w-24 flex flex-col justify-center">
            <span className="mx-auto font-light">수질 부적합</span>
            <span className="mx-auto font-light">판정 횟수</span>
          </div>
          <div className="h-full w-24 flex flex-col justify-center">
            <span className="mx-auto font-light">가격 랭킹</span>
          </div>
          <div className="h-full w-24 flex flex-col justify-center">
            <span className="mx-auto font-light">수원지 정보</span>
          </div>
          <div className="h-full w-24 flex flex-col justify-center">
            <span className="mx-auto font-light">미네랄 함량</span>
          </div>
          <div className="h-full w-24 flex flex-col justify-center">
            <span className="mx-auto font-light">성분표</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 border-b">
        <span className="font-semibold text-lg mx-auto">
          수질 부적합 판정 횟수
        </span>
        <span className="font-light mx-auto">1998년 출시 이후로</span>
        <span className="font-black text-7xl mx-auto">
          <span className="text-sky-500 text-9xl">0</span>회
        </span>
      </div>
      <div className="flex flex-col py-4 border-b">
        <span className="font-semibold text-lg mx-auto">가격 랭킹</span>
        <span className="font-light mx-auto">26개 브랜드 중</span>
        <span className="font-black text-7xl mx-auto">
          <span className="text-sky-500 text-7xl">10</span>위
        </span>
      </div>
      <div className="flex flex-col py-4 border-b">
        <span className="font-semibold text-lg mx-auto">수원지 정보</span>
        <div className="mt-3  bg-slate-100 h-40 rounded-lg"></div>
      </div>
      <div className="flex flex-col py-4 border-b">
        <span className="font-semibold text-lg mx-auto">미네랄 함량</span>
        <div className="mt-3  bg-slate-100 h-40 rounded-lg"></div>
      </div>
      <div className="flex flex-col py-4 border-b">
        <span className="font-semibold text-lg mx-auto">성분표</span>
        <div className="mt-3  bg-slate-100 h-40 rounded-lg"></div>
      </div>
    </>
  );
}
