"use client";

import Link from "next/link";
import { PlayCircle, Target, Clock, Trophy } from "lucide-react";

export function QuickStartGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

            {/* Primary Action: Full Test */}
            <Link
                href="/skills/listening/1"
                className="md:col-span-2 relative group overflow-hidden bg-gradient-to-br from-ai-violet to-purple-900 rounded-2xl p-6 shadow-xl border border-white/10 hover:scale-[1.01] transition-all"
            >
                <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">Recommend</span>
                        <PlayCircle className="w-8 h-8 text-white opacity-80 group-hover:scale-110 transition-transform" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Full Listening Exam</h3>
                        <div className="flex items-center gap-4 text-purple-200 text-sm font-medium">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 30 min</span>
                            <span className="flex items-center gap-1"><Target className="w-4 h-4" /> 40 Qs</span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Secondary: Daily Challenge */}
            <div className="glass-card p-6 rounded-2xl border border-focus-amber/20 hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-focus-amber/20 flex items-center justify-center text-focus-amber">
                        <Trophy className="w-5 h-5" />
                    </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-focus-amber transition-colors">Daily Challenge</h3>
                <p className="text-slate-400 text-sm mb-4">Quick 10-min mixed practice.</p>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-focus-amber" />
                </div>
            </div>

            {/* Tertiary: Part Practice (Row 2) */}
            {[
                { title: "Part 1: Forms", desc: "Easy conversational" },
                { title: "Part 2: Maps", desc: "Monologue logic" },
                { title: "Part 3: Lecture", desc: "Academic discussion" }
            ].map((part, i) => (
                <div key={i} className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-white/5">
                    <h4 className="font-bold text-white text-sm mb-1">{part.title}</h4>
                    <p className="text-xs text-slate-500">{part.desc}</p>
                </div>
            ))}

        </div>
    );
}
