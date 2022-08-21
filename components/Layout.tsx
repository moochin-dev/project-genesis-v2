import React from "react";
import Footer from "./Footer";
import GNB from "./GNB";

export default function Layout({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen px-3 ">
      <GNB />
      {header}
      <main className="flex-1 overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
