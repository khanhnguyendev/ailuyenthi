"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2 } from "lucide-react";

interface AudioPlayerProps {
    src: string;
    mode: "practice" | "exam";
    sectionNum: number;
    onEnded?: () => void;
}

export function AudioPlayer({ src, mode, sectionNum, onEnded }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            // In exam mode, pausing might be restricted in strict implementations, 
            // but usually allowed for emergency. Replay/Seeking is the main restriction.
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    };

    const formatTime = (time: number) => {
        if (!time) return "00:00";
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mode === "exam") return; // Disable seek in exam
        const time = Number(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setProgress(time);
        }
    };

    return (
        <div className="bg-card border border-border p-4 rounded-xl shadow-lg flex flex-col gap-4">
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => {
                    setIsPlaying(false);
                    onEnded?.();
                }}
                className="hidden"
            />

            {/* Top Row: Section & Title */}
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span>Section {sectionNum}/4</span>
                <div className="flex items-center gap-1">
                    <Volume2 className="w-3 h-3" />
                    <span>Audio Playing...</span>
                </div>
            </div>

            {/* Main Controls */}
            <div className="flex items-center gap-4">

                {/* Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isPlaying
                        ? 'bg-secondary text-foreground border border-border hover:bg-secondary/80'
                        : 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 active:scale-95'
                        }`}
                >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>

                {/* Progress Display */}
                <div className="flex-1 flex flex-col justify-center gap-1">
                    <div className="flex justify-between text-xs font-mono text-muted-foreground">
                        <span>{formatTime(progress)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        value={progress}
                        onChange={handleSeek}
                        disabled={mode === "exam"}
                        className={`w-full h-2 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary
                    ${mode === "exam" ? 'bg-muted cursor-not-allowed [&::-webkit-slider-thumb]:hidden' : 'bg-secondary accent-primary'}
                `}
                        style={{
                            background: `linear-gradient(to right, ${mode === 'exam' ? '#3B82F6' : 'var(--primary)'} ${(progress / duration) * 100}%, var(--secondary) ${(progress / duration) * 100}%)`
                        }}
                    />
                </div>

            </div>
        </div>
    );
}
