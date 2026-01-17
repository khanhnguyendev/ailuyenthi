"use client";

import Link from "next/link";
import { Zap, Target, BookOpen, Lock, ArrowRight } from "lucide-react";

const MODES = [
    {
        id: "daily",
        title: "Daily Practice",
        desc: "Quick 15-min session to keep your streak alive.",
        icon: Zap,
        color: "text-electric-blue",
        bg: "from-electric-blue/20 to-transparent",
        stats: ["15 min", "Mixed Qs", "+50 XP"],
        href: "/skills/reading/daily"
    },
    {
        id: "focused",
        title: "Weakness Focus",
        desc: "Drill specific question types you struggle with.",
        icon: Target,
        color: "text-focus-amber",
        bg: "from-focus-amber/20 to-transparent",
        stats: ["Untimed", "T/F/NG", "Strategy"],
        href: "/skills/reading/focused" // Placeholder
    },
    {
        id: "mock",
        title: "Full Mock Test",
        desc: "3 passages, 1 hour. Strict exam conditions.",
        icon: BookOpen,
        color: "text-ai-violet",
        bg: "from-ai-violet/20 to-transparent",
        stats: ["60 min", "40 Qs", "Band Score"],
        href: "/skills/reading/1" // Connects to our implemented test page
    }
];

export function PracticeSelector() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MODES.map((mode) => (
                <Link
                    key={mode.id}
                    href={mode.href}
                    className="group relative glass-card p-6 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-1 border border-white/5 hover:border-white/10"
                >
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${mode.bg} opacity-20 blur-2xl rounded-bl-3xl transition-opacity group-hover:opacity-40`} />

                    <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-4 ${mode.color}`}>
                            <mode.icon className="w-6 h-6" />
                        </div>

                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                            {mode.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                            {mode.desc}
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {mode.stats.map(stat => (
                                <span key={stat} className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/50 text-slate-500 px-2 py-1 rounded">
                                    {stat}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                            Start Now <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
