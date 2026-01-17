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
            <div className="glass p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                <h2 className="text-muted-foreground font-medium uppercase tracking-widest text-sm mb-4">Overall Band Score</h2>
                <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600 drop-shadow-2xl">
                    {overallBand.toFixed(1)}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
                    {criteria.map((c) => (
                        <div key={c.name} className="bg-secondary/50 rounded-lg p-3 border border-border flex flex-col items-center">
                            <span className="text-xs text-muted-foreground font-bold mb-1">{c.name}</span>
                            <span className={`text-xl font-bold ${c.score >= 7 ? 'text-green-500' : 'text-orange-500'}`}>
                                {c.score.toFixed(1)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Analysis */}
            <div className="glass p-6">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                        <CheckCircle2 className="text-primary w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-foreground text-lg mb-2">Examiner Feedback</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {generalFeedback}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
