"use client";

import { Mic, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

interface SpeakingHeaderProps {
    streak: number;
}

export function SpeakingHeader({ streak }: SpeakingHeaderProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl glass p-8 mb-8">

            {/* Background Breathing Pulse */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-96 h-96 bg-blue-500 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
                            <Mic className="w-6 h-6 text-blue-500" />
                        </div>
                        <h1 className="text-3xl font-bold text-foreground font-outfit">Speaking</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md">
                        Build confidence, fluency, and examiner-ready intonation. Practice daily.
                    </p>
                </div>

                <div className="flex gap-4">
                    <div className="bg-card/50 backdrop-blur-md px-4 py-2 rounded-xl border border-border flex flex-col items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase">Estimated Band</span>
                        <span className="text-xl font-bold text-foreground">5.5 <span className="text-muted-foreground text-sm">→</span> <span className="text-green-500">6.5</span></span>
                    </div>

                    <div className="bg-card/50 backdrop-blur-md px-4 py-2 rounded-xl border border-border flex flex-col items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                            Streak <Zap className="w-3 h-3 text-orange-500 fill-current" />
                        </span>
                        <span className="text-xl font-bold text-foreground">{streak} Days</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
