"use client";

import { Target, CheckSquare, ListOrdered, FileText, ArrowRight, BrainCircuit, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ReadingFocusedPage() {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const questionTypes = [
        { id: "TFNG", title: "True / False / Not Given", icon: CheckSquare, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", mastery: 45, desc: "Identify factual accuracy vs missing info." },
        { id: "HEADINGS", title: "Matching Headings", icon: ListOrdered, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", mastery: 70, desc: "Match paragraphs to their main idea." },
        { id: "GAP", title: "Summary Completion", icon: FileText, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20", mastery: 30, desc: "Fill in gaps using words from text." },
        { id: "MCQ", title: "Multiple Choice", icon: BrainCircuit, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", mastery: 85, desc: "Choose the correct option among distractors." },
    ];

    return (
        <div className="container mx-auto p-6 max-w-6xl space-y-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <div className="p-3 bg-secondary rounded-full">
                    <Target className="w-8 h-8 text-foreground" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Weakness Focus Drill</h1>
                <p className="text-muted-foreground max-w-lg">
                    Target specific question types that are dragging down your score. Master each format individually.
                </p>
            </div>

            {!selectedType ? (
                /* Type Selector Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {questionTypes.map((type, idx) => (
                        <motion.div
                            key={type.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedType(type.id)}
                            className={`glass p-6 rounded-3xl border ${type.border} hover:border-primary/50 cursor-pointer transition-all hover:scale-[1.02] group relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${type.bg} blur-3xl rounded-full opacity-50`} />

                            <div className="relative z-10 flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl ${type.bg} flex items-center justify-center`}>
                                        <type.icon className={`w-6 h-6 ${type.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{type.title}</h3>
                                        <p className="text-sm text-muted-foreground">{type.desc}</p>
                                    </div>
                                </div>
                                <div className="p-2 rounded-full bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-muted-foreground">Mastery Level</span>
                                    <span className={type.color}>{type.mastery}%</span>
                                </div>
                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${type.mastery}%` }}
                                        className={`h-full rounded-full ${type.color.replace('text-', 'bg-')}`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                /* Drill View (Mock) */
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                >
                    <button
                        onClick={() => setSelectedType(null)}
                        className="text-sm font-bold text-muted-foreground hover:text-foreground flex items-center gap-2"
                    >
                        ← Back to Selection
                    </button>

                    <div className="glass p-8 rounded-3xl border border-border flex flex-col items-center justify-center text-center min-h-[400px]">
                        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 animate-pulse">
                            <Target className="w-8 h-8 text-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Starting Drill: {questionTypes.find(t => t.id === selectedType)?.title}</h2>
                        <p className="text-muted-foreground max-w-md mb-8">
                            You will face 10 rapid-fire questions of this specific type. Focus on identifying keywords and synonyms.
                        </p>
                        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                            Begin Practice
                        </button>
                    </div>

                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex gap-4 items-start">
                        <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-orange-600 text-sm">Strategy Tip</h4>
                            <p className="text-sm text-orange-600/80">
                                For {questionTypes.find(t => t.id === selectedType)?.title}, always read the questions BEFORE reading the text passage to know what you are looking for.
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
