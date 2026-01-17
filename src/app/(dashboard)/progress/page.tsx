"use client";

import { TrendingUp, Target, CalendarDays, Award, ArrowUp, MoreHorizontal, Headphones, BookOpen, PenTool, Mic } from "lucide-react";

export default function ProgressPage() {
    // Mock Data
    const overallScore = 6.5;
    const skills = [
        { name: "Listening", score: 7.0, icon: Headphones, color: "text-blue-500", bg: "bg-blue-500" },
        { name: "Reading", score: 6.5, icon: BookOpen, color: "text-orange-500", bg: "bg-orange-500" },
        { name: "Writing", score: 6.0, icon: PenTool, color: "text-green-500", bg: "bg-green-500" },
        { name: "Speaking", score: 6.5, icon: Mic, color: "text-purple-500", bg: "bg-purple-500" },
    ];

    return (
        <div className="container mx-auto p-6 max-w-7xl space-y-8">
            <h1 className="text-3xl font-bold font-outfit text-foreground mb-8">Performance Analytics</h1>

            {/* Top Row: Overall Score & Balance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* 1. Overall Estimates - Main Card */}
                <div className="lg:col-span-1 glass p-8 rounded-[2.5rem] border border-primary/20 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Estimated Band Score</span>
                        </div>
                        <div className="text-7xl font-black text-foreground tracking-tighter mb-2">
                            {overallScore}
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-bold">
                            <ArrowUp className="w-3 h-3" />
                            Top 35% of users
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Target Score</span>
                            <span className="font-bold">7.5</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                            You are 0.5 points away from your next milestone!
                        </p>
                    </div>
                </div>

                {/* 2. Skill Balance (Visual) */}
                <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border border-border flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-6 w-full">
                        <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                            <Target className="w-5 h-5 text-muted-foreground" />
                            Skill Breakdown
                        </h3>
                        {skills.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between items-center text-sm font-bold">
                                    <div className="flex items-center gap-2">
                                        <skill.icon className={`w-4 h-4 ${skill.color}`} />
                                        <span className="text-foreground">{skill.name}</span>
                                    </div>
                                    <span className={skill.color}>{skill.score}</span>
                                </div>
                                <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                                    {/* Mocking the 'fill' width relative to 9.0 max */}
                                    <div
                                        className={`h-full rounded-full ${skill.bg}`}
                                        style={{ width: `${(skill.score / 9) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fun 'Balance' Visualization Check */}
                    <div className="w-full max-w-[200px] aspect-square rounded-full border-[12px] border-secondary flex items-center justify-center relative p-4">
                        <div className="absolute inset-0 rounded-full border-[12px] border-primary/30 border-t-primary border-r-primary border-l-transparent border-b-transparent rotate-45" />
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-foreground">Good</span>
                            <span className="text-xs text-muted-foreground">Balance</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row: History & Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Recent Activity Graph (Mock) */}
                <div className="glass p-8 rounded-3xl border border-border">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            Progress History
                        </h3>
                        <button className="p-2 hover:bg-secondary rounded-full">
                            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                        </button>
                    </div>

                    {/* CSS Bar Chart */}
                    <div className="h-48 flex items-end justify-between gap-2">
                        {[6.0, 6.0, 6.5, 6.0, 6.5, 7.0, 6.5].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                                <div
                                    className="w-full bg-secondary rounded-t-xl group-hover:bg-primary transition-colors relative"
                                    style={{ height: `${(val / 9) * 100}%` }}
                                >
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-foreground text-background text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {val}
                                    </div>
                                </div>
                                <span className="text-xs text-muted-foreground font-mono">Day {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Training Log */}
                <div className="glass p-8 rounded-3xl border border-border">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-purple-500" />
                            Recent Training
                        </h3>
                        <button className="text-xs font-bold text-primary hover:underline">View All</button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "Listening: Map Labeling", score: "80%", date: "2 hours ago", color: "bg-blue-500" },
                            { title: "Speaking: Part 2 Drill", score: "Completed", date: "Yesterday", color: "bg-purple-500" },
                            { title: "Reading: True/False", score: "6/10", date: "Yesterday", color: "bg-orange-500" },
                        ].map((log, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                                <div className={`w-2 h-2 rounded-full ${log.color}`} />
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-foreground">{log.title}</h4>
                                    <p className="text-xs text-muted-foreground">{log.date}</p>
                                </div>
                                <span className="text-sm font-bold text-foreground bg-secondary px-2 py-1 rounded-lg">
                                    {log.score}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
