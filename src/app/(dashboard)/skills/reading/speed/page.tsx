"use client";

import { Zap, Play, Pause, RefreshCw, Settings2, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ReadingSpeedPage() {
    const [wpm, setWpm] = useState(300);
    const [isPlaying, setIsPlaying] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    const content = `In the fast-paced digital age, the ability to consume information quickly is more valuable than ever. Speed reading is not just about skimming; it's about processing visual information efficiently. Traditional readers often subvocalize, or pronounce words in their head as they read, which limits their speed to their speaking rate—typically around 150 to 250 words per minute. Speed reading techniques aim to silence this inner voice and expand the eye's fixation span. By capturing phrases or entire lines at a glance rather than word-by-word, readers can double or even triple their efficiency. However, speed must be balanced with comprehension. It is of little use to read 1000 words per minute if one retains nothing of the content. Therefore, advanced practitioners also focus on "active reading" strategies, such as previewing headers, identifying key terms, and varying speed based on the text's complexity.`;

    // Simple Auto-Scroll Simulation
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && textRef.current) {
            interval = setInterval(() => {
                if (textRef.current) {
                    textRef.current.scrollTop += 1; // Scroll 1px
                    // Reset if bottom reached (mock loop)
                    if (textRef.current.scrollHeight - textRef.current.scrollTop === textRef.current.clientHeight) {
                        setIsPlaying(false);
                    }
                }
            }, 60000 / wpm / 2); // Rudimentary logic based on WPM
        }
        return () => clearInterval(interval);
    }, [isPlaying, wpm]);

    return (
        <div className="container mx-auto p-6 max-w-4xl space-y-8">
            <div className="flex flex-col items-center text-center space-y-4 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-full">
                    <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Speed Reading Trainer</h1>
                <p className="text-muted-foreground">Train your eyes to move faster and reduce subvocalization.</p>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-border shadow-2xl relative overflow-hidden">
                {/* WPM Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 p-4 bg-secondary/50 rounded-2xl border border-border/50">
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <span className="block text-xs font-bold text-muted-foreground uppercase">Target Speed</span>
                            <span className="text-2xl font-black text-foreground">{wpm} <span className="text-sm font-medium text-muted-foreground">WPM</span></span>
                        </div>
                        <input
                            type="range"
                            min="100"
                            max="800"
                            step="50"
                            value={wpm}
                            onChange={(e) => setWpm(parseInt(e.target.value))}
                            className="w-48 accent-orange-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-500/25 transition-all hover:scale-110 active:scale-95"
                        >
                            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                        </button>
                        <button className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 text-foreground flex items-center justify-center transition-colors">
                            <RefreshCw className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Reader View */}
                <div className="relative h-96 bg-background rounded-2xl border border-border overflow-hidden">
                    {/* Focal Point Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-16 -translate-y-1/2 bg-orange-500/5 border-y border-orange-500/20 pointer-events-none z-10 flex items-center px-2">
                        <Eye className="w-4 h-4 text-orange-500/50 absolute right-2 opacity-50" />
                    </div>

                    <div
                        ref={textRef}
                        className="h-full overflow-y-auto px-12 py-[40%] text-2xl font-serif text-foreground leading-relaxed text-center scroll-smooth no-scrollbar"
                    >
                        {content.split('. ').map((sentence, i) => (
                            <p key={i} className="mb-6">{sentence}.</p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-24">-- End of Passage --</p>
                    </div>

                    {/* Mask Gradients */}
                    <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
                </div>

                <div className="mt-8 text-center">
                    <button className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 mx-auto">
                        <Settings2 className="w-4 h-4" />
                        Customize Font & Layout
                    </button>
                </div>
            </div>
        </div>
    );
}
