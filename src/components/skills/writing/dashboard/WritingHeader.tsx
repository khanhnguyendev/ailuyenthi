"use client";

import { PenTool, Target, Flame } from "lucide-react";

interface WritingHeaderProps {
    streak: number;
    currentBand: number;
    targetBand: number;
}

export function WritingHeader({ streak, currentBand, targetBand }: WritingHeaderProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl glass p-8 mb-8">

            {/* Background Decoration: Abstract Paper Lines */}
            <div className="absolute inset-0 bg-grid-slate-50/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

            {/* Typing Cursor Animation Mock */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block opacity-10">
                <div className="w-80 space-y-4">
                    <div className="h-4 bg-foreground/50 rounded w-full animate-pulse decoration-clone" />
                    <div className="h-4 bg-foreground/50 rounded w-2/3 animate-pulse delay-100" />
                    <div className="h-4 bg-foreground/50 rounded w-3/4 animate-pulse delay-200" />
                </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                            <PenTool className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold text-foreground font-outfit">Writing</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md">
                        Structure, consistency, and vocabulary. Build the daily habit of writing.
                    </p>
                </div>

                <div className="flex gap-4">
                    <div className="bg-card/50 backdrop-blur-md px-4 py-2 rounded-xl border border-border flex flex-col items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                            Current <ArrowRightSmall /> Target
                        </span>
                        <span className="text-xl font-bold text-foreground flex items-center gap-2">
                            {currentBand.toFixed(1)} <span className="text-muted-foreground">→</span> <span className="text-green-500">{targetBand.toFixed(1)}</span>
                        </span>
                    </div>

                    <div className="bg-card/50 backdrop-blur-md px-4 py-2 rounded-xl border border-border flex flex-col items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                            Streak <Flame className="w-3 h-3 text-orange-500 fill-current" />
                        </span>
                        <span className="text-xl font-bold text-foreground">{streak} Days</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

function ArrowRightSmall() {
    return <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline w-3 h-3 text-slate-500"><path d="M6.1584 3.13508C6.35366 2.93982 6.67024 2.93982 6.86551 3.13508L10.8655 7.13508C11.0608 7.33034 11.0608 7.64692 10.8655 7.84219L6.86551 11.8422C6.67024 12.0374 6.35366 12.0374 6.1584 11.8422C5.96314 11.6469 5.96314 11.3303 6.1584 11.1351L9.80484 7.48863L6.1584 3.84219C5.96314 3.64692 5.96314 3.33034 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
}
