"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Send, AlertTriangle } from "lucide-react";
import { ReadingPassage } from "@/components/skills/reading/ReadingPassage";
import { QuestionPanel, Question } from "@/components/skills/reading/QuestionPanel";
import { ReadingNav } from "@/components/skills/reading/ReadingNav";
import { ExamTimer } from "@/components/common/ExamTimer";

// Mock Data
const MOCK_PASSAGE = `
<p><strong>The Evolution of Cognitive Science</strong></p>
<p>Cognitive science is the interdisciplinary, scientific study of the mind and its processes. It examines the nature, the tasks, and the functions of cognition (in a broad sense). Cognitive scientists study intelligence and behavior, with a focus on how nervous systems represent, process, and transform information.</p>
<p>Mental faculties of concern to cognitive scientists include language, perception, memory, attention, reasoning, and emotion; to understand these faculties, cognitive scientists borrow from fields such as linguistics, psychology, artificial intelligence, philosophy, neuroscience, and anthropology.</p>
<p>The typical analysis of cognitive science spans many levels of organization, from learning and decision to logic and planning; from neural circuitry to modular brain organization. One of the fundamental concepts of cognitive science is that "thinking can best be understood in terms of representational structures in the mind and computational procedures that operate on those structures."</p>
<p>The field originated as the "cognitive revolution" in the 1950s, a period that saw the emergence of new theories of mind.</p>
`;

const MOCK_QUESTIONS: Question[] = [
    {
        id: "q1", number: 1, type: "multiple_choice",
        prompt: "According to the passage, what is the primary focus of cognitive science?",
        options: ["The study of emotion only", "How nervous systems process information", "The history of AI", "Anthropological naming conventions"]
    },
    {
        id: "q2", number: 2, type: "true_false",
        prompt: "Cognitive science relies solely on the field of psychology.",
        options: ["True", "False", "Not Given"]
    },
    {
        id: "q3", number: 3, type: "gap_fill",
        prompt: "The field known as the 'cognitive revolution' began in the ______."
    }
];

export default function ReadingTestPage() {
    const [mode, setMode] = useState<"practice" | "exam">("practice");
    const [questions, setQuestions] = useState<Question[]>(MOCK_QUESTIONS);
    const [status, setStatus] = useState<"test" | "review">("test");

    // Handlers
    const handleAnswer = (id: string, value: string) => {
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, userAnswer: value } : q));
    };

    const handleMark = (id: string) => {
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, isMarked: !q.isMarked } : q));
    };

    const scrollToQuestion = (id: string) => {
        const el = document.getElementById(`q-${id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const handleSubmit = () => {
        if (confirm("Are you sure you want to submit? You cannot change answers after simulated submission.")) {
            setStatus("review");
        }
    };

    const answeredCount = questions.filter(q => q.userAnswer).length;

    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.8))] max-h-[900px] overflow-hidden pb-6 px-6 pt-6">

            {/* Header */}
            <header className="flex justify-between items-center glass p-3 rounded-xl mb-4 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-secondary/50 rounded-lg text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="font-outfit font-bold text-foreground text-lg leading-none">Reading Passage 1</h1>
                        <span className="text-xs text-muted-foreground font-mono">Evolution of Cognitive Science</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex bg-secondary/50 p-1 rounded-lg border border-border text-xs font-bold">
                        <button
                            onClick={() => setMode("practice")}
                            className={`px-3 py-1 rounded transition-colors ${mode === "practice" ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                        >Practice</button>
                        <button
                            onClick={() => setMode("exam")}
                            className={`px-3 py-1 rounded transition-colors ${mode === "exam" ? 'bg-destructive text-destructive-foreground' : 'text-muted-foreground'}`}
                        >Exam</button>
                    </div>

                    {status === "test" && <ExamTimer mode={mode === "exam" ? "exam" : "practice"} initialSeconds={mode === "exam" ? 1200 : 0} />}

                    <button
                        onClick={handleSubmit}
                        disabled={status === "review"}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {status === "test" ? (
                            <>Submit <Send className="w-3 h-3" /></>
                        ) : (
                            <>Reviewing</>
                        )}
                    </button>
                </div>
            </header>

            {/* Split View */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0 relative">

                {/* Left: Passage */}
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl relative border-4 border-slate-200 dark:border-slate-800">
                    {/* Paper texture overlay could go here if keeping paper look, implying text-slate-900 always inside */}
                    <Link href="/" className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-800 transition-colors z-10">
                        {/* Expand Icon Placeholder */}
                    </Link>
                    <ReadingPassage title="The Evolution of Cognitive Science" content={MOCK_PASSAGE} />
                </div>

                {/* Right: Questions */}
                <div className="glass rounded-xl overflow-hidden flex flex-col relative z-0">
                    <div className="bg-muted/30 p-3 border-b border-border flex justify-between items-center shrink-0">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Questions 1-{questions.length}</span>
                        <div className="text-xs font-mono text-foreground">
                            <span className="text-blue-500 font-bold">{answeredCount}</span>/{questions.length} Answered
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 relative custom-scrollbar overflow-y-auto">
                        <QuestionPanel
                            questions={questions}
                            onAnswer={handleAnswer}
                            onMark={handleMark}
                            reviewMode={status === "review"}
                        />
                    </div>
                </div>

            </div>

            {/* Navigation Drawer */}
            <ReadingNav questions={questions} onNavigate={scrollToQuestion} />

        </div>
    );
}
