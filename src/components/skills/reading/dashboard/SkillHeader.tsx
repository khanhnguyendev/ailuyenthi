"use client";

import { Flame } from "lucide-react";

interface SkillHeaderProps {
    title: string;
    desc: string;
    streak: number;
}

export function SkillHeader({ title, desc, streak }: SkillHeaderProps) {
    return (
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="text-3xl font-bold text-white font-outfit mb-2">{title}</h1>
                <p className="text-slate-400">{desc}</p>
            </div>

            <div className="flex items-center gap-2 bg-slate-900 border border-white/5 px-4 py-2 rounded-xl">
                <Flame className={`w-5 h-5 ${streak > 0 ? 'text-focus-amber fill-focus-amber animate-pulse' : 'text-slate-600'}`} />
                <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Streak</span>
                    <span className="block text-lg font-bold text-white leading-none">{streak} Days</span>
                </div>
            </div>
        </div>
    );
}
