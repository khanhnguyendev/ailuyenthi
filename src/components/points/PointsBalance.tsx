"use client";

import { Trophy, Star } from "lucide-react";

export function PointsBalance() {
    const currentPoints = 1250;
    const nextLevelPoints = 2000;
    const progress = (currentPoints / nextLevelPoints) * 100;

    return (
        <div className="glass rounded-3xl p-8 mb-12 relative overflow-hidden border border-border">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-muted-foreground font-medium mb-1">Current Balance</h2>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <span className="text-5xl md:text-6xl font-black text-foreground font-outfit tracking-tight">
                            {currentPoints.toLocaleString()}
                        </span>
                        <span className="text-2xl text-amber-500 font-bold">PTS</span>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-md bg-secondary/30 rounded-2xl p-6 border border-border">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Current Rank</span>
                            <div className="flex items-center gap-2 text-foreground font-bold">
                                <Trophy className="w-4 h-4 text-amber-500" />
                                <span>Silver Scholar</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Next Rank</span>
                            <div className="flex items-center gap-2 text-foreground font-bold justify-end">
                                <Star className="w-4 h-4 text-purple-500" />
                                <span>Gold Master</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-4 bg-background rounded-full overflow-hidden border border-border/50 relative">
                        <div
                            className="h-full bg-gradient-to-r from-amber-500 to-purple-600 rounded-full transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-xs text-center mt-2 text-muted-foreground font-medium">
                        {nextLevelPoints - currentPoints} points to level up
                    </p>
                </div>
            </div>
        </div>
    );
}
