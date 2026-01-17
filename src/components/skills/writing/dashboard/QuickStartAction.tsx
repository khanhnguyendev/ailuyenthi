"use client";

import Link from "next/link";
import { PenTool, Clock, Zap, BookOpen, Star } from "lucide-react";

export function QuickStartAction() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* 1. Full Writing Test (Large Card) */}
            <Link
                href="/skills/writing/1"
                className="md:col-span-2 relative group overflow-hidden bg-primary rounded-2xl p-8 shadow-2xl border border-border hover:scale-[1.01] transition-all"
            >
                {/* Abstract Bg */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-between min-h-[160px]">
                    <div className="flex justify-between items-start">
                        <span className="bg-background/20 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                            Most Effective
                        </span>
                        <PenTool className="w-10 h-10 text-primary-foreground opacity-90 group-hover:scale-110 transition-transform rotate-12" />
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-primary-foreground mb-2 font-outfit">Full Mock Test</h3>
                        <p className="text-primary-foreground/80 mb-4 max-w-sm">Task 1 & Task 2. Strict 60-min timer. Receive instant AI band estimation.</p>
                        <div className="flex items-center gap-4 text-primary-foreground/90 text-sm font-bold">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 60 min</span>
                            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Academic</span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* 2. Daily & Task Focus (Stacked) */}
            <div className="space-y-4">

                {/* Daily Prompt */}
                <Link href="/skills/writing/daily" className="block glass p-6 rounded-2xl hover:bg-secondary/50 transition-colors border-l-4 border-l-orange-500 group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-orange-500 transition-colors">Daily Prompt</h3>
                        <Zap className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Quick 15-min argument building.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase">
                        <Clock className="w-3 h-3" /> 15 Min
                    </div>
                </Link>

                {/* Task 1 Focused */}
                <Link href="/skills/writing/task1" className="block glass p-6 rounded-2xl hover:bg-secondary/50 transition-colors border-l-4 border-l-blue-500 group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">Task 1 Drills</h3>
                        <Star className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Chart & Data description practice.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase">
                        <Clock className="w-3 h-3" /> 20 Min
                    </div>
                </Link>

            </div>

        </div>
    );
}
