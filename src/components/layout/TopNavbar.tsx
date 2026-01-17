"use client";

import Link from "next/link";
import { Target, Trophy, Sparkles } from "lucide-react";
import { NavMenu } from "./NavMenu";
import { UserMenu } from "./UserMenu";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function TopNavbar() {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 glass border-b border-border z-40 px-4 md:px-8 flex items-center justify-between">

            {/* 1. Left: Brand & Mobile Trigger */}
            <div className="flex items-center gap-4">
                <MobileNav />

                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                        <Target className="text-white w-5 h-5" />
                    </div>
                    <span className="font-outfit font-bold text-lg tracking-tight text-foreground whitespace-nowrap hidden md:block">
                        AI Luyện Thi
                    </span>
                </Link>
            </div>

            {/* 2. Center: Desktop Mega Menu */}
            <div className="hidden lg:block h-full">
                <NavMenu />
            </div>

            {/* 3. Right: System & User */}
            <div className="flex items-center gap-3 md:gap-6">
                {/* Points - Hidden on small mobile */}
                <Link
                    href="/points"
                    className="hidden md:flex items-center gap-2 text-sm font-bold text-foreground hover:bg-secondary/50 px-3 py-1.5 rounded-full transition-colors"
                >
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>1,250</span>
                </Link>

                {/* Upgrade Button */}
                <Link
                    href="/subscription"
                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
                >
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    Upgrade
                </Link>

                {/* Theme Toggle */}
                <div className="hidden md:block">
                    <ThemeToggle />
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-border hidden md:block" />

                {/* User Dropdown */}
                <UserMenu />
            </div>

        </header>
    );
}
