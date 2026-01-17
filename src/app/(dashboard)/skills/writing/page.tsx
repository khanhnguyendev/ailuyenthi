"use client";

import { WritingHeader } from "@/components/skills/writing/dashboard/WritingHeader";
import { QuickStartAction } from "@/components/skills/writing/dashboard/QuickStartAction";
import { PerformanceSnapshot } from "@/components/skills/writing/dashboard/PerformanceSnapshot";
import { ImprovementRoadmap } from "@/components/skills/writing/dashboard/ImprovementRoadmap";
import { Hammer, BookA, Sparkles, Languages } from "lucide-react";

export default function WritingDashboardPage() {
    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-8">

            {/* 1. Header & Identity */}
            <WritingHeader streak={3} currentBand={6.0} targetBand={6.5} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 2. Main Action Area (Left 2/3) */}
                <div className="lg:col-span-2 space-y-12 animate-in slide-in-from-left-4 fade-in duration-500">

                    {/* Quick Start */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-6">Choose Practice Mode</h2>
                        <QuickStartAction />
                    </div>

                    {/* Skill Boosters (Horizontal Row) */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Skill Boosters</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: "Sentence Builder", icon: Hammer, color: "text-electric-blue" },
                                { title: "Paragraph Logic", icon: BookA, color: "text-focus-amber" },
                                { title: "Vocabulary", icon: Languages, color: "text-growth-green" },
                                { title: "Grammar Fix", icon: Sparkles, color: "text-ai-violet" },
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
                        <PerformanceSnapshot />
                    </div>
                    <div className="h-auto">
                        <ImprovementRoadmap />
                    </div>
                </div>

            </div>
        </div>
    );
}
