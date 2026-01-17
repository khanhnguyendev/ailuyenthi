"use client";

import { TrendingUp, AlertCircle } from "lucide-react";

export function ProgressTile() {
    const data = [65, 70, 60, 75, 80, 85, 80]; // Mock weekly data

    return (
        <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-growth-green" /> Analytics
                </h3>
                <span className="text-xs font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">Last 7 Days</span>
            </div>

            {/* Micro Bar Chart */}
            <div className="flex items-end justify-between gap-2 h-24 mb-6">
                {data.map((val, i) => (
                    <div key={i} className="w-full bg-slate-800 rounded-t-sm relative group">
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-growth-green/50 hover:bg-growth-green transition-all rounded-t-sm"
                            style={{ height: `${val}%` }}
                        />
                    </div>
                ))}
            </div>

            {/* Stats Summary */}
            <div className="space-y-3 mt-auto">
                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-slate-400">Accuracy</span>
                    <span className="font-bold text-white">78%</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Weakest Part</span>
                    <span className="font-bold text-alert-rose flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Part 3
                    </span>
                </div>
            </div>
        </div>
    );
}
