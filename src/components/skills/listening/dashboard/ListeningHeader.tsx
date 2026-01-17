"use client";

import { Headphones, Zap } from "lucide-react";

interface ListeningHeaderProps {
    streak: number;
}

export function ListeningHeader({ streak }: ListeningHeaderProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl glass p-8 mb-8">

            {/* Background Audio Pulse Mockup */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-20 mask-video">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="w-2 bg-gradient-to-t from-primary to-blue-500 rounded-full animate-pulse"
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
                        <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                            <Headphones className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold text-foreground font-outfit">Listening</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md">
                        Improve accuracy, focus, and real exam comprehension with high-quality audio drills.
                    </p>
                </div>

                <div className="flex gap-4">
                    <div className="bg-card/50 backdrop-blur-md px-4 py-2 rounded-xl border border-border flex flex-col items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase">Current Band</span>
                        <span className="text-xl font-bold text-foreground">6.0</span>
                    </div>

                    <div className="bg-card/50 backdrop-blur-md px-4 py-2 rounded-xl border border-border flex flex-col items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                            Streak <Zap className="w-3 h-3 text-orange-500 fill-current" />
                        </span>
                        <span className="text-xl font-bold text-foreground">5 Days</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
