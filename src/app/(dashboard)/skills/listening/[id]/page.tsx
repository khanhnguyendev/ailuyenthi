"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Info, CheckCircle2 } from "lucide-react";
import { AudioPlayer } from "@/components/skills/listening/AudioPlayer";
import { ListeningQuestionRenderer, ListeningQuestion } from "@/components/skills/listening/ListeningQuestionRenderer";
import { ExamTimer } from "@/components/common/ExamTimer";

// Mock Data
const MOCK_AUDIO_SRC = "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"; // Placeholder
const SECTIONS = [1, 2, 3, 4];

const MOCK_QUESTIONS_SEC1: ListeningQuestion[] = [
    {
        id: "l1", number: 1, type: "form_completion",
        prompt: "Customer Name: ______",
    },
    {
        id: "l2", number: 2, type: "form_completion",
        prompt: "Product Type: Large ______ refrigerator",
    },
    {
        id: "l3", number: 3, type: "multiple_choice",
        prompt: "Why is the customer returning the item?",
        options: ["Damaged on delivery", "Wrong color", "Too noisy"]
    }
];

export default function ListeningTestPage() {
    const [mode, setMode] = useState<"practice" | "exam">("practice");
    const [activeSection, setActiveSection] = useState(1);
    const [status, setStatus] = useState<"ready" | "playing" | "review">("ready");
    const [questions, setQuestions] = useState(MOCK_QUESTIONS_SEC1);

    const handleAnswer = (id: string, value: string) => {
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, userAnswer: value } : q));
    };

    const handleNextSection = () => {
        if (activeSection < 4) setActiveSection(prev => prev + 1);
    };

    const handleSubmit = () => {
        if (confirm("Submit listening test?")) {
            setStatus("review");
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.8))] max-h-[900px]">

            {/* Header */}
            <header className="shrink-0 mb-6">
                <div className="flex justify-between items-center glass-panel p-3 rounded-xl mb-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="font-outfit font-bold text-white text-lg">IELTS Listening</h1>
                            <span className="text-xs text-slate-500 font-mono">Test 4 • Section {activeSection}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ExamTimer mode={mode === "exam" ? "exam" : "practice"} initialSeconds={mode === "exam" ? 1800 : 0} />
                        <button
                            onClick={() => setMode(mode === "practice" ? "exam" : "practice")}
                            className="text-xs font-bold px-3 py-1 bg-white/5 rounded border border-white/5 text-slate-400"
                        >
                            Mode: {mode.toUpperCase()}
                        </button>
                    </div>
                </div>

                {/* Sticky Audio Player */}
                <div className="sticky top-0 z-50">
                    <AudioPlayer
                        src={MOCK_AUDIO_SRC}
                        mode={mode}
                        sectionNum={activeSection}
                        onEnded={() => {
                            // in exam mode, maybe auto-advance?
                        }}
                    />
                </div>
            </header>

            {/* Workspace */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">

                {/* Left: Questions (Scrollable) */}
                <div className="lg:col-span-2 glass-card rounded-xl overflow-hidden flex flex-col">
                    <div className="bg-slate-900/80 p-4 border-b border-white/10 flex justify-between items-center">
                        <h2 className="font-bold text-white text-lg">Section {activeSection} Questions</h2>
                        <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-slate-400">Questions 1-10</span>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                        <div className="mb-6 p-4 bg-ai-violet/10 border border-ai-violet/20 rounded-lg flex gap-3 text-sm text-slate-300">
                            <Info className="w-5 h-5 text-ai-violet shrink-0" />
                            <p>Complete the notes below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p>
                        </div>

                        <ListeningQuestionRenderer
                            questions={questions}
                            onAnswer={handleAnswer}
                            isReview={status === "review"}
                        />
                    </div>
                </div>

                {/* Right: Info / Transcript */}
                <div className="space-y-4 overflow-y-auto">

                    {/* Section Navigator */}
                    <div className="glass-panel p-4 rounded-xl">
                        <h3 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wider">Test Sections</h3>
                        <div className="grid grid-cols-4 gap-2">
                            {SECTIONS.map(num => (
                                <button
                                    key={num}
                                    onClick={() => setActiveSection(num)}
                                    className={`
                                        h-10 rounded-lg font-bold text-sm transition-all
                                        ${activeSection === num
                                            ? 'bg-gradient-to-br from-ai-violet to-electric-blue text-white shadow-lg'
                                            : 'bg-white/5 hover:bg-white/10 text-slate-400'
                                        }
                                    `}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Review Mode: Transcript */}
                    {status === "review" && (
                        <div className="glass-card p-6 border-growth-green/30 animate-in fade-in slide-in-from-right-4">
                            <div className="flex items-center gap-2 mb-4 text-growth-green">
                                <CheckCircle2 className="w-5 h-5" />
                                <h3 className="font-bold">Transcript Revealed</h3>
                            </div>
                            <div className="prose prose-invert prose-sm max-w-none text-slate-400 font-mono text-xs leading-relaxed">
                                <p>[00:00] <strong>Clerk:</strong> Good morning, customer service.</p>
                                <p>[00:05] <strong>Customer:</strong> Hi, I'd like to return a product.</p>
                                <p>[00:10] <strong>Clerk:</strong> Certainly. Can I have your name?</p>
                                <p>[00:15] <strong>Customer:</strong> It's Sarah Jenkins.</p>
                            </div>
                        </div>
                    )}

                    {/* Submit Action */}
                    <button
                        onClick={handleSubmit}
                        className="w-full py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-xl font-bold text-slate-200 transition-colors flex items-center justify-center gap-2"
                        disabled={status === "review"}
                    >
                        {status === "review" ? "Test Completed" : "Submit Test"}
                    </button>

                </div>

            </div>
        </div>
    );
}
