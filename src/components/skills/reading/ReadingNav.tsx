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
                className={`fixed top-1/2 right-0 transform -translate-y-1/2 bg-card border-l border-t border-b border-border rounded-l-xl p-2 z-50 transition-all shadow-lg ${isOpen ? 'mr-64' : ''}`}
            >
                {isOpen ? <ChevronRight className="w-5 h-5 text-muted-foreground" /> : <ChevronLeft className="w-5 h-5 text-primary" />}
            </button>

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-screen w-64 bg-card border-l border-border p-6 z-40 transform transition-transform duration-300 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex items-center gap-2 mb-6">
                    <Grid className="w-5 h-5 text-muted-foreground" />
                    <span className="font-bold text-foreground">Navigator</span>
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
                                    ? 'bg-orange-500/20 border-orange-500 text-orange-500'
                                    : q.userAnswer
                                        ? 'bg-blue-500/20 border-blue-500 text-blue-500'
                                        : 'bg-secondary/50 border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'
                                }
                    `}
                        >
                            {q.number}
                        </button>
                    ))}
                </div>

                <div className="mt-8 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-blue-500/20 border border-blue-500" /> Answered
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-orange-500/20 border border-orange-500" /> Marked
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-secondary/50 border border-transparent" /> Unanswered
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
