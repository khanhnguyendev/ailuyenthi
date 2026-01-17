"use client";

import { Mic2, Keyboard, Zap, LucideIcon } from "lucide-react";

interface BoosterCardProps {
    title: string;
    desc: string;
    icon: LucideIcon;
    color: string;
}

export function BoosterCard({ title, desc, icon: Icon, color }: BoosterCardProps) {
    return (
        <div className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer border border-white/5 group">
            <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="font-bold text-white text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {title}
                </h4>
                <p className="text-xs text-slate-500">{desc}</p>
            </div>
        </div>
    );
}
