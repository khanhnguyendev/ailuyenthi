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
        <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-xl relative overflow-hidden border border-border">

            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-blue-600" />

            <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center border-2 border-border">
                    <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">IELTS Examiner • Part {part}</span>
                    <h2 className="text-2xl font-bold font-serif leading-tight mt-1">{text}</h2>
                </div>
            </div>

            {/* Part 2 Cue Card */}
            {part === 2 && details?.cueCard && (
                <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-xl my-6">
                    <h3 className="font-bold text-lg mb-3 text-foreground">{details.cueCard.topic}</h3>
                    <p className="text-muted-foreground text-sm mb-2">You should say:</p>
                    <ul className="space-y-2">
                        {details.cueCard.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-2 text-foreground/80 font-medium">
                                <span className="text-primary">•</span> {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Helper Text */}
            <p className="text-muted-foreground text-xs mt-4 italic">
                {part === 2 ? "You have 1 minute to prepare and 2 minutes to speak." : "Answer naturally and fluently as soon as you are ready."}
            </p>

        </div>
    );
}
