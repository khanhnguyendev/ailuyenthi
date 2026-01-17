"use client";

import { CheckCircle, Circle } from "lucide-react";

export type ListeningQuestionType = "form_completion" | "multiple_choice" | "map_labelling";

export interface ListeningQuestion {
    id: string;
    number: number;
    type: ListeningQuestionType;
    prompt: string;
    options?: string[]; // For MC
    userAnswer?: string;
    // For Form:
    layout?: "inline" | "block";
}

interface ListeningQuestionRendererProps {
    questions: ListeningQuestion[];
    onAnswer: (id: string, value: string) => void;
    isReview: boolean;
}

export function ListeningQuestionRenderer({ questions, onAnswer, isReview }: ListeningQuestionRendererProps) {

    // Group by type for better layout? Or just list them.
    // Listening usually groups 5-10 questions per section.

    return (
        <div className="space-y-8 pb-20">
            {questions.map((q) => (
                <div key={q.id} className="relative pl-8">
                    {/* Question Number */}
                    <span className="absolute left-0 top-0 w-6 h-6 rounded-md bg-slate-800 text-slate-400 text-xs font-bold flex items-center justify-center border border-white/10">
                        {q.number}
                    </span>

                    {/* Content */}
                    <div>

                        {/* Form / Note Completion */}
                        {q.type === "form_completion" && (
                            <div className="text-lg leading-loose text-slate-200 font-serif">
                                {q.prompt.split("______").map((part, i, arr) => (
                                    <span key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <input
                                                type="text"
                                                value={q.userAnswer || ""}
                                                onChange={(e) => onAnswer(q.id, e.target.value)}
                                                disabled={isReview}
                                                className="inline-block w-40 mx-2 bg-transparent border-b-2 border-slate-600 focus:border-ai-violet text-center text-ai-violet font-sans font-bold focus:outline-none transition-colors px-2 py-0.5"
                                                placeholder="(answer)"
                                            />
                                        )}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Multiple Choice */}
                        {q.type === "multiple_choice" && (
                            <div className="space-y-3">
                                <p className="font-medium text-slate-300 mb-2">{q.prompt}</p>
                                {q.options?.map((opt) => (
                                    <label
                                        key={opt}
                                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${q.userAnswer === opt
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
                                            disabled={isReview}
                                            className="hidden"
                                        />
                                        {q.userAnswer === opt ? <CheckCircle className="w-5 h-5 text-ai-violet" /> : <Circle className="w-5 h-5 text-slate-600" />}
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            ))}
        </div>
    );
}
