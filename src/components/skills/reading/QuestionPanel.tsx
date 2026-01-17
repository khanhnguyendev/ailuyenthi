"use client";

import { CheckCircle, Circle, HelpCircle } from "lucide-react";

export type QuestionType = "multiple_choice" | "true_false" | "gap_fill";

export interface Question {
    id: string;
    number: number;
    type: QuestionType;
    prompt: string;
    options?: string[]; // For MC/TF
    userAnswer?: string;
    isMarked?: boolean;
}

interface QuestionPanelProps {
    questions: Question[];
    onAnswer: (id: string, value: string) => void;
    onMark: (id: string) => void;
    reviewMode?: boolean;
}

export function QuestionPanel({ questions, onAnswer, onMark, reviewMode }: QuestionPanelProps) {
    return (
        <div className="h-full overflow-y-auto px-6 py-8 custom-scrollbar space-y-8">
            {questions.map((q) => (
                <div key={q.id} id={`q-${q.id}`} className="scroll-mt-4">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white font-bold border border-white/10 shadow-lg">
                                {q.number}
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                                {q.type.replace("_", " ")}
                            </span>
                        </div>
                        <button
                            onClick={() => onMark(q.id)}
                            className={`p-1.5 rounded-lg transition-colors ${q.isMarked ? 'bg-focus-amber text-white' : 'text-slate-600 hover:text-slate-400'}`}
                            title="Mark for Review"
                        >
                            <HelpCircle className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Prompt */}
                    <p className="text-slate-300 font-medium mb-4 leading-relaxed">{q.prompt}</p>

                    {/* Answer Controls */}
                    <div className="pl-4 border-l-2 border-white/10">
                        {/* Multiple Choice / TFNG */}
                        {(q.type === "multiple_choice" || q.type === "true_false") && (
                            <div className="space-y-2">
                                {q.options?.map((opt) => (
                                    <label
                                        key={opt}
                                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all group ${q.userAnswer === opt
                                                ? 'bg-ai-violet/20 border-ai-violet text-white'
                                                : 'bg-white/5 border-transparent hover:bg-white/10 text-slate-400 hover:text-slate-200'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`q-${q.id}`}
                                            value={opt}
                                            checked={q.userAnswer === opt}
                                            onChange={() => onAnswer(q.id, opt)}
                                            disabled={reviewMode}
                                            className="hidden"
                                        />
                                        {q.userAnswer === opt ? (
                                            <CheckCircle className="w-5 h-5 text-ai-violet shrink-0" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-slate-600 group-hover:text-slate-400 shrink-0" />
                                        )}
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        )}

                        {/* Gap Fill */}
                        {q.type === "gap_fill" && (
                            <input
                                type="text"
                                value={q.userAnswer || ""}
                                onChange={(e) => onAnswer(q.id, e.target.value)}
                                disabled={reviewMode}
                                placeholder="Type answer..."
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-ai-violet transition-colors"
                            />
                        )}
                    </div>

                </div>
            ))}
        </div>
    );
}
