"use client";

import { Activity, Mic, Volume2 } from "lucide-react";

export function FluencySnapshot() {
    const metrics = [
        { name: "Fluency & Coherence", score: 5.5, color: "bg-orange-500" },
        { name: "Lexical Resource", score: 5.0, color: "bg-destructive" },
        { name: "Grammatical Range", score: 6.0, color: "bg-orange-500" },
        { name: "Pronunciation", score: 5.5, color: "bg-destructive" },
    ];

    return (
        <div className="glass p-6 rounded-2xl h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-500" /> Speaking Analysis
                </h3>
                <span className="text-2xl font-bold text-foreground">5.5</span>
            </div>

            {/* Breakdown */}
            <div className="space-y-4 mb-8">
                {metrics.map((m) => (
                    <div key={m.name}>
                        <div className="flex justify-between text-xs font-bold text-muted-foreground mb-1">
                            <span>{m.name}</span>
                            <span className="text-foreground">{m.score}</span>
                        </div>
                        <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full ${m.color}`}
                                style={{ width: `${(m.score / 9) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pronunciation Focus */}
            <div className="mt-auto bg-muted/50 border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 text-foreground font-bold text-sm mb-3">
                    <Mic className="w-4 h-4 text-blue-500" /> Weak Sounds
                </div>
                <div className="flex gap-2">
                    {["/θ/", "/ð/", "/ə/"].map((sound) => (
                        <button key={sound} className="px-3 py-1.5 bg-background rounded-lg text-sm font-mono text-blue-500 hover:bg-blue-500 hover:text-primary-foreground transition-colors flex items-center gap-2 cursor-pointer border border-border">
                            {sound} <Volume2 className="w-3 h-3" />
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}
