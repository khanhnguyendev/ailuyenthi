"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface ExamTimerProps {
    initialSeconds?: number; // For countdown
    mode: "practice" | "exam";
    onTimeUp?: () => void;
}

export function ExamTimer({ initialSeconds = 0, mode, onTimeUp }: ExamTimerProps) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [active, setActive] = useState(true);

    useEffect(() => {
        if (!active) return;

        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (mode === "exam") {
                    if (prev <= 1) {
                        clearInterval(interval);
                        onTimeUp?.();
                        return 0;
                    }
                    return prev - 1;
                } else {
                    return prev + 1;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [active, mode, onTimeUp]);

    const formatTime = (totalSeconds: number) => {
        const min = Math.floor(totalSeconds / 60);
        const sec = totalSeconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    const getTimerColor = () => {
        if (mode === "practice") return "text-muted-foreground";
        if (seconds < 300) return "text-destructive animate-pulse"; // Under 5 mins
        if (seconds < 600) return "text-orange-500"; // Under 10 mins
        return "text-muted-foreground";
    };

    return (
        <div className={`flex items-center gap-2 font-mono text-lg font-bold ${getTimerColor()} bg-secondary/50 px-3 py-1.5 rounded-lg border border-border`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(seconds)}</span>
        </div>
    );
}
