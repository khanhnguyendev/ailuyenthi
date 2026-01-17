"use client";

import { Headphones, Keyboard, Check, X, RotateCcw, Zap } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ListeningSpellingPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock validation
        if (inputValue.toLowerCase() === "architecture") {
            setStatus('success');
        } else {
            setStatus('error');
        }

        setTimeout(() => {
            if (inputValue.toLowerCase() === "architecture") setInputValue("");
            setStatus('idle');
            inputRef.current?.focus();
        }, 1500);
    };

    return (
        <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-[80vh] max-w-3xl">

            {/* Top Stats */}
            <div className="w-full flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-2xl font-bold font-outfit text-foreground flex items-center gap-2">
                        <Keyboard className="w-6 h-6 text-blue-500" />
                        Spelling Drills
                    </h1>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground font-bold uppercase">Accuracy</p>
                        <p className="text-xl font-black text-green-500">92%</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground font-bold uppercase">Streak</p>
                        <p className="text-xl font-black text-orange-500 flex items-center justify-end gap-1">
                            14 <Zap className="w-4 h-4 fill-orange-500" />
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Interactive Card */}
            <div className="w-full relative">
                <motion.div
                    animate={status === 'error' ? { x: [-10, 10, -10, 10, 0] } : {}}
                    className={`glass p-12 rounded-[2.5rem] border-2 transition-colors duration-300 relative overflow-hidden flex flex-col items-center gap-8 ${status === 'success' ? 'border-green-500/50 bg-green-500/5' :
                            status === 'error' ? 'border-red-500/50 bg-red-500/5' :
                                'border-blue-500/20'
                        }`}
                >
                    {/* Audio Request Icon */}
                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-lg group">
                        <Headphones className="w-10 h-10 text-foreground group-hover:text-blue-500 transition-colors" />
                    </div>
                    <p className="text-muted-foreground font-medium text-center">
                        Press <kbd className="px-2 py-1 rounded bg-background border border-border text-xs mx-1">Space</kbd> to replay audio
                    </p>

                    {/* Input Field */}
                    <form onSubmit={handleSubmit} className="w-full max-w-md relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full bg-transparent text-center text-4xl font-bold text-foreground placeholder:text-muted-foreground/20 outline-none border-b-2 border-border focus:border-blue-500 py-4 transition-colors"
                            placeholder="Type what you hear..."
                            autoComplete="off"
                        />

                        {/* Status Icon Overlay */}
                        <AnimatePresence>
                            {status !== 'idle' && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute right-0 top-1/2 -translate-y-1/2"
                                >
                                    {status === 'success' ? (
                                        <div className="p-2 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30">
                                            <Check className="w-6 h-6" />
                                        </div>
                                    ) : (
                                        <div className="p-2 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30">
                                            <X className="w-6 h-6" />
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>

                    <div className="flex gap-2">
                        <button className="px-6 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-sm font-bold text-muted-foreground transition-colors flex items-center gap-2">
                            <RotateCcw className="w-4 h-4" /> Skip
                        </button>
                        <button onClick={handleSubmit} className="px-8 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-colors">
                            Check Answer
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Hint / Helper */}
            <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">Category: <span className="font-bold text-foreground">Academic Vocabulary</span></p>
            </div>

        </div>
    );
}
