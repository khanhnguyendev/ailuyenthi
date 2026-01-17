"use client";

import { Hammer, RotateCcw, Check, Sparkles, HelpCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WritingSentencePage() {
    // Challenge Data
    const correctSentence = "The government should invest in public transport to reduce pollution.";
    const initialWords = [
        { id: 1, text: "The" }, { id: 2, text: "government" }, { id: 3, text: "should" },
        { id: 4, text: "invest" }, { id: 5, text: "in" }, { id: 6, text: "public" },
        { id: 7, text: "transport" }, { id: 8, text: "to" }, { id: 9, text: "reduce" },
        { id: 10, text: "pollution." }
    ];

    // Scramble function
    const scramble = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

    const [pool, setPool] = useState(() => scramble(initialWords));
    const [constructed, setConstructed] = useState<any[]>([]);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handlePoolClick = (word: any) => {
        setConstructed([...constructed, word]);
        setPool(pool.filter(w => w.id !== word.id));
        setStatus('idle');
    };

    const handleConstructedClick = (word: any) => {
        setPool([...pool, word]);
        setConstructed(constructed.filter(w => w.id !== word.id));
        setStatus('idle');
    };

    const handleCheck = () => {
        const attempt = constructed.map(w => w.text).join(" ");
        if (attempt === correctSentence) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    const handleReset = () => {
        setConstructed([]);
        setPool(scramble(initialWords));
        setStatus('idle');
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl space-y-12 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">

            <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-secondary rounded-full mb-2">
                    <Hammer className="w-8 h-8 text-foreground" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Sentence Builder</h1>
                <p className="text-muted-foreground">Construct a complex sentence from the scrambled words.</p>
            </div>

            {/* Construction Area */}
            <div className={`w-full min-h-[160px] p-8 rounded-3xl border-2 transition-all flex flex-wrap items-center justify-center gap-3 relative ${status === 'success' ? 'bg-green-500/10 border-green-500' :
                    status === 'error' ? 'bg-red-500/10 border-red-500' :
                        'bg-background border-dashed border-border'
                }`}>
                <AnimatePresence>
                    {constructed.length === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-muted-foreground/30 font-bold text-lg uppercase tracking-widest">Build Here</span>
                        </div>
                    )}
                    {constructed.map((word) => (
                        <motion.button
                            layoutId={`${word.id}`}
                            key={word.id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={() => handleConstructedClick(word)}
                            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                        >
                            {word.text}
                        </motion.button>
                    ))}
                </AnimatePresence>

                {/* Success Badge */}
                {status === 'success' && (
                    <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full shadow-lg"
                    >
                        <Check className="w-6 h-6" />
                    </motion.div>
                )}
            </div>

            {/* Word Pool */}
            <div className="w-full">
                <div className="flex flex-wrap items-center justify-center gap-4 min-h-[100px]">
                    <AnimatePresence>
                        {pool.map((word) => (
                            <motion.button
                                layoutId={`${word.id}`}
                                key={word.id}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={() => handlePoolClick(word)}
                                className="px-4 py-2 rounded-xl bg-secondary text-foreground font-medium border border-border hover:border-primary/50 transition-colors"
                            >
                                {word.text}
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
                <button
                    onClick={handleReset}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors text-muted-foreground"
                    title="Reset"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>
                <button
                    onClick={handleCheck}
                    disabled={pool.length > 0 || status === 'success'}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                    <Sparkles className="w-5 h-5 fill-current" />
                    Check Answer
                </button>
                <button
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors text-muted-foreground"
                    title="Hint"
                >
                    <HelpCircle className="w-5 h-5" />
                </button>
            </div>

            {status === 'error' && (
                <p className="text-red-500 font-bold animate-pulse">Incorrect structure. Try again!</p>
            )}
        </div>
    );
}
