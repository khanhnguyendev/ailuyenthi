"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";

interface CriteriaScore {
    name: string;
    score: number;
    comment: string;
}

interface FeedbackViewProps {
    overallBand: number;
    criteria: CriteriaScore[];
    generalFeedback: string;
}

export function FeedbackView({ overallBand, criteria, generalFeedback }: FeedbackViewProps) {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Score Card */}
            <div className="glass-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-ai-violet/10 to-transparent pointer-events-none" />

                <h2 className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-4">Overall Band Score</h2>
                <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-ai-violet to-electric-blue drop-shadow-2xl">
                    {overallBand.toFixed(1)}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
                    {criteria.map((c) => (
                        <div key={c.name} className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col items-center">
                            <span className="text-xs text-slate-500 font-bold mb-1">{c.name}</span>
                            <span className={`text-xl font-bold ${c.score >= 7 ? 'text-growth-green' : 'text-focus-amber'}`}>
                                {c.score.toFixed(1)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Analysis */}
            <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-ai-violet/20 rounded-lg">
                        <CheckCircle2 className="text-ai-violet w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg mb-2">Examiner Feedback</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            {generalFeedback}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
