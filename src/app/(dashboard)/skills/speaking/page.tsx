"use client";

import { SpeakingHeader } from "@/components/skills/speaking/dashboard/SpeakingHeader";
import { QuickStartMic } from "@/components/skills/speaking/dashboard/QuickStartMic";
import { FluencySnapshot } from "@/components/skills/speaking/dashboard/FluencySnapshot";
import { ConfidenceRoadmap } from "@/components/skills/speaking/dashboard/ConfidenceRoadmap";
import { BrainCircuit, Ear, Sparkles, Mic2 } from "lucide-react";

export default function SpeakingDashboardPage() {
    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-8">

            {/* 1. Header & Identity */}
            <SpeakingHeader streak={4} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 2. Main Action Area (Left 2/3) */}
                <div className="lg:col-span-2 space-y-12 animate-in slide-in-from-left-4 fade-in duration-500">

                    {/* Quick Start */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-6">Start Speaking</h2>
                        <QuickStartMic />
                    </div>

                    {/* Skill Boosters (Horizontal Row) */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Skill Boosters</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: "Pronunciation IPA", icon: Ear, color: "text-electric-blue" },
                                { title: "Fluency Drills", icon: Mic2, color: "text-focus-amber" },
                                { title: "Shadowing", icon: BrainCircuit, color: "text-growth-green" },
                                { title: "Confidence Mode", icon: Sparkles, color: "text-ai-violet" },
                            ].map((tool, i) => (
                                <div key={i} className="glass-panel p-4 rounded-xl flex flex-col items-center text-center hover:bg-white/5 transition-colors cursor-pointer border border-white/5 group">
                                    <div className={`p-3 rounded-full bg-slate-900 border border-white/5 mb-3 group-hover:scale-110 transition-transform ${tool.color}`}>
                                        <tool.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-300 group-hover:text-white">{tool.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Sidebar Analytics (Right 1/3) */}
                <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-500 delay-100">
                    <div className="h-auto">
                        <FluencySnapshot />
                    </div>
                    <div className="h-auto">
                        <ConfidenceRoadmap />
                    </div>
                </div>

            </div>
        </div>
    );
}
