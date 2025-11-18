"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SignOutButton } from "./sign-out-button";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center max-w-screen-xl mx-auto px-4">
        <Link href="/" className="ml-4 mr-6 flex items-center space-x-2 h-full">
          <span className="font-bold">ProfilEval</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {/* Placeholder for navigation links */}
          {/* <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link href="/settings" className="text-sm font-medium transition-colors hover:text-primary">
            Settings
          </Link> */}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
