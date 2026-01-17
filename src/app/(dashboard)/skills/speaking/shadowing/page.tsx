"use client";

import { Play, Pause, RotateCw, Mic, Volume2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SpeakingShadowingPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);

    return (
        <div className="container mx-auto p-6 max-w-6xl space-y-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-4">
                <div className="p-3 bg-red-500/10 rounded-full">
                    <Volume2 className="w-8 h-8 text-red-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Video Shadowing</h1>
                <p className="text-muted-foreground">Mimic the speaker's intonation and facial expressions.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Video Area */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="aspect-video bg-black rounded-3xl overflow-hidden relative group shadow-2xl">
                        {/* Mock Video Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                            <div className="w-32 h-32 rounded-full bg-zinc-800 flex items-center justify-center">
                                <span className="text-zinc-600 font-bold">Video Feed</span>
                            </div>
                        </div>

                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-8 backdrop-blur-sm">
                            <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-all">
                                <RotateCw className="w-8 h-8 -scale-x-100" /> {/* Rewind */}
                            </button>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                            >
                                {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-2" />}
                            </button>
                            <button
                                onClick={() => setSpeed(speed === 1 ? 0.75 : 1)}
                                className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-all font-bold"
                            >
                                {speed}x
                            </button>
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl glass border border-border flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                                <Mic className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">Your Recording</h3>
                                <p className="text-xs text-muted-foreground">Press to start comparing</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold transition-all shadow-lg shadow-red-500/20">
                            Record
                        </button>
                    </div>
                </div>

                {/* Script / Intonation Panel */}
                <div className="lg:col-span-4 flex flex-col h-full max-h-[600px]">
                    <div className="glass flex-1 rounded-3xl border border-border overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-border bg-secondary/30">
                            <h3 className="font-bold text-foreground">Script & Intonation</h3>
                        </div>

                        <div className="p-8 space-y-6 overflow-y-auto text-lg leading-loose font-medium text-muted-foreground">
                            <p>
                                <span className="text-foreground border-b-2 border-red-500">Today</span>, we're going to talk about
                                <span className="text-foreground font-bold"> climate change</span>.
                                <span className="text-xs align-top text-blue-500 mx-1">↗</span>
                            </p>
                            <p>
                                It is
                                <span className="bg-yellow-500/20 text-foreground px-1 rounded mx-1">undeniably</span>
                                one of the biggest challenges
                                <span className="text-xs align-top text-blue-500 mx-1">↘</span>
                            </p>
                            <p>
                                facing <span className="text-foreground border-b-2 border-red-500">humanity</span> in the 21st century.
                            </p>
                        </div>

                        <div className="p-4 bg-secondary/50 border-t border-border text-xs text-center text-muted-foreground">
                            <span className="text-blue-500 font-bold">↗</span> Rising Intonation •
                            <span className="text-red-500 font-bold ml-2">__</span> Stress
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
