import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DoubleButton from "./Custom/DoubleButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const linkClassName = (path: string) => {
    const baseClasses = "text-l text-gray-700 hover:text-gray-900 mb-[5px]";
    return router.pathname === path
      ? `${baseClasses} font-bold border-b-2 border-gray-900`
      : baseClasses;
  };

  return (
    <div className="min-h-screen flex flex-col font-maven-pro font-semibold">
      <header className="bg-white border-b-2 border-black">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex flex-row items-center gap-[10px] text-2xl font-bold"
            >
              <img src="/images/logo.svg" className="size-[80px]" alt="" />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/store" className={linkClassName("/store")}>
              Store
            </Link>
            <Link href="/leaderboard" className={linkClassName("/leaderboard")}>
              Leaderboard
            </Link>
            <Link href="/profile" className={linkClassName("/profile")}>
              My Profile
            </Link>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <img src="/images/coins.svg" className="size-[80px]" alt="" />
            <DoubleButton buttonText="Connect wallet" />
          </div>
        </nav>
      </header>
      <main className="flex-grow p-8">{children}</main>
    </div>
  );
};

export default Layout;
