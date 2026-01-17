"use client";

import { Headphones, Zap } from "lucide-react";

interface ListeningHeaderProps {
    streak: number;
}

export function ListeningHeader({ streak }: ListeningHeaderProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl glass-panel p-8 mb-8">

            {/* Background Audio Pulse Mockup */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-20 mask-video">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="w-2 bg-gradient-to-t from-ai-violet to-electric-blue rounded-full animate-pulse"
                        style={{
                            height: `${Math.random() * 60 + 20}px`,
                            animationDuration: `${Math.random() * 1 + 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-ai-violet p-2 rounded-lg">
                            <Headphones className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-white font-outfit">Listening</h1>
                    </div>
                    <p className="text-slate-400 max-w-md">
                        Improve accuracy, focus, and real exam comprehension with high-quality audio drills.
                    </p>
                </div>

                <div className="flex gap-4">
                    <div className="bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-500 uppercase">Current Band</span>
                        <span className="text-xl font-bold text-white">6.0</span>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                            Streak <Zap className="w-3 h-3 text-focus-amber fill-current" />
                        </span>
                        <span className="text-xl font-bold text-white">5 Days</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
