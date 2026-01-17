"use client";

import { Mic, Play, Pause, RotateCcw, Volume2, Activity, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ListeningShadowingPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    return (
        <div className="container mx-auto p-6 space-y-8 max-w-5xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-outfit text-foreground flex items-center gap-3">
                        Shadowing Practice
                        <span className="text-sm font-normal px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                            Imitation Technique
                        </span>
                    </h1>
                    <p className="text-muted-foreground mt-1">Listen to the native speaker and repeat immediately to improve flow.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
                {/* Left: Audio & Controls */}
                <div className="glass p-8 rounded-3xl border border-blue-500/20 flex flex-col justify-between relative overflow-hidden">
                    {/* Background Decor */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500/5 blur-3xl rounded-full" />

                    {/* Speaker Info */}
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">
                            JD
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">John Doe</h3>
                            <p className="text-sm text-muted-foreground">British Accent • News Report</p>
                        </div>
                    </div>

                    {/* Visualization Mockup */}
                    <div className="flex items-center justify-center h-40 gap-1 opacity-80">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: isPlaying ? [16, 48, 16] : 16 }}
                                transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                                className="w-2 bg-blue-500/50 rounded-full"
                            />
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center justify-center gap-6">
                            <button className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-foreground">
                                <RotateCcw className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-6 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white shadow-xl shadow-blue-500/30 scale-110"
                            >
                                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                            </button>
                            <button
                                onClick={() => setIsRecording(!isRecording)}
                                className={`p-4 rounded-full transition-colors text-white ${isRecording ? 'bg-red-500 shadow-xl shadow-red-500/30 animate-pulse' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
                            >
                                <Mic className={`w-6 h-6 ${isRecording ? 'fill-current' : ''}`} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between text-xs font-bold text-muted-foreground px-4">
                            <span>00:45</span>
                            <div className="w-full mx-4 h-1.5 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full w-1/3 bg-blue-500 rounded-full" />
                            </div>
                            <span>02:15</span>
                        </div>
                    </div>
                </div>

                {/* Right: Transcript */}
                <div className="glass p-8 rounded-3xl border border-border flex flex-col relative overflow-hidden">
                    <h3 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                        Transcript
                        <span className="text-xs font-normal px-2 py-0.5 rounded bg-secondary text-muted-foreground">Auto-scroll</span>
                    </h3>

                    <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
                        <p className="text-lg leading-relaxed text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            Today, we are discussing the impact of climate change on coastal cities.
                        </p>
                        <p className="text-xl leading-relaxed text-foreground font-medium border-l-4 border-blue-500 pl-4 bg-secondary/30 py-2 rounded-r-lg">
                            Researchers suggest that rising sea levels could displace millions by the year 2050 if immediate action is not taken.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            However, new technologies in flood defense systems are providing a glimmer of hope for these vulnerable areas.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
                            Specifically, the Netherlands has been pioneering amphibious architecture that adapts to changing water levels.
                        </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-foreground font-bold">
                            <Volume2 className="w-4 h-4 text-blue-500" />
                            Match Score: <span className="text-green-500">85%</span>
                        </div>
                        <button className="text-sm font-bold text-blue-500 hover:underline flex items-center gap-1">
                            Next Segment <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
