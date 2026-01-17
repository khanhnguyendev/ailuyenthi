"use client";

import { Mic, Timer, Shuffle, Play, Square, RefreshCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpeakingFluencyPage() {
    const [topic, setTopic] = useState<string | null>(null);
    const [phase, setPhase] = useState<'idle' | 'prep' | 'speaking' | 'review'>('idle');
    const [timeLeft, setTimeLeft] = useState(0);

    const topics = [
        "Describe a time when you helped someone.",
        "Talk about a book you recently read.",
        "Describe a memorable holiday you had.",
        "Talk about a skill you would like to learn."
    ];

    const generateTopic = () => {
        const random = topics[Math.floor(Math.random() * topics.length)];
        setTopic(random);
        setPhase('prep');
        setTimeLeft(60); // 1 minute prep
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if ((phase === 'prep' || phase === 'speaking') && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            if (phase === 'prep') {
                setPhase('speaking');
                setTimeLeft(120); // 2 mins speaking
            } else if (phase === 'speaking') {
                setPhase('review');
            }
        }
        return () => clearInterval(interval);
    }, [phase, timeLeft]);

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const s = secs % 60;
        return `${mins}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl min-h-[calc(100vh-100px)] flex flex-col items-center justify-center space-y-12">

            <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-orange-500/10 rounded-full mb-2">
                    <Timer className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Fluency Drills</h1>
                <p className="text-muted-foreground">Practice IELTS Speaking Part 2: Long Turn.</p>
            </div>

            {phase === 'idle' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <button
                        onClick={generateTopic}
                        className="group relative px-12 py-6 rounded-3xl bg-gradient-to-br from-primary to-orange-500 text-white font-bold text-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        <span className="flex items-center gap-4">
                            <Shuffle className="w-8 h-8" />
                            Generate Topic
                        </span>
                        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    </button>
                    <p className="text-center mt-6 text-muted-foreground">
                        You will have 1 minute to prepare <br /> and 2 minutes to speak.
                    </p>
                </motion.div>
            )}

            {phase !== 'idle' && topic && (
                <div className="w-full max-w-2xl space-y-8">
                    {/* Topic Card */}
                    <div className="glass p-8 rounded-[2.5rem] border border-border text-center shadow-lg relative overflow-hidden">
                        <div className={`absolute top-0 inset-x-0 h-2 transition-colors duration-500 ${phase === 'prep' ? 'bg-blue-500' : phase === 'speaking' ? 'bg-green-500' : 'bg-gray-500'}`} />

                        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Topic Card</h2>
                        <h3 className="text-3xl font-bold text-foreground leading-tight mb-8">"{topic}"</h3>

                        <ul className="text-left max-w-sm mx-auto space-y-2 text-muted-foreground text-sm list-disc pl-5">
                            <li>You should say what it was</li>
                            <li>When it happened</li>
                            <li>Who you were with</li>
                            <li>And explain why it was significant to you</li>
                        </ul>
                    </div>

                    {/* Timer & Controls */}
                    <div className="flex flex-col items-center gap-6">
                        <div className={`text-6xl font-black font-mono tabular-nums tracking-tight ${phase === 'prep' ? 'text-blue-500' :
                                phase === 'speaking' ? 'text-green-500 animate-pulse' : 'text-gray-400'
                            }`}>
                            {formatTime(timeLeft)}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                            {phase === 'prep' && <span className="text-blue-500 flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" /> Preparing</span>}
                            {phase === 'speaking' && <span className="text-green-500 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-ping" /> Recording</span>}
                            {phase === 'review' && <span className="text-foreground">Time's Up</span>}
                        </div>

                        {phase === 'speaking' ? (
                            <button onClick={() => setPhase('review')} className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-lg transition-all hover:scale-110">
                                <Square className="w-6 h-6 fill-current" />
                            </button>
                        ) : phase === 'review' ? (
                            <button onClick={() => setPhase('idle')} className="px-8 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-bold flex items-center gap-2 transition-all">
                                <RefreshCcw className="w-5 h-5" />
                                New Topic
                            </button>
                        ) : (
                            <button onClick={() => { setPhase('speaking'); setTimeLeft(120); }} className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold flex items-center gap-2 transition-all shadow-lg shadow-green-500/25">
                                <Mic className="w-5 h-5" />
                                Start Speaking Now
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
