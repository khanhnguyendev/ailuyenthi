"use client";

import { Headphones, BookOpen, PenTool, Mic, Search, Filter, Play, Star, Zap, Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PracticeHubPage() {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    const activities = [
        { id: 1, title: "Full Listening Mock Test 1", skill: "listening", type: "Full Test", duration: "40 min", level: "Band 6-7", icon: Headphones, color: "text-blue-500", bg: "bg-blue-500/10" },
        { id: 2, title: "Environment Vocabulary", skill: "writing", type: "Drill", duration: "15 min", level: "Band 7+", icon: PenTool, color: "text-green-500", bg: "bg-green-500/10" },
        { id: 3, title: "Speed Reading: Tech", skill: "reading", type: "Drill", duration: "10 min", level: "Band 6.5", icon: BookOpen, color: "text-orange-500", bg: "bg-orange-500/10" },
        { id: 4, title: "Part 2 Speaking: Urban Life", skill: "speaking", type: "Simulation", duration: "5 min", level: "Band 6+", icon: Mic, color: "text-purple-500", bg: "bg-purple-500/10" },
        { id: 5, title: "Map Labeling Practice", skill: "listening", type: "Drill", duration: "10 min", level: "Band 5-6", icon: Headphones, color: "text-blue-500", bg: "bg-blue-500/10" },
        { id: 6, title: "Essay Structure: Agree/Disagree", skill: "writing", type: "Lesson", duration: "25 min", level: "Band 7.5", icon: PenTool, color: "text-green-500", bg: "bg-green-500/10" },
    ];

    const filteredActivities = activities.filter(act =>
        (filter === "all" || act.skill === filter) &&
        act.title.toLowerCase().includes(search.toLowerCase())
    );

    const categories = [
        { id: "all", label: "All Skills" },
        { id: "listening", label: "Listening", icon: Headphones },
        { id: "reading", label: "Reading", icon: BookOpen },
        { id: "writing", label: "Writing", icon: PenTool },
        { id: "speaking", label: "Speaking", icon: Mic },
    ];

    return (
        <div className="container mx-auto p-6 max-w-7xl space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 bg-gradient-to-r from-primary/10 to-transparent p-8 rounded-[2.5rem] border border-primary/20">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold font-outfit text-foreground">Practice Hub</h1>
                    <p className="text-muted-foreground max-w-xl text-lg">
                        Access our complete library of mock tests, micro-drills, and skill builders.
                        Filter by skill to target your weaknesses.
                    </p>
                </div>
                <div className="glass p-1 rounded-full flex gap-1 border border-border">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${filter === cat.id
                                ? 'bg-primary text-primary-foreground shadow-lg'
                                : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {cat.icon && <cat.icon className="w-4 h-4" />}
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search & Stats Bar */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search for 'Map Labeling', 'Vocabulary', etc..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-secondary/30 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                    />
                </div>
                <button className="px-6 py-4 rounded-2xl border border-border bg-card hover:bg-secondary flex items-center gap-2 font-bold transition-colors">
                    <Filter className="w-4 h-4" />
                    Filters
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredActivities.map((act) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={act.id}
                            className="glass p-6 rounded-3xl border border-border hover:border-primary/50 transition-all group hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-2xl ${act.bg} flex items-center justify-center`}>
                                    <act.icon className={`w-6 h-6 ${act.color}`} />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                    {act.type}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{act.title}</h3>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {act.duration}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    {act.level}
                                </div>
                            </div>

                            <button className="w-full py-3 rounded-xl bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all font-bold flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                Start Now
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Missing Content Hint */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-dashed border-border text-center">
                <div className="flex justify-center mb-4">
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 animate-pulse" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Want more tailored practice?</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Our AI analyzes your mistakes and generates specific drills to help you improve faster.
                </p>
                <Link href="/subscription" className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity">
                    <Sparkles className="w-4 h-4" />
                    Unlock Smart Recommendations
                </Link>
            </div>
        </div>
    );
}
