// todo..

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";

export default function Navbar() {
  const router = useRouter();
  const currentPathName = router.pathname === "/" ? "생수" : router.pathname;



  return (
    <div className="flex justify-center h-10">
      <span>{currentPathName}</span>
    </div>
  );
}
