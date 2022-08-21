import React from "react";
import { useRouter } from "next/router";

export default function Footer(): JSX.Element {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <footer className="flex w-full h-20 bg-slate-50 justify-between px-6">
      <button
        className="flex flex-col justify-center"
        onClick={handleHomeClick}
      >
        <div className="h-14 w-14 flex flex-col">
          <div className="border rounded-sm h-10 w-10 mx-auto"></div>
          <span className="text-xs mx-auto font-extralight">HOME</span>
        </div>
      </button>
      <button className="flex flex-col justify-center">
        <div className="h-14 w-14 flex flex-col">
          <div className="border rounded-sm h-10 w-10 mx-auto"></div>
          <span className="text-xs mx-auto font-extralight">RANK</span>
        </div>
      </button>
      <button className="flex flex-col justify-center">
        <div className="h-14 w-14 flex flex-col">
          <div className="border rounded-sm h-10 w-10 mx-auto"></div>
          <span className="text-xs mx-auto font-extralight">SEARCH</span>
        </div>
      </button>
      <button className="flex flex-col justify-center">
        <div className="h-14 w-14 flex flex-col">
          <div className="border rounded-sm h-10 w-10 mx-auto"></div>
          <span className="text-xs mx-auto font-extralight">CONTACT</span>
        </div>
      </button>
      <button className="flex flex-col justify-center">
        <div className="h-14 w-14 flex flex-col">
          <div className="border rounded-sm h-10 w-10 mx-auto"></div>
          <span className="text-xs mx-auto font-extralight">SHARE</span>
        </div>
      </button>
    </footer>
  );
}
