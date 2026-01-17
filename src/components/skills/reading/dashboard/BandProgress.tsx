"use client";

import { Target, Trophy } from "lucide-react";

interface BandProgressProps {
    current: number;
    target: number;
    history: number[]; // e.g. [5.5, 6.0]
}

export function BandProgress({ current, target, history }: BandProgressProps) {
    const steps = [4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0];
    const currentIdx = steps.indexOf(current);
    const targetIdx = steps.indexOf(target);

    // Slice to show relevant range (centered on current)
    const visibleSteps = steps.filter((s, i) => i >= currentIdx - 1 && i <= targetIdx + 1);

    return (
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-start mb-8 z-10 relative">
                <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Band</span>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-4xl font-bold text-white font-outfit">{current.toFixed(1)}</h2>
                        <span className="text-sm text-growth-green font-bold flex items-center gap-1">
                            <Trophy className="w-3 h-3" /> Top 40%
                        </span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Goal</span>
                    <div className="flex items-center justify-end gap-2 text-xl font-bold text-white">
                        <Target className="w-5 h-5 text-focus-amber" />
                        {target.toFixed(1)}
                    </div>
                </div>
            </div>

            {/* Progress Visualization */}
            <div className="relative pt-4 pb-2 z-10">
                {/* Track */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full" />

                {/* Fill */}
                <div
                    className="absolute top-1/2 left-0 h-1 bg-growth-green -translate-y-1/2 rounded-full transition-all duration-1000"
                    style={{ width: `${((currentIdx + 1) / steps.length) * 100}%` }} // Simplified width logic
                />

                {/* Steps */}
                <div className="flex justify-between relative">
                    {visibleSteps.map((step) => {
                        const isAchieved = step <= current;
                        const isTarget = step === target;

                        return (
                            <div key={step} className="flex flex-col items-center gap-3">
                                <div
                                    className={`
                                w-4 h-4 rounded-full border-2 transition-all z-10
                                ${isAchieved ? 'bg-growth-green border-growth-green' : 'bg-slate-900 border-slate-700'}
                                ${isTarget ? 'ring-4 ring-focus-amber/20 border-focus-amber' : ''}
                            `}
                                />
                                <span className={`text-xs font-bold ${isAchieved ? 'text-white' : 'text-slate-600'}`}>
                                    {step}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-growth-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        </div>
    );
}
