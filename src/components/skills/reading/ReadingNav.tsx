"use client";

import { ChevronLeft, ChevronRight, Grid } from "lucide-react";
import { useState } from "react";
import { Question } from "./QuestionPanel";

interface ReadingNavProps {
    questions: Question[];
    onNavigate: (id: string) => void;
}

export function ReadingNav({ questions, onNavigate }: ReadingNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle Button (Mobile/Desktop) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-1/2 right-0 transform -translate-y-1/2 bg-slate-800 border-l border-t border-b border-white/10 rounded-l-xl p-2 z-50 transition-all ${isOpen ? 'mr-64' : ''}`}
            >
                {isOpen ? <ChevronRight className="w-5 h-5 text-slate-400" /> : <ChevronLeft className="w-5 h-5 text-ai-violet" />}
            </button>

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-screen w-64 bg-slate-900 border-l border-white/10 p-6 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex items-center gap-2 mb-6">
                    <Grid className="w-5 h-5 text-slate-400" />
                    <span className="font-bold text-white">Navigator</span>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    {questions.map((q) => (
                        <button
                            key={q.id}
                            onClick={() => {
                                onNavigate(q.id);
                                // Optional: close on mobile
                            }}
                            className={`
                        aspect-square rounded-lg font-bold text-sm transition-all flex items-center justify-center border
                        ${q.isMarked
                                    ? 'bg-focus-amber/20 border-focus-amber text-focus-amber'
                                    : q.userAnswer
                                        ? 'bg-electric-blue/20 border-electric-blue text-electric-blue'
                                        : 'bg-white/5 border-transparent text-slate-500 hover:bg-white/10 hover:text-white'
                                }
                    `}
                        >
                            {q.number}
                        </button>
                    ))}
                </div>

                <div className="mt-8 space-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-electric-blue/20 border border-electric-blue" /> Answered
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-focus-amber/20 border border-focus-amber" /> Marked
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-white/5 border border-transparent" /> Unanswered
                    </div>
                </div>

            </div>

            {/* Overlay for mobile to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
