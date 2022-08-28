import React, { ReactNode } from "react";
import Footer from "./Footer";
import GNB from "./GNB";

type Props = {
  header: ReactNode;
  children: ReactNode;
};

export default function Layout({ header, children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <div className="px-3">
        <GNB />
        {header}
      </div>
      <main className="flex-1 overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
