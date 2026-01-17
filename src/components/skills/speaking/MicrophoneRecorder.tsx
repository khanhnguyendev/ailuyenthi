"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, Square, Loader2, CheckCircle2 } from "lucide-react";

interface MicrophoneRecorderProps {
    onRecordingComplete: (audioBlob: Blob) => void;
    maxSeconds?: number;
    autoStart?: boolean;
}

export function MicrophoneRecorder({ onRecordingComplete, maxSeconds = 120, autoStart = false }: MicrophoneRecorderProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState<"idle" | "recording" | "analyzing" | "completed">("idle");
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startRecording = () => {
        setIsRecording(true);
        setStatus("recording");
        setSeconds(0);

        intervalRef.current = setInterval(() => {
            setSeconds(prev => {
                if (prev >= maxSeconds) {
                    stopRecording();
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);
    };

    const stopRecording = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRecording(false);
        setStatus("analyzing");

        // Simulate upload/analysis delay
        setTimeout(() => {
            setStatus("completed");
            onRecordingComplete(new Blob(["mock-audio"], { type: "audio/wav" }));
        }, 1500);
    };

    const formatTime = (totalSeconds: number) => {
        const min = Math.floor(totalSeconds / 60);
        const sec = totalSeconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 gap-6 w-full max-w-sm mx-auto">

            {/* Visualizer (Mock Waveform) */}
            <div className="h-16 flex items-center justify-center gap-1">
                {status === "recording" ? (
                    [...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 bg-primary rounded-full animate-pulse"
                            style={{
                                height: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.1}s`
                            }}
                        />
                    ))
                ) : (
                    <div className="h-1 w-full bg-muted-foreground/30 rounded-full" />
                )}
            </div>

            {/* Main Control */}
            <div className="relative">
                {/* Ripple Effect */}
                {status === "recording" && (
                    <div className="absolute inset-0 bg-destructive/20 rounded-full animate-ping" />
                )}

                <button
                    onClick={status === "recording" ? stopRecording : startRecording}
                    disabled={status === "analyzing" || status === "completed"}
                    className={`
                w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all relative z-10
                ${status === "recording"
                            ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90 scale-110'
                            : status === "completed"
                                ? 'bg-green-500 text-white cursor-default'
                                : 'bg-primary text-primary-foreground hover:scale-105'
                        }
                disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
            `}
                >
                    {status === "recording" && <Square className="w-8 h-8 fill-current" />}
                    {status === "idle" && <Mic className="w-8 h-8" />}
                    {status === "analyzing" && <Loader2 className="w-8 h-8 animate-spin" />}
                    {status === "completed" && <CheckCircle2 className="w-8 h-8" />}
                </button>
            </div>

            {/* Timer / Status Text */}
            <div className="text-center space-y-1">
                <div className={`font-mono text-2xl font-bold ${status === "recording" ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {formatTime(seconds)} / {formatTime(maxSeconds)}
                </div>
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    {status === "idle" && "Tap to Speak"}
                    {status === "recording" && "Recording..."}
                    {status === "analyzing" && "Uploading..."}
                    {status === "completed" && "Answer Saved"}
                </p>
            </div>

        </div>
    );
}
