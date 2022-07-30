import React from "react";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto px-5">{children}</main>
      <Footer />
    </div>
  );
}
