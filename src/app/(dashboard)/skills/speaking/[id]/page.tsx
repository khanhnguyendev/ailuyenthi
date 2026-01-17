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
        <div className="flex flex-col h-[calc(100vh-theme(spacing.8))] max-h-[900px]">

            {/* Header */}
            <header className="flex justify-between items-center glass-panel p-3 rounded-xl mb-6 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="font-outfit font-bold text-white text-lg">IELTS Speaking</h1>
                        <span className="text-xs text-slate-500 font-mono">Full Mock Test • {state.toUpperCase().replace("_", " ")}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {state === "part2_prep" && (
                        <div className="flex items-center gap-2 text-focus-amber font-bold animate-pulse">
                            <span>Prep Time:</span>
                            <ExamTimer mode="exam" initialSeconds={60} />
                        </div>
                    )}
                    <button className="text-xs font-bold px-3 py-1 bg-white/5 rounded border border-white/5 text-slate-400 cursor-default">
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
                            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 shadow-2xl shadow-ai-violet/20">
                                <Mic2 className="w-10 h-10 text-ai-violet" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Full Speaking Test</h2>
                            <p className="text-slate-400 text-lg max-w-md mx-auto">
                                This session covers Part 1, 2, and 3. You will need approximately 15 minutes.
                            </p>
                            <button
                                onClick={nextStage}
                                className="bg-ai-violet hover:bg-violet-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all"
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
                            <div className="w-24 h-24 bg-growth-green/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-growth-green/30">
                                <BarChart3 className="w-10 h-10 text-growth-green" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Test Completed</h2>
                            <p className="text-slate-400 max-w-md mx-auto">
                                Your recordings have been saved. AI analysis is generating your Band Score report.
                            </p>
                            <button className="bg-slate-800 text-white px-8 py-3 rounded-xl font-bold border border-white/10 hover:bg-slate-700 transition-colors">
                                View Report
                            </button>
                        </div>
                    )}

                </div>

                {/* Interaction / Recording Area */}
                {state !== "intro" && state !== "completed" && (
                    <div className="w-full md:w-1/3 glass-card rounded-2xl flex flex-col items-center justify-center p-6 border-t md:border-t-0 md:border-l border-white/10 relative overflow-hidden">

                        {/* Background Pulse for Speaking Status */}
                        {state !== "part2_prep" && (
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ai-violet/5 pointer-events-none" />
                        )}

                        {state === "part2_prep" ? (
                            <div className="text-center">
                                <FileText className="w-12 h-12 text-focus-amber mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Preparation Time</h3>
                                <p className="text-slate-400 text-sm mb-6">Take notes on the cue card topic.</p>
                                <button
                                    onClick={nextStage}
                                    className="bg-focus-amber text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-amber-400 transition-colors"
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
                                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
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
