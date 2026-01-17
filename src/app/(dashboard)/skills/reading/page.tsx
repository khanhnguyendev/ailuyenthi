"use client";

import { SkillHeader } from "@/components/skills/reading/dashboard/SkillHeader";
import { BandProgress } from "@/components/skills/reading/dashboard/BandProgress";
import { PracticeSelector } from "@/components/skills/reading/dashboard/PracticeSelector";
import { AlertTriangle, TrendingUp, History } from "lucide-react";

export default function ReadingDashboardPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-20">

            {/* Header */}
            <SkillHeader
                title="IELTS Reading"
                desc="Improve your reading speed, accuracy, and question-type strategies."
                streak={12}
            />

            {/* Progress Section */}
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <BandProgress current={6.5} target={7.5} history={[5.5, 6.0, 6.5]} />
            </section>

            {/* Practice Modes */}
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Choose Practice Mode</h2>
                    <span className="text-sm text-slate-500">Recommended for you</span>
                </div>
                <PracticeSelector />
            </section>

            {/* Smart Insights & History Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">

                {/* Weakness Analysis */}
                <div className="glass-card p-6 rounded-2xl border border-alert-rose/20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-alert-rose/10 p-2 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-alert-rose" />
                        </div>
                        <h3 className="font-bold text-white text-lg">Focus Areas</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-bold text-slate-300">True / False / Not Given</span>
                                <span className="text-alert-rose font-bold">42% Accuracy</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-alert-rose h-full w-[42%]" />
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                                You often confuse "False" with "Not Given". Try finding direct contradiction evidence.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-bold text-slate-300">Matching Headings</span>
                                <span className="text-focus-amber font-bold">65% Accuracy</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-focus-amber h-full w-[65%]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-electric-blue/10 p-2 rounded-lg">
                            <History className="w-5 h-5 text-electric-blue" />
                        </div>
                        <h3 className="font-bold text-white text-lg">Recent Activity</h3>
                    </div>

                    <div className="space-y-4">
                        {[
                            { date: "Today", mode: "Daily Practice", score: "8/10", trend: "up" },
                            { date: "Yesterday", mode: "Mock Test 4", score: "Band 6.5", trend: "same" },
                            { date: "Jan 15", mode: "Weakness Focus", score: "Completed", trend: "up" },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                                <div>
                                    <h4 className="font-bold text-slate-200 text-sm">{item.mode}</h4>
                                    <span className="text-xs text-slate-500">{item.date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-sm font-bold text-electric-blue">{item.score}</span>
                                    {item.trend === "up" && <TrendingUp className="w-4 h-4 text-growth-green" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </div>
    );
}
