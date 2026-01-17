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
        <div className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-secondary/50 transition-colors cursor-pointer border border-border group">
            <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-all">
                    {title}
                </h4>
                <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
        </div>
    );
}
