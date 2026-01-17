"use client";

import { useState } from "react";
import { ArrowLeft, Send, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import { WritingEditor } from "@/components/skills/writing/WritingEditor";
import { ExamTimer } from "@/components/common/ExamTimer";
import { FeedbackView } from "@/components/skills/writing/FeedbackView";
import { usePathname } from "next/navigation";

// Mock Data
const MOCK_PROMPT = `
Some people think that strict punishments for driving offences are the key to reducing traffic accidents. Others, however, believe that other measures would be more effective in improving road safety.
Discuss both these views and give your own opinion.
`;

export default function WritingPracticePage() {
    const [mode, setMode] = useState<"practice" | "exam">("practice");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState<"idle" | "writing" | "submitting" | "completed">("writing");

    // Handlers
    const handleSubmit = () => {
        setStatus("submitting");
        // Simulate AI Delay
        setTimeout(() => {
            setStatus("completed");
        }, 2000);
    };

    const isExam = mode === "exam";

    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.8))] max-h-[800px] gap-6 animate-in fade-in duration-500 pb-6 px-6 pt-6">

            {/* Header */}
            <div className="flex justify-between items-center glass p-4 rounded-2xl shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-secondary/50 rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="font-outfit font-bold text-foreground text-lg">Writing Task 2</h1>
                        <span className="text-xs text-muted-foreground font-mono">ID: WT2-2024-001</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* Mode Switcher */}
                    <div className="bg-secondary/50 p-1 rounded-lg flex text-xs font-bold font-outfit border border-border">
                        <button
                            onClick={() => setMode("practice")}
                            className={`px-4 py-1.5 rounded-md transition-all ${!isExam ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            Practice
                        </button>
                        <button
                            onClick={() => setMode("exam")}
                            className={`px-4 py-1.5 rounded-md transition-all ${isExam ? 'bg-destructive text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            Exam Mode
                        </button>
                    </div>

                    <ExamTimer mode={isExam ? "exam" : "practice"} initialSeconds={isExam ? 2400 : 0} />

                    <button
                        onClick={handleSubmit}
                        disabled={status !== "writing" || content.length < 10}
                        className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-green-600/20 hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                    >
                        {status === "submitting" ? (
                            <>
                                <Sparkles className="w-4 h-4 animate-spin" /> Analyzing...
                            </>
                        ) : (
                            <>
                                Submit <Send className="w-3 h-3" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Workspace */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">

                {/* Left: Prompt & Resources */}
                <div className="flex flex-col gap-4">
                    {/* Prompt Card */}
                    <div className={`glass p-6 border-l-4 ${isExam ? 'border-l-destructive' : 'border-l-primary'}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className={`w-5 h-5 ${isExam ? 'text-destructive' : 'text-primary'}`} />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Question Prompt</span>
                        </div>
                        <p className="text-foreground font-serif text-xl leading-relaxed">
                            {MOCK_PROMPT}
                        </p>
                    </div>

                    {/* Practice Hints (Hidden in Exam) */}
                    {!isExam && status === "writing" && (
                        <div className="glass p-6 flex-1 overflow-y-auto">
                            <h3 className="font-bold text-foreground mb-3 text-sm">💡 Quick Tips</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    Spend 5 mins planning details.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    Ensure you address both views equally.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    Include a clear thesis statement in intro.
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Feedback View (Post-Submit) */}
                    {status === "completed" && (
                        <FeedbackView
                            overallBand={6.5}
                            criteria={[
                                { name: "Task Response", score: 6.0, comment: "Addressed all parts." },
                                { name: "Coherence", score: 6.5, comment: "Good paragraphing." },
                                { name: "Lexical", score: 7.0, comment: "Varied vocabulary." },
                                { name: "Grammar", score: 6.0, comment: "Some complex errors." },
                            ]}
                            generalFeedback="You have a strong vocabulary base, but your argument development lacks depth in the second paragraph. Focus on extending your ideas with examples."
                        />
                    )}
                </div>

                {/* Right: Editor */}
                <div className="h-full">
                    <WritingEditor
                        content={content}
                        onChange={setContent}
                        disabled={status !== "writing"}
                    />
                </div>

            </div>
        </div>
    );
}
