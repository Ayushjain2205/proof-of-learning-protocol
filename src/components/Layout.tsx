import React from "react";
import Link from "next/link";
import DoubleButton from "./Custom/DoubleButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-maven-pro font-semibold">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-gray-700 hover:text-gray-900">
              Profile
            </Link>
            <Link href="/store" className="text-gray-700 hover:text-gray-900">
              Store
            </Link>
            <Link
              href="/leaderboard"
              className="text-gray-700 hover:text-gray-900"
            >
              Leaderboard
            </Link>
          </div>
          <DoubleButton buttonText="Connect wallet" />
        </nav>
      </header>
      <main className="flex-grow p-8">{children}</main>
    </div>
  );
};

export default Layout;
