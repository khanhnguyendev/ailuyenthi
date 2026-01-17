"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mic2, FileText, MonitorPlay, BarChart3 } from "lucide-react";
import { ExaminerPrompt, DetailsType } from "@/components/skills/speaking/ExaminerPrompt";
import { MicrophoneRecorder } from "@/components/skills/speaking/MicrophoneRecorder";
import { ExamTimer } from "@/components/common/ExamTimer";

// Types
type SpeakingState = "intro" | "part1" | "part2_prep" | "part2_speak" | "part3" | "completed";

// Mock Data
const MOCK_PART1_Q = "Let's talk about your hometown. Where is your hometown located?";
const MOCK_PART2_CUE: DetailsType = {
    cueCard: {
        topic: "Describe a memorable journey you have taken",
        bullets: [
            "Where you went",
            "How you traveled there",
            "Who you went with",
            "And explain why this journey was memorable to you"
        ]
    }
};
const MOCK_PART3_Q = "Do you think that travel has changed significantly over the past few decades?";

export default function SpeakingTestPage() {
    const [state, setState] = useState<SpeakingState>("intro");
    const [recordedBlobs, setRecordedBlobs] = useState<Blob[]>([]);

    const handleRecordingDone = (blob: Blob) => {
        setRecordedBlobs(prev => [...prev, blob]);
        // Auto-advance logic could go here after a delay
    };

    const nextStage = () => {
        if (state === "intro") setState("part1");
        else if (state === "part1") setState("part2_prep");
        else if (state === "part2_prep") setState("part2_speak");
        else if (state === "part2_speak") setState("part3");
        else if (state === "part3") setState("completed");
    };

    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.8))] max-h-[900px] pb-6 px-6 pt-6">

            {/* Header */}
            <header className="flex justify-between items-center glass p-3 rounded-xl mb-6 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-secondary/50 rounded-lg text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="font-outfit font-bold text-foreground text-lg">IELTS Speaking</h1>
                        <span className="text-xs text-muted-foreground font-mono">Full Mock Test • {state.toUpperCase().replace("_", " ")}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {state === "part2_prep" && (
                        <div className="flex items-center gap-2 text-orange-500 font-bold animate-pulse">
                            <span>Prep Time:</span>
                            <ExamTimer mode="exam" initialSeconds={60} />
                        </div>
                    )}
                    <button className="text-xs font-bold px-3 py-1 bg-secondary/50 rounded border border-border text-muted-foreground cursor-default">
                        Exam Mode
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-6">

                {/* Visual Context / Examiner */}
                <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">

                    {state === "intro" && (
                        <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20 shadow-2xl shadow-primary/20">
                                <Mic2 className="w-10 h-10 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">Full Speaking Test</h2>
                            <p className="text-muted-foreground text-lg max-w-md mx-auto">
                                This session covers Part 1, 2, and 3. You will need approximately 15 minutes.
                            </p>
                            <button
                                onClick={nextStage}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
                            >
                                Start Part 1
                            </button>
                        </div>
                    )}

                    {state === "part1" && (
                        <div className="animate-in slide-in-from-right-8 fade-in duration-500">
                            <ExaminerPrompt text={MOCK_PART1_Q} part={1} />
                        </div>
                    )}

                    {(state === "part2_prep" || state === "part2_speak") && (
                        <div className="animate-in slide-in-from-right-8 fade-in duration-500">
                            <ExaminerPrompt text="Describe a memorable journey" part={2} details={MOCK_PART2_CUE} />
                        </div>
                    )}

                    {state === "part3" && (
                        <div className="animate-in slide-in-from-right-8 fade-in duration-500">
                            <ExaminerPrompt text={MOCK_PART3_Q} part={3} />
                        </div>
                    )}

                    {state === "completed" && (
                        <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                                <BarChart3 className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">Test Completed</h2>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Your recordings have been saved. AI analysis is generating your Band Score report.
                            </p>
                            <button className="bg-secondary hover:bg-secondary/80 text-foreground px-8 py-3 rounded-xl font-bold border border-border transition-colors cursor-pointer">
                                View Report
                            </button>
                        </div>
                    )}

                </div>

                {/* Interaction / Recording Area */}
                {state !== "intro" && state !== "completed" && (
                    <div className="w-full md:w-1/3 glass rounded-2xl flex flex-col items-center justify-center p-6 border-t md:border-t-0 md:border-l border-border relative overflow-hidden">

                        {/* Background Pulse for Speaking Status */}
                        {state !== "part2_prep" && (
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
                        )}

                        {state === "part2_prep" ? (
                            <div className="text-center">
                                <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-foreground mb-2">Preparation Time</h3>
                                <p className="text-muted-foreground text-sm mb-6">Take notes on the cue card topic.</p>
                                <button
                                    onClick={nextStage}
                                    className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors cursor-pointer"
                                >
                                    I'm Ready to Speak
                                </button>
                            </div>
                        ) : (
                            <MicrophoneRecorder
                                onRecordingComplete={handleRecordingDone}
                                maxSeconds={state === "part2_speak" ? 120 : 30}
                                autoStart={false} // Would be true in strict exam
                            />
                        )}

                        {/* Navigation (Next Question) */}
                        <div className="mt-8">
                            <button
                                onClick={nextStage}
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
                            >
                                Next Section <MonitorPlay className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
