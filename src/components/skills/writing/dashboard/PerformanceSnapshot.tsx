"use client";

import { Activity, AlertTriangle, ChevronRight } from "lucide-react";

export function PerformanceSnapshot() {
    const criteria = [
        { name: "Task Achievement", score: 6.5, color: "bg-growth-green" },
        { name: "Coherence & Cohesion", score: 6.0, color: "bg-focus-amber" },
        { name: "Lexical Resource", score: 5.5, color: "bg-alert-rose" },
        { name: "Grammar Range", score: 6.0, color: "bg-focus-amber" },
    ];

    return (
        <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-electric-blue" /> Average Score
                </h3>
                <span className="text-2xl font-bold text-white">6.0</span>
            </div>

            {/* Criteria Breakdown */}
            <div className="space-y-4 mb-8">
                {criteria.map((c) => (
                    <div key={c.name}>
                        <div className="flex justify-between text-xs font-bold text-slate-400 mb-1">
                            <span>{c.name}</span>
                            <span className="text-white">{c.score}</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full ${c.color}`}
                                style={{ width: `${(c.score / 9) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Common Issues Box */}
            <div className="mt-auto bg-alert-rose/10 border border-alert-rose/20 rounded-xl p-4">
                <div className="flex items-center gap-2 text-alert-rose font-bold text-sm mb-2">
                    <AlertTriangle className="w-4 h-4" /> Needs Focus
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Your <strong>Lexical Resource</strong> is limiting your score. You tend to repeat "good" and "bad". Try using "beneficial", "detrimental", etc.
                </p>
                <button className="text-xs font-bold text-white flex items-center gap-1 hover:underline">
                    View Feedback History <ChevronRight className="w-3 h-3" />
                </button>
            </div>

        </div>
    );
}
