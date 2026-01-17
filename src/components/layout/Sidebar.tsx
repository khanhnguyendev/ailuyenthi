"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    BookOpen,
    Headphones,
    PenTool,
    Mic,
    Dna,
    Zap,
    Settings,
    LogOut,
    Target
} from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { label: "Dashboard", href: "/", icon: Home },
        { label: "Reading", href: "/skills/reading", icon: BookOpen },
        { label: "Listening", href: "/skills/listening", icon: Headphones },
        { label: "Writing", href: "/skills/writing", icon: PenTool },
        { label: "Speaking", href: "/skills/speaking", icon: Mic },
    ];

    const toolsItems = [
        { label: "Daily Dictionary", href: "/tools/dictionary", icon: BookOpen },
        { label: "IPA Trainer", href: "/tools/ipa", icon: Dna },
        { label: "Shadowing", href: "/tools/shadowing", icon: Zap },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 border-r border-border bg-card/80 backdrop-blur-xl flex flex-col z-50 transition-colors duration-300">
            {/* Brand */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Target className="text-white w-6 h-6" />
                </div>
                <span className="font-outfit font-bold text-xl tracking-tight text-foreground">
                    AI Luyện Thi
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto">
                {/* Main Skills */}
                <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-2">Practice</h3>
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive(item.href)
                                        ? "bg-primary/10 text-primary shadow-sm"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                        }`}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive(item.href) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Utilities */}
                <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-2">Utilities</h3>
                    <ul className="space-y-1">
                        {toolsItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive(item.href)
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                        }`}
                                >
                                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Footer / Profile */}
            <div className="p-4 border-t border-border space-y-2">
                <div className="flex items-center justify-between px-4">
                    <span className="text-xs font-medium text-muted-foreground">Theme</span>
                    <ThemeToggle />
                </div>

                <Link
                    href="/profile"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/profile')
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                >
                    <Settings className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                    <span className="font-medium text-sm">Settings</span>
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium text-sm">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
