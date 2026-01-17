"use client";

import { User } from "lucide-react";

export type DetailsType = {
    cueCard?: {
        topic: string;
        bullets: string[];
    };
    followUp?: boolean;
};

interface ExaminerPromptProps {
    text: string;
    part: 1 | 2 | 3;
    details?: DetailsType;
}

export function ExaminerPrompt({ text, part, details }: ExaminerPromptProps) {
    return (
        <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-xl relative overflow-hidden">

            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-ai-violet to-electric-blue" />

            <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200">
                    <User className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                    <span className="text-xs font-bold text-ai-violet uppercase tracking-wider">IELTS Examiner • Part {part}</span>
                    <h2 className="text-2xl font-bold font-serif leading-tight mt-1">{text}</h2>
                </div>
            </div>

            {/* Part 2 Cue Card */}
            {part === 2 && details?.cueCard && (
                <div className="bg-slate-50 border-l-4 border-ai-violet p-6 rounded-r-xl my-6">
                    <h3 className="font-bold text-lg mb-3 text-slate-800">{details.cueCard.topic}</h3>
                    <p className="text-slate-500 text-sm mb-2">You should say:</p>
                    <ul className="space-y-2">
                        {details.cueCard.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-2 text-slate-700 font-medium">
                                <span className="text-ai-violet">•</span> {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Helper Text */}
            <p className="text-slate-400 text-xs mt-4 italic">
                {part === 2 ? "You have 1 minute to prepare and 2 minutes to speak." : "Answer naturally and fluently as soon as you are ready."}
            </p>

        </div>
    );
}
