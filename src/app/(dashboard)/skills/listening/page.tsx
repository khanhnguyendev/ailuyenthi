"use client";

import { ListeningHeader } from "@/components/skills/listening/dashboard/ListeningHeader";
import { QuickStartGrid } from "@/components/skills/listening/dashboard/QuickStartGrid";
import { ProgressTile } from "@/components/skills/listening/dashboard/ProgressTile";
import { BoosterCard } from "@/components/skills/listening/dashboard/BoosterCard";
import { Mic2, Keyboard, Zap, Ear } from "lucide-react";

export default function ListeningDashboardPage() {
    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-8">

            {/* 1. Header & Identity */}
            <ListeningHeader streak={5} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 2. Main Action Area (Left 2/3) */}
                <div className="lg:col-span-2 space-y-8 animate-in slide-in-from-left-4 fade-in duration-500">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Quick Start</h2>
                        <QuickStartGrid />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Skill Boosters</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <BoosterCard
                                title="Shadowing Practice"
                                desc="Mimic native speakers for flow."
                                icon={Mic2}
                                color="text-ai-violet"
                            />
                            <BoosterCard
                                title="Spelling Drills"
                                desc="Names, numbers, & addresses."
                                icon={Keyboard}
                                color="text-focus-amber"
                            />
                            <BoosterCard
                                title="Distractor Training"
                                desc="Learn to spot trick answers."
                                icon={Zap}
                                color="text-alert-rose"
                            />
                            <BoosterCard
                                title="Accent Training"
                                desc="UK, Australian, & US Voices."
                                icon={Ear}
                                color="text-electric-blue"
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Sidebar Stats (Right 1/3) */}
                <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-500 delay-100">
                    <div className="h-64">
                        <ProgressTile />
                    </div>

                    {/* Recent Activity List (Mini) */}
                    <div className="glass-panel p-6 rounded-2xl">
                        <h3 className="font-bold text-white mb-4">Recent Tests</h3>
                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <div className="text-slate-300 font-medium">Test {i} Full Exam</div>
                                        <div className="text-xs text-slate-500">2 days ago</div>
                                    </div>
                                    <span className="font-mono font-bold text-growth-green">7.5</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
