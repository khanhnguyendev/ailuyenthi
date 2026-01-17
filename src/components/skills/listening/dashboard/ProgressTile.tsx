"use client";

import { TrendingUp, AlertCircle } from "lucide-react";

export function ProgressTile() {
    const data = [65, 70, 60, 75, 80, 85, 80]; // Mock weekly data

    return (
        <div className="glass p-6 rounded-2xl h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" /> Analytics
                </h3>
                <span className="text-xs font-bold text-muted-foreground bg-secondary/50 px-2 py-1 rounded">Last 7 Days</span>
            </div>

            {/* Micro Bar Chart */}
            <div className="flex items-end justify-between gap-2 h-24 mb-6">
                {data.map((val, i) => (
                    <div key={i} className="w-full bg-secondary rounded-t-sm relative group">
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-green-500/50 hover:bg-green-500 transition-all rounded-t-sm"
                            style={{ height: `${val}%` }}
                        />
                    </div>
                ))}
            </div>

            {/* Stats Summary */}
            <div className="space-y-3 mt-auto">
                <div className="flex justify-between text-sm border-b border-border pb-2">
                    <span className="text-muted-foreground">Accuracy</span>
                    <span className="font-bold text-foreground">78%</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Weakest Part</span>
                    <span className="font-bold text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Part 3
                    </span>
                </div>
            </div>
        </div>
    );
}
