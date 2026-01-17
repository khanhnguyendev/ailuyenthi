"use client";

import Link from "next/link";
import { Mic2, Play, Users, Clock, Zap } from "lucide-react";

export function QuickStartMic() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* 1. Full Speaking Test (Large Card) */}
            <Link
                href="/skills/speaking/1"
                className="md:col-span-2 relative group overflow-hidden bg-gradient-to-br from-electric-blue to-blue-900 rounded-2xl p-8 shadow-2xl border border-white/10 hover:scale-[1.01] transition-all"
            >
                {/* Abstract Bg */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-between min-h-[160px]">
                    <div className="flex justify-between items-start">
                        <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                            Real Exam Mode
                        </span>
                        <Mic2 className="w-10 h-10 text-white opacity-90 group-hover:scale-110 transition-transform -rotate-12" />
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2 font-outfit">Full Speaking Test</h3>
                        <p className="text-blue-200 mb-4 max-w-sm">Parts 1, 2, & 3. Real-time examiner flow. Instant fluency feedback.</p>
                        <div className="flex items-center gap-4 text-white/80 text-sm font-bold">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 14 min</span>
                            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Interactive</span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* 2. Daily & Part Focus */}
            <div className="space-y-4">

                {/* Daily Challenge */}
                <Link href="/skills/speaking/daily" className="block glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors border-l-4 border-l-focus-amber group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-focus-amber transition-colors">Daily Speaking</h3>
                        <Zap className="w-5 h-5 text-focus-amber" />
                    </div>
                    <p className="text-sm text-slate-400 mb-3">Quick 5-min fluency drill.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                        <Clock className="w-3 h-3" /> 5 Min
                    </div>
                </Link>

                {/* Part 2 Cue Card */}
                <Link href="/skills/speaking/part2" className="block glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors border-l-4 border-l-purple-500 group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Cue Card Prep</h3>
                        <Clock className="w-5 h-5 text-purple-500" />
                    </div>
                    <p className="text-sm text-slate-400 mb-3">1-min prep, 2-min speak.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                        <Users className="w-3 h-3" /> Solo
                    </div>
                </Link>

            </div>

        </div>
    );
}
