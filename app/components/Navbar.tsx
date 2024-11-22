"use client";

import { useTheme } from "@/theme/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-[#2D3748] text-navy-800 dark:text-gray-100 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-navy-600 dark:hover:dark:text-gray-100 transition"
          >
            BlinkVault
          </Link>
        </div>
        <div className="space-x-10 flex justify-center items-center">
          <Link
            href="/"
            className="hover:text-navy-600 dark:hover:dark:text-gray-100 transition"
          >
            Home
          </Link>
          <Link
            href="/create-vault"
            className="hover:text-navy-600 dark:hover:dark:text-gray-100 transition"
          >
            Create Vault
          </Link>
          <button
            onClick={toggleTheme}
            className=" p-2 rounded-full transition"
          >
            {theme === "light" ? (
              <Moon className="text-navy-800" />
            ) : (
              <Sun className="dark:text-gray-100" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
