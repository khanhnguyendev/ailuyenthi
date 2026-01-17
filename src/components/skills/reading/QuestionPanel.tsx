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
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-bold border border-border shadow-lg">
                                {q.number}
                            </span>
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-muted px-2 py-1 rounded">
                                {q.type.replace("_", " ")}
                            </span>
                        </div>
                        <button
                            onClick={() => onMark(q.id)}
                            className={`p-1.5 rounded-lg transition-colors ${q.isMarked ? 'bg-orange-500 text-white' : 'text-muted-foreground hover:text-foreground'}`}
                            title="Mark for Review"
                        >
                            <HelpCircle className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Prompt */}
                    <p className="text-foreground font-medium mb-4 leading-relaxed">{q.prompt}</p>

                    {/* Answer Controls */}
                    <div className="pl-4 border-l-2 border-border/50">
                        {/* Multiple Choice / TFNG */}
                        {(q.type === "multiple_choice" || q.type === "true_false") && (
                            <div className="space-y-2">
                                {q.options?.map((opt) => (
                                    <label
                                        key={opt}
                                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all group ${q.userAnswer === opt
                                            ? 'bg-primary/10 border-primary text-primary'
                                            : 'bg-secondary/20 border-transparent hover:bg-secondary/50 text-muted-foreground hover:text-foreground'
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
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-muted-foreground group-hover:text-foreground shrink-0" />
                                        )}
                                        <span className={q.userAnswer === opt ? "font-medium text-foreground" : ""}>{opt}</span>
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
                                className="w-full bg-secondary/50 border border-input rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                            />
                        )}
                    </div>

                </div>
            ))}
        </div>
    );
}
