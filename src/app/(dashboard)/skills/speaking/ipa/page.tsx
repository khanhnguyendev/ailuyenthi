"use client";

import { Mic, Volume2, Info } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpeakingIPAPage() {
    const [selectedPhoneme, setSelectedPhoneme] = useState<string | null>(null);

    // Simplified Mock Data
    const phonemes = {
        vowels: [
            { symbol: "i:", example: "sheep", type: "Long Vowel" },
            { symbol: "ɪ", example: "ship", type: "Short Vowel" },
            { symbol: "ʊ", example: "good", type: "Short Vowel" },
            { symbol: "u:", example: "shoot", type: "Long Vowel" },
            { symbol: "e", example: "bed", type: "Short Vowel" },
            { symbol: "ə", example: "teacher", type: "Schwa" },
            { symbol: "ɜ:", example: "bird", type: "Long Vowel" },
            { symbol: "ɔ:", example: "door", type: "Long Vowel" },
            { symbol: "æ", example: "cat", type: "Short Vowel" },
            { symbol: "ʌ", example: "up", type: "Short Vowel" },
            { symbol: "ɑ:", example: "far", type: "Long Vowel" },
            { symbol: "ɒ", example: "on", type: "Short Vowel" },
        ],
        diphthongs: [
            { symbol: "ɪə", example: "here" },
            { symbol: "eɪ", example: "wait" },
            { symbol: "ʊə", example: "tour" },
            { symbol: "ɔɪ", example: "boy" },
            { symbol: "əʊ", example: "show" },
            { symbol: "eə", example: "hair" },
            { symbol: "aɪ", example: "my" },
            { symbol: "aʊ", example: "cow" },
        ],
        consonants: [
            { symbol: "p", example: "pea", voiced: false },
            { symbol: "b", example: "boat", voiced: true },
            { symbol: "t", example: "tea", voiced: false },
            { symbol: "d", example: "dog", voiced: true },
            { symbol: "k", example: "car", voiced: false },
            { symbol: "g", example: "go", voiced: true },
            { symbol: "f", example: "fly", voiced: false },
            { symbol: "v", example: "video", voiced: true },
            { symbol: "θ", example: "think", voiced: false },
            { symbol: "ð", example: "this", voiced: true },
            { symbol: "s", example: "see", voiced: false },
            { symbol: "z", example: "zoo", voiced: true },
            { symbol: "ʃ", example: "shall", voiced: false },
            { symbol: "ʒ", example: "vision", voiced: true },
            { symbol: "m", example: "man", voiced: true },
            { symbol: "n", example: "now", voiced: true },
            { symbol: "ŋ", example: "sing", voiced: true },
            { symbol: "h", example: "hat", voiced: false },
            { symbol: "l", example: "love", voiced: true },
            { symbol: "r", example: "red", voiced: true },
            { symbol: "w", example: "wet", voiced: true },
            { symbol: "j", example: "yes", voiced: true },
        ]
    };

    return (
        <div className="container mx-auto p-6 max-w-7xl space-y-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-4">
                <div className="p-3 bg-pink-500/10 rounded-full">
                    <Mic className="w-8 h-8 text-pink-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Interactive IPA Chart</h1>
                <p className="text-muted-foreground">Click a symbol to hear the sound and see examples.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Chart Area */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Vowels */}
                    <div className="glass p-6 rounded-3xl border border-border">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Monophthongs (Vowels)</h3>
                        <div className="grid grid-cols-4 gap-3">
                            {phonemes.vowels.map((p) => (
                                <button
                                    key={p.symbol}
                                    onClick={() => setSelectedPhoneme(p.symbol)}
                                    className={`aspect-square rounded-xl border flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 ${selectedPhoneme === p.symbol ? 'bg-pink-500 text-white border-pink-500 shadow-lg shadow-pink-500/25' : 'bg-secondary/50 border-border hover:bg-secondary hover:border-pink-500/30'
                                        }`}
                                >
                                    <span className="text-2xl font-serif font-bold mb-1">{p.symbol}</span>
                                    {selectedPhoneme === p.symbol && <span className="text-[10px] uppercase font-bold text-white/80">{p.example}</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Diphthongs */}
                    <div className="glass p-6 rounded-3xl border border-border">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Diphthongs</h3>
                        <div className="grid grid-cols-4 gap-3">
                            {phonemes.diphthongs.map((p) => (
                                <button
                                    key={p.symbol}
                                    onClick={() => setSelectedPhoneme(p.symbol)}
                                    className={`aspect-square rounded-xl border flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 ${selectedPhoneme === p.symbol ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/25' : 'bg-secondary/50 border-border hover:bg-secondary hover:border-purple-500/30'
                                        }`}
                                >
                                    <span className="text-2xl font-serif font-bold mb-1">{p.symbol}</span>
                                    {selectedPhoneme === p.symbol && <span className="text-[10px] uppercase font-bold text-white/80">{p.example}</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Consonants */}
                    <div className="glass p-6 rounded-3xl border border-border">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Consonants</h3>
                        <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
                            {phonemes.consonants.map((p) => (
                                <button
                                    key={p.symbol}
                                    onClick={() => setSelectedPhoneme(p.symbol)}
                                    className={`aspect-square rounded-xl border flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 ${selectedPhoneme === p.symbol
                                            ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                                            : p.voiced
                                                ? 'bg-secondary/50 border-border hover:bg-secondary hover:border-blue-500/30 font-bold' // Visual hint for voiced
                                                : 'bg-secondary/20 border-border hover:bg-secondary hover:border-blue-500/30 text-muted-foreground' // Visual hint for unvoiced
                                        }`}
                                >
                                    <span className="text-xl font-serif mb-1">{p.symbol}</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-4 text-xs font-bold text-muted-foreground justify-center">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-secondary/50 border border-border rounded-full" /> Voiced</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-secondary/20 border border-border rounded-full" /> Unvoiced</div>
                        </div>
                    </div>
                </div>

                {/* Info Panel (Sticky) */}
                <div className="lg:col-span-4">
                    <div className="sticky top-24 glass p-8 rounded-3xl border border-border min-h-[300px] flex flex-col items-center text-center justify-center">
                        <AnimatePresence mode="wait">
                            {selectedPhoneme ? (
                                <motion.div
                                    key={selectedPhoneme}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="space-y-6 w-full"
                                >
                                    <div className="w-32 h-32 bg-secondary rounded-full mx-auto flex items-center justify-center border-4 border-background shadow-inner">
                                        <span className="text-6xl font-serif font-bold text-foreground">{selectedPhoneme}</span>
                                    </div>

                                    <div>
                                        <h2 className="text-3xl font-bold text-foreground mb-1 capitalize">
                                            {phonemes.vowels.find(p => p.symbol === selectedPhoneme)?.example ||
                                                phonemes.diphthongs.find(p => p.symbol === selectedPhoneme)?.example ||
                                                phonemes.consonants.find(p => p.symbol === selectedPhoneme)?.example}
                                        </h2>
                                        <p className="text-muted-foreground">Example Word</p>
                                    </div>

                                    <div className="flex justify-center gap-4">
                                        <button className="p-4 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-110 transition-transform">
                                            <Volume2 className="w-8 h-8" />
                                        </button>
                                        <button className="p-4 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                                            <Mic className="w-8 h-8" />
                                        </button>
                                    </div>

                                    <div className="p-4 rounded-xl bg-secondary/50 text-sm text-left">
                                        <div className="flex items-center gap-2 font-bold mb-2">
                                            <Info className="w-4 h-4 text-primary" />
                                            <span>Pronunciation Tip</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Open your mouth slightly. Keep your tongue relaxed at the bottom of your mouth. (Mock tip)
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-muted-foreground"
                                >
                                    <Volume2 className="w-16 h-16 opacity-20 mx-auto mb-4" />
                                    <p>Select a sound to begin practice.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
