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
                    <span className="absolute left-0 top-0 w-6 h-6 rounded-md bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center border border-border">
                        {q.number}
                    </span>

                    {/* Content */}
                    <div>

                        {/* Form / Note Completion */}
                        {q.type === "form_completion" && (
                            <div className="text-lg leading-loose text-foreground font-serif">
                                {q.prompt.split("______").map((part, i, arr) => (
                                    <span key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <input
                                                type="text"
                                                value={q.userAnswer || ""}
                                                onChange={(e) => onAnswer(q.id, e.target.value)}
                                                disabled={isReview}
                                                className="inline-block w-40 mx-2 bg-transparent border-b-2 border-input focus:border-primary text-center text-primary font-sans font-bold focus:outline-none transition-colors px-2 py-0.5 placeholder:text-muted-foreground/50"
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
                                <p className="font-medium text-foreground mb-2">{q.prompt}</p>
                                {q.options?.map((opt) => (
                                    <label
                                        key={opt}
                                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${q.userAnswer === opt
                                            ? 'bg-primary/10 border-primary text-primary-foreground dark:text-primary'
                                            : 'bg-secondary/20 border-transparent hover:bg-secondary/50 text-muted-foreground hover:text-foreground'
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
                                        {q.userAnswer === opt ? <CheckCircle className="w-5 h-5 text-primary" /> : <Circle className="w-5 h-5 text-muted-foreground" />}
                                        <span className={q.userAnswer === opt ? "font-medium text-foreground" : ""}>{opt}</span>
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
