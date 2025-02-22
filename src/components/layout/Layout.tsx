"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>{" "}
      {/* Adjusted pt-16 to pt-20 to account for larger navbar */}
      <Footer />
    </div>
  );
};

export default Layout;
