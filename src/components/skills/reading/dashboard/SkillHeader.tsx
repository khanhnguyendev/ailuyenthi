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
                <h1 className="text-3xl font-bold text-foreground font-outfit mb-2">{title}</h1>
                <p className="text-muted-foreground">{desc}</p>
            </div>

            <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl shadow-sm">
                <Flame className={`w-5 h-5 ${streak > 0 ? 'text-orange-500 fill-orange-500 animate-pulse' : 'text-muted-foreground'}`} />
                <div>
                    <span className="block text-xs font-bold text-muted-foreground uppercase">Streak</span>
                    <span className="block text-lg font-bold text-foreground leading-none">{streak} Days</span>
                </div>
            </div>
        </div>
    );
}
