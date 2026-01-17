"use client";

import { Sparkles, Check, X, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WritingGrammarPage() {
    // "Despite of the bad weather, we went out." -> "Despite the bad weather..." or "In spite of..."
    const [fixedErrors, setFixedErrors] = useState<number[]>([]);

    const errors = [
        {
            id: 1,
            text: "Despite of",
            correct: "Despite",
            options: ["Despite of", "Despite", "In despite of"],
            explanation: "'Despite' is a preposition and is never followed by 'of'. Use 'In spite of' or just 'Despite'."
        },
        {
            id: 2,
            text: "go",
            correct: "went",
            options: ["go", "went", "have gone"],
            explanation: "The sentence is in the past tense ('yesterday'), so the verb must be 'went'."
        }
    ];

    const sentenceParts = [
        { text: "", errorId: null },
        { text: "Despite of", errorId: 1 },
        { text: " the heavy rain yesterday, we ", errorId: null },
        { text: "go", errorId: 2 },
        { text: " to the park for a picnic.", errorId: null },
    ];

    const [activeError, setActiveError] = useState<number | null>(null);

    const handleSelectOption = (errorId: number, option: string) => {
        const error = errors.find(e => e.id === errorId);
        if (error && option === error.correct) {
            setFixedErrors([...fixedErrors, errorId]);
            setActiveError(null);
        } else {
            // Shake effect or error state could go here
            alert("Try again! " + error?.explanation);
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-3xl flex flex-col items-center justify-center min-h-[calc(100vh-100px)] space-y-12">
            <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-red-500/10 rounded-full mb-2">
                    <Sparkles className="w-8 h-8 text-red-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Grammar Fix</h1>
                <p className="text-muted-foreground">Spot the errors and choose the correct form.</p>
            </div>

            <div className="glass p-10 rounded-3xl border border-border w-full text-xl leading-loose font-serif text-foreground/80 relative">
                {sentenceParts.map((part, i) => {
                    if (part.errorId) {
                        const isFixed = fixedErrors.includes(part.errorId);
                        const errorData = errors.find(e => e.id === part.errorId);

                        return (
                            <span key={i} className="relative inline-block mx-1">
                                <button
                                    onClick={() => !isFixed && setActiveError(activeError === part.errorId ? null : part.errorId)}
                                    className={`px-3 py-1 rounded-lg border-b-2 transition-all ${isFixed
                                            ? 'bg-green-500/10 border-green-500 text-green-600 cursor-default'
                                            : 'bg-red-500/10 border-red-500 text-red-600 hover:bg-red-500/20'
                                        }`}
                                >
                                    {isFixed ? errorData?.correct : part.text}
                                    {isFixed && <Check className="w-3 h-3 inline-block ml-1 mb-0.5" />}
                                </button>

                                {/* Correction Popup */}
                                <AnimatePresence>
                                    {activeError === part.errorId && !isFixed && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 bg-card border border-border shadow-xl rounded-xl p-2 z-50 flex flex-col gap-1"
                                        >
                                            <div className="text-xs font-bold text-muted-foreground uppercase px-2 py-1">Choose Correction</div>
                                            {errorData?.options.map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => handleSelectOption(part.errorId!, opt)}
                                                    className="text-left px-3 py-2 rounded-lg hover:bg-secondary text-sm font-medium transition-colors"
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </span>
                        );
                    }
                    return <span key={i}>{part.text}</span>;
                })}
            </div>

            <div className="flex items-center gap-2 text-sm text-yellow-600 bg-yellow-500/10 px-4 py-2 rounded-xl border border-yellow-500/20">
                <AlertCircle className="w-4 h-4" />
                <span>Found {fixedErrors.length} / {errors.length} errors</span>
            </div>

        </div>
    );
}
