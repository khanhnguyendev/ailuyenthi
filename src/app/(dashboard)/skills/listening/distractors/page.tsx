"use client";

import { AlertTriangle, CheckCircle2, XCircle, Play, HelpCircle, AlertOctagon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ListeningDistractorPage() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const question = {
        audio: "audio_clip_01.mp3",
        text: "What time does the train to Manchester leave?",
        options: [
            { id: "A", text: "8:15", type: "distractor", reason: "Mentioned as the arrival time of previous train." },
            { id: "B", text: "8:45", type: "correct", reason: "Correctly stated after the delay announcement." },
            { id: "C", text: "9:00", type: "distractor", reason: "This is when the ticket office opens." }
        ]
    };

    const handleSelect = (id: string) => {
        setSelectedOption(id);
        setShowExplanation(true);
    };

    return (
        <div className="container mx-auto p-6 space-y-8 max-w-4xl">
            {/* Header */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold font-outfit text-foreground">Distractor Training</h1>
                <p className="text-muted-foreground">Learn to spot valid answers vs. tricky traps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Left: Context & Audio */}
                <div className="glass p-8 rounded-3xl border border-blue-500/20 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />

                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-inner">
                        <Play className="w-8 h-8 fill-foreground text-foreground ml-1" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Audio Clip #42</h3>
                        <p className="text-sm text-muted-foreground">Train Station Announcement</p>
                    </div>

                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-blue-500 rounded-full" />
                    </div>

                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-left w-full">
                        <h4 className="font-bold text-yellow-600 text-sm flex items-center gap-2 mb-1">
                            <AlertTriangle className="w-4 h-4" />
                            Trap Alert: Numbers
                        </h4>
                        <p className="text-xs text-yellow-600/80">
                            Be careful with times. 8:15, 8:50, and 18:50 can sound very similar in noisy environments.
                        </p>
                    </div>
                </div>

                {/* Right: Question & Options */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-foreground">{question.text}</h2>

                    <div className="space-y-3">
                        {question.options.map((opt) => (
                            <div key={opt.id} className="relative">
                                <button
                                    onClick={() => handleSelect(opt.id)}
                                    disabled={showExplanation}
                                    className={`w-full p-4 rounded-xl border text-left transition-all relative z-10 ${selectedOption === opt.id
                                            ? (opt.type === 'correct' ? 'bg-green-500/10 border-green-500 text-green-700' : 'bg-red-500/10 border-red-500 text-red-700')
                                            : showExplanation && opt.type === 'correct'
                                                ? 'bg-green-500/5 border-green-500/50 text-green-700'
                                                : 'bg-card border-border hover:bg-secondary/50'
                                        }`}
                                >
                                    <span className="font-bold mr-3">{opt.id}.</span>
                                    {opt.text}

                                    {showExplanation && (
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                            {opt.type === 'correct' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> :
                                                selectedOption === opt.id ? <XCircle className="w-5 h-5 text-red-500" /> : null}
                                        </div>
                                    )}
                                </button>

                                {/* Explanation Card */}
                                <AnimatePresence>
                                    {showExplanation && (selectedOption === opt.id || opt.type === 'correct') && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="overflow-hidden"
                                        >
                                            <div className={`mt-2 p-3 rounded-lg text-sm flex gap-2 ${opt.type === 'correct' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'}`}>
                                                {opt.type === 'distractor' && <AlertOctagon className="w-4 h-4 shrink-0 mt-0.5" />}
                                                {opt.type === 'correct' && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />}
                                                <div>
                                                    <span className="font-bold block text-xs uppercase mb-1">{opt.type === 'distractor' ? 'Distractor Logic' : 'Why it\'s correct'}</span>
                                                    {opt.reason}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <button disabled={!showExplanation} className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold opacity-50 disabled:cursor-not-allowed hover:opacity-100 transition-opacity">
                    Next Question
                </button>
            </div>
        </div>
    );
}
