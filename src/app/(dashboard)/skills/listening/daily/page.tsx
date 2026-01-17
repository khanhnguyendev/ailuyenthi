"use client";

import { Flame, Play, Clock, Trophy, Users, Star, ArrowRight, BarChart3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ListeningDailyChallengePage() {
    return (
        <div className="container mx-auto p-6 space-y-8 max-w-5xl">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-outfit text-foreground flex items-center gap-3">
                        Daily Challenge
                        <span className="text-sm font-normal px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                            Listening Module
                        </span>
                    </h1>
                    <p className="text-muted-foreground mt-1">Complete your daily mission to keep your streak alive!</p>
                </div>

                {/* Streak Counter */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 px-5 py-2.5 rounded-2xl backdrop-blur-md">
                    <div className="relative">
                        <Flame className="w-6 h-6 text-orange-500 fill-orange-500 animate-pulse" />
                        <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full animate-pulse" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Current Streak</p>
                        <p className="text-xl font-black text-orange-500 leading-none">12 Days</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Challenge Card (2 cols) */}
                <div className="lg:col-span-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass p-8 rounded-3xl border border-blue-500/20 relative overflow-hidden group"
                    >
                        {/* Background Gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/10">
                                    TODAY'S MISSION
                                </span>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-4 h-4 fill-yellow-500" />
                                    <span className="font-bold">+50 XP</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                                Map Labeling: <br />
                                <span className="text-blue-500">Central Library Layout</span>
                            </h2>
                            <p className="text-foreground/80 mb-8 max-w-lg leading-relaxed">
                                Listen to the librarian explain the new floor plan. Identify locations regarding the quiet zone, computer lab, and check-out desk.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span>5 Minutes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-green-400" />
                                    <span>Band 6.5+ Level</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-purple-400" />
                                    <span>2.4k Completed</span>
                                </div>
                            </div>

                            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 flex items-center gap-3 transition-all hover:scale-105 active:scale-95">
                                <Play className="w-5 h-5 fill-white" />
                                Start Challenge
                            </button>
                        </div>
                    </motion.div>

                    {/* Previous Days / History */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            Previous Challenges
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Form Completion: Hotel Booking", score: "9/10", date: "Yesterday", color: "text-green-500" },
                                { title: "Multiple Choice: Science Talk", score: "7/10", date: "2 days ago", color: "text-amber-500" }
                            ].map((item, i) => (
                                <div key={i} className="glass p-4 rounded-xl border border-border/50 hover:bg-secondary/30 transition-colors flex justify-between items-center cursor-pointer group">
                                    <div>
                                        <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                                    </div>
                                    <div className={`font-mono font-bold ${item.score === '9/10' ? 'text-green-500' : 'text-amber-500'}`}>
                                        {item.score}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar (Leaderboard & Stats) */}
                <div className="space-y-6">
                    {/* Leaderboard Widget */}
                    <div className="glass rounded-2xl border border-border p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-foreground flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-yellow-500" />
                                Top Learners
                            </h3>
                            <Link href="#" className="text-xs text-primary hover:underline">View All</Link>
                        </div>
                        <div className="space-y-5">
                            {[
                                { name: "Sarah K.", xp: "12,450", rank: 1, avatar: "bg-purple-500" },
                                { name: "Mike R.", xp: "11,200", rank: 2, avatar: "bg-blue-500" },
                                { name: "You", xp: "8,950", rank: 42, avatar: "bg-primary" },
                            ].map((user, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-6 text-center font-bold text-sm ${user.rank <= 3 ? "text-yellow-500" : "text-muted-foreground"}`}>
                                        #{user.rank}
                                    </div>
                                    <div className={`w-8 h-8 rounded-full ${user.avatar} flex items-center justify-center text-white text-xs font-bold`}>
                                        {user.name[0]}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-foreground leading-none">{user.name}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{user.xp} XP</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tip Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/10 p-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-blue-400" />
                                Pro Tip
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Don't just listen for keywords. Listen for synonyms and paraphrasing, as the answer often uses different words than the question!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
