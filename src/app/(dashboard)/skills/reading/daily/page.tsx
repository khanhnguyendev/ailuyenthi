"use client";

import { BookOpen, Clock, Settings, ArrowRight, CheckCircle2, AlignLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ReadingDailyPage() {
    const [fontSize, setFontSize] = useState(16);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [activeQuestion, setActiveQuestion] = useState(0);

    // Mock Article Data
    const article = {
        title: "The Future of Urban Farming",
        category: "Environment & Society",
        level: "Band 7.0",
        content: `
            <p class="mb-4">As distinct from traditional agriculture, which takes place in rural areas, urban agriculture is the practice of cultivating, processing, and distributing food in or around urban areas. Urban agriculture can also involve animal husbandry, aquaculture, agroforestry, urban beekeeping, and horticulture.</p>
            
            <p class="mb-4">Urban agriculture occurs on many levels. From balcony gardens and community gardens to vertical farms and hydroponic facilities, the scale varies significantly. The rise of these practices is driven by a growing awareness of food security, climate change, and urbanization.</p>
            
            <p class="mb-4">One of the primary benefits is the reduction of "food miles," or the distance food travels from farm to table. By growing food closer to where it is consumed, carbon emissions associated with transportation are significantly reduced. Furthermore, urban farms often utilize organic waste from the city as compost, creating a closed-loop system that reduces landfill usage.</p>
            
            <p class="mb-4">However, challenges remain. Urban soil is often contaminated with heavy metals, requiring expensive remediation or the use of raised beds. Additionally, the high cost of urban real estate can make large-scale operations economically difficult without subsidies or high-value crops.</p>

            <p class="mb-4">Technological innovations such as hydroponics (growing plants without soil) and aeroponics (growing plants in an air or mist environment) are addressing some of these land constraints. Vertical farming—stacking layers of crops in controlled environments—maximizes yield per square foot, though it often requires significant energy inputs for lighting and climate control.</p>
        `
    };

    const questions = [
        { id: 1, type: "True/False", text: "Urban agriculture is limited to growing plants and vegetables.", options: ["True", "False", "Not Given"] },
        { id: 2, type: "Multiple Choice", text: "What is mentioned as a primary benefit of urban farming?", options: ["Increased property values", "Reduction of food miles", "Lower cost of vegetables", "Better taste"] },
        { id: 3, type: "Sentence Completion", text: "Vertical farming requires significant energy for lighting and ______.", options: ["water pumps", "heating", "climate control", "pest control"] }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="container mx-auto p-6 max-w-7xl h-[calc(100vh-6rem)]">

            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold font-outfit text-foreground flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-orange-500" />
                        Daily Reading Practice
                    </h1>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                        <span className="bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded text-xs font-bold border border-orange-500/20">{article.category}</span>
                        <span>•</span>
                        <span className="font-medium text-foreground">{article.level}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full font-mono text-base font-bold text-foreground overflow-hidden relative">
                        <div className="absolute inset-0 bg-orange-500/10 w-[60%]" /> {/* Progress Fill Mockup */}
                        <Clock className="w-4 h-4 text-orange-500 relative z-10" />
                        <span className="relative z-10">{formatTime(timeLeft)}</span>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-bold shadow-lg shadow-primary/20 transition-all">
                        Submit
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[85%]">

                {/* Article Column (Scrollable) */}
                <div className="lg:col-span-8 glass border border-border rounded-3xl overflow-hidden flex flex-col">
                    {/* Toolbar */}
                    <div className="h-14 border-b border-border bg-secondary/30 flex items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-muted-foreground uppercase">Text Size</span>
                            <div className="flex items-center gap-2 bg-background rounded-lg border border-border p-1">
                                <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="w-8 h-8 flex items-center justify-center hover:bg-secondary rounded font-serif text-sm">A</button>
                                <div className="w-px h-4 bg-border" />
                                <button onClick={() => setFontSize(Math.min(24, fontSize + 2))} className="w-8 h-8 flex items-center justify-center hover:bg-secondary rounded font-serif text-lg font-bold">A</button>
                            </div>
                        </div>
                        <AlignLeft className="w-5 h-5 text-muted-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                        <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">{article.title}</h2>
                        <div
                            className="prose dark:prose-invert max-w-none text-foreground/90 font-serif leading-loose transition-all duration-300"
                            style={{ fontSize: `${fontSize}px` }}
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>

                {/* Questions Column (Sticky/Fixed) */}
                <div className="lg:col-span-4 space-y-4 flex flex-col h-full">
                    <div className="glass border border-orange-500/20 rounded-3xl flex-1 flex flex-col overflow-hidden">
                        <div className="p-6 bg-orange-500/5 border-b border-orange-500/10">
                            <h3 className="font-bold text-foreground flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                Questions ({activeQuestion + 1}/{questions.length})
                            </h3>
                        </div>

                        <div className="p-6 flex-1 overflow-y-auto">
                            <div className="space-y-6">
                                {questions.map((q, idx) => (
                                    <motion.div
                                        key={q.id}
                                        initial={false}
                                        animate={{ opacity: idx === activeQuestion ? 1 : 0.5, scale: idx === activeQuestion ? 1 : 0.98 }}
                                        className={`p-4 rounded-xl border transition-colors ${idx === activeQuestion ? 'bg-card border-orange-500/50 shadow-sm ring-1 ring-orange-500/20' : 'bg-transparent border-transparent'}`}
                                        onClick={() => setActiveQuestion(idx)}
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{q.type}</span>
                                            <span className="text-xs font-bold text-muted-foreground">Q{q.id}</span>
                                        </div>
                                        <p className="font-medium text-foreground mb-4 text-sm">{q.text}</p>

                                        <div className="space-y-2">
                                            {q.options.map((opt, i) => (
                                                <button key={i} className="w-full text-left p-2.5 rounded-lg text-sm border border-border hover:bg-secondary hover:border-orange-500/30 transition-all flex items-center gap-3 group">
                                                    <div className="w-4 h-4 rounded-full border-2 border-muted-foreground group-hover:border-orange-500 transition-colors" />
                                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{opt}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 border-t border-border bg-background/50 backdrop-blur flex justify-between gap-4">
                            <button
                                onClick={() => setActiveQuestion(prev => Math.max(0, prev - 1))}
                                disabled={activeQuestion === 0}
                                className="px-4 py-2 rounded-xl font-bold text-sm text-muted-foreground disabled:opacity-50 hover:bg-secondary transition-colors"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setActiveQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                                disabled={activeQuestion === questions.length - 1}
                                className="px-4 py-2 rounded-xl font-bold text-sm bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 transition-colors flex items-center gap-2"
                            >
                                Next Question <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
