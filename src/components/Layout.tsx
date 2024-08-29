import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:translate-x-1">
            Connect Wallet
          </Button>
        </nav>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
