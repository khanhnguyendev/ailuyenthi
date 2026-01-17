"use client";

import { Languages, RotateCcw, ChevronRight, ChevronLeft, Lightbulb } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WritingVocabPage() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            word: "Ameliorate",
            type: "verb",
            pronunciation: "/əˈmiːli.ə.reɪt/",
            definition: "To make a bad or unpleasant situation better.",
            example: "Foreign aid is badly needed to ameliorate the effects of the drought.",
            synonyms: ["Improve", "Enhance", "Alleviate"]
        },
        {
            word: "Detrimental",
            type: "adjective",
            pronunciation: "/ˌdet.rɪˈmen.təl/",
            definition: "Causing harm or damage.",
            example: "These chemicals have a detrimental effect on the environment.",
            synonyms: ["Harmful", "Damaging", "Injurious"]
        },
        {
            word: "Ubiquitous",
            type: "adjective",
            pronunciation: "/juːˈbɪk.wɪ.təs/",
            definition: "Seeming to be everywhere.",
            example: "Mobile phones have become ubiquitous in daily life.",
            synonyms: ["Omnipresent", "Pervasive", "Universal"]
        }
    ];

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const card = cards[currentIndex];

    return (
        <div className="container mx-auto p-6 max-w-4xl flex flex-col items-center justify-center min-h-[calc(100vh-100px)] space-y-12">

            <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-purple-500/10 rounded-full mb-2">
                    <Languages className="w-8 h-8 text-purple-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Vocabulary Builder</h1>
                <p className="text-muted-foreground">Expand your lexicon with Band 8+ words.</p>
            </div>

            {/* 3D Flip Card Container */}
            <div className="perspective-1000 w-full max-w-md h-[400px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <motion.div
                    className="relative w-full h-full preserve-3d transition-all duration-500"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden glass rounded-[2.5rem] border border-purple-500/20 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-500/5 to-blue-500/5 shadow-xl">
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold uppercase tracking-wider mb-8">{card.type}</span>
                        <h2 className="text-5xl font-bold text-foreground mb-4">{card.word}</h2>
                        <p className="text-lg text-muted-foreground font-serif italic">{card.pronunciation}</p>

                        <div className="absolute bottom-8 flex flex-col items-center animate-bounce text-muted-foreground/50 text-xs">
                            <span>Click to flip</span>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-[2.5rem] border border-blue-500/20 flex flex-col items-center justify-center p-8 bg-background shadow-xl">
                        <div className="text-center space-y-6">
                            <div>
                                <h3 className="text-xs font-bold text-muted-foreground uppercase mb-2">Definition</h3>
                                <p className="text-lg text-foreground font-medium leading-relaxed">{card.definition}</p>
                            </div>

                            <div className="p-4 bg-secondary/50 rounded-xl relative">
                                <h3 className="text-xs font-bold text-muted-foreground uppercase mb-2 flex items-center justify-center gap-1">
                                    <Lightbulb className="w-3 h-3 text-yellow-500" /> Example
                                </h3>
                                <p className="text-sm text-foreground/80 italic">"{card.example}"</p>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-muted-foreground uppercase mb-2">Synonyms</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {card.synonyms.map(syn => (
                                        <span key={syn} className="px-2 py-1 rounded bg-secondary text-xs text-foreground">{syn}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-8">
                <button onClick={handlePrev} className="p-4 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="font-mono text-sm font-bold text-muted-foreground">
                    {currentIndex + 1} / {cards.length}
                </div>
                <button onClick={handleNext} className="p-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-colors">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
