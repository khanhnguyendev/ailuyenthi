"use client";

import { Globe2, Play, Check, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const REGIONS = [
    { id: "uk", name: "United Kingdom", color: "bg-red-500", accent: "British (RP)" },
    { id: "us", name: "North America", color: "bg-blue-500", accent: "General American" },
    { id: "aus", name: "Australia / NZ", color: "bg-yellow-500", accent: "Australian" },
];

export default function ListeningAccentPage() {
    const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

    return (
        <div className="container mx-auto p-6 space-y-8 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-8">
                <div className="p-3 bg-blue-500/10 rounded-full mb-4">
                    <Globe2 className="w-8 h-8 text-blue-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Accent Training</h1>
                <p className="text-muted-foreground max-w-lg mt-2">IELTS Listening features various accents. Master them all to ensure you never miss a word.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Visual Map Area (7 cols) */}
                <div className="lg:col-span-7 glass p-8 rounded-[2.5rem] border border-border relative overflow-hidden min-h-[400px] flex items-center justify-center bg-blue-500/5">
                    {/* Abstract Map Bg */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat grayscale" />

                    {/* Interactive Pins */}
                    <div className="relative w-full h-full max-w-lg aspect-video">
                        <motion.button
                            onClick={() => setActiveRegion(REGIONS[0])}
                            whileHover={{ scale: 1.1 }}
                            className={`absolute top-[20%] right-[48%] flex flex-col items-center gap-2 group ${activeRegion.id === 'uk' ? 'z-20' : 'z-10 opacity-70'}`}
                        >
                            <div className={`w-4 h-4 rounded-full ${activeRegion.id === 'uk' ? 'bg-red-500 ring-4 ring-red-500/30' : 'bg-foreground'}`} />
                            <span className="px-3 py-1 bg-background/80 backdrop-blur rounded-full text-xs font-bold shadow-sm">UK</span>
                        </motion.button>

                        <motion.button
                            onClick={() => setActiveRegion(REGIONS[1])}
                            whileHover={{ scale: 1.1 }}
                            className={`absolute top-[25%] left-[20%] flex flex-col items-center gap-2 group ${activeRegion.id === 'us' ? 'z-20' : 'z-10 opacity-70'}`}
                        >
                            <div className={`w-4 h-4 rounded-full ${activeRegion.id === 'us' ? 'bg-blue-500 ring-4 ring-blue-500/30' : 'bg-foreground'}`} />
                            <span className="px-3 py-1 bg-background/80 backdrop-blur rounded-full text-xs font-bold shadow-sm">USA</span>
                        </motion.button>

                        <motion.button
                            onClick={() => setActiveRegion(REGIONS[2])}
                            whileHover={{ scale: 1.1 }}
                            className={`absolute bottom-[20%] right-[10%] flex flex-col items-center gap-2 group ${activeRegion.id === 'aus' ? 'z-20' : 'z-10 opacity-70'}`}
                        >
                            <div className={`w-4 h-4 rounded-full ${activeRegion.id === 'aus' ? 'bg-yellow-500 ring-4 ring-yellow-500/30' : 'bg-foreground'}`} />
                            <span className="px-3 py-1 bg-background/80 backdrop-blur rounded-full text-xs font-bold shadow-sm">AUS</span>
                        </motion.button>
                    </div>
                </div>

                {/* Content Area (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                    <motion.div
                        key={activeRegion.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-2 h-12 rounded-full ${activeRegion.color}`} />
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">{activeRegion.accent}</h2>
                                <p className="text-muted-foreground">{activeRegion.name}</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Play className="w-4 h-4 fill-current ml-0.5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Example Clip #{i}</h4>
                                            <p className="text-xs text-muted-foreground">Airport Announcement</p>
                                        </div>
                                    </div>
                                    {i === 1 && <Check className="w-5 h-5 text-green-500" />}
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                            <h4 className="font-bold text-blue-500 text-sm mb-2">Key Characteristic</h4>
                            <p className="text-sm text-foreground/80 leading-relaxed">
                                {activeRegion.id === 'uk' && "Non-rhotic 'r' sounds (car -> cah) and clear 't' sounds."}
                                {activeRegion.id === 'us' && "Rhotic 'r' (hard r) and flapping 't' (water -> wader)."}
                                {activeRegion.id === 'aus' && "Vowel shifts (day -> die) and rising intonation."}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
