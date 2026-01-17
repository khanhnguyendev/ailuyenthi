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
        <aside className="w-64 h-screen fixed left-0 top-0 border-r border-white/10 bg-slate-900/80 backdrop-blur-xl flex flex-col z-50">
            {/* Brand */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ai-violet to-electric-blue flex items-center justify-center">
                    <Target className="text-white w-6 h-6" />
                </div>
                <span className="font-outfit font-bold text-xl tracking-tight text-white">
                    AI Luyện Thi
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto">
                {/* Main Skills */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Practice</h3>
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive(item.href)
                                            ? "bg-ai-violet/20 text-ai-violet shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive(item.href) ? "text-ai-violet" : "text-slate-500 group-hover:text-white"}`} />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Utilities */}
                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Utilities</h3>
                    <ul className="space-y-1">
                        {toolsItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive(item.href)
                                            ? "bg-ai-violet/20 text-ai-violet"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <item.icon className="w-5 h-5 text-slate-500 group-hover:text-white" />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Footer / Profile */}
            <div className="p-4 border-t border-white/10 space-y-2">
                <Link
                    href="/profile"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/profile')
                            ? "bg-white/10 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                >
                    <Settings className="w-5 h-5 text-slate-500 group-hover:text-white" />
                    <span className="font-medium text-sm">Settings</span>
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-rose-500/10 hover:text-rose-500 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium text-sm">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
