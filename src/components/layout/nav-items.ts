import {
    Headphones, BookOpen, PenTool, Mic,
    LayoutDashboard, TrendingUp, Zap, Target,
    Dna, Ear, Languages, Hammer, BookA, Sparkles, Mic2, BrainCircuit
} from "lucide-react";

export const NAV_ITEMS = [
    {
        label: "Listening",
        icon: Headphones,
        href: "/skills/listening",
        color: "text-blue-500",
        sections: [
            {
                title: "Skill Home",
                items: [
                    { label: "Overview Dashboard", href: "/skills/listening", icon: LayoutDashboard },
                ]
            },
            {
                title: "Exam & Practice",
                items: [
                    { label: "Full Listening Test", href: "/skills/listening/1", icon: Headphones },
                    { label: "Daily Challenge", href: "/skills/listening/daily", icon: Zap, badge: "Streak" },
                ]
            },
            {
                title: "Skill Drills",
                items: [
                    { label: "Shadowing Practice", href: "/skills/listening/shadowing", icon: Mic },
                    { label: "Spelling Drills", href: "/skills/listening/spelling", icon: Languages },
                    { label: "Distractor Training", href: "/skills/listening/distractors", icon: Target },
                    { label: "Accent Training", href: "/skills/listening/accents", icon: Ear },
                ]
            }
        ]
    },
    {
        label: "Reading",
        icon: BookOpen,
        href: "/skills/reading",
        color: "text-orange-500",
        sections: [
            {
                title: "Skill Home",
                items: [
                    { label: "Reading Dashboard", href: "/skills/reading", icon: LayoutDashboard },
                ]
            },
            {
                title: "Practice Modes",
                items: [
                    { label: "Full Mock Test", href: "/skills/reading/1", icon: BookOpen },
                    { label: "Daily Practice", href: "/skills/reading/daily", icon: Zap },
                    { label: "Weakness Focus", href: "/skills/reading/focused", icon: Target },
                ]
            },
            {
                title: "Performance",
                items: [
                    { label: "Speed Reading", href: "/skills/reading/speed", icon: TrendingUp },
                ]
            }
        ]
    },
    {
        label: "Writing",
        icon: PenTool,
        href: "/skills/writing",
        color: "text-green-500",
        sections: [
            {
                title: "Skill Home",
                items: [
                    { label: "Writing Dashboard", href: "/skills/writing", icon: LayoutDashboard },
                ]
            },
            {
                title: "Main Practice",
                items: [
                    { label: "Essay Editor", href: "/skills/writing/1", icon: PenTool },
                ]
            },
            {
                title: "Builders",
                items: [
                    { label: "Sentence Builder", href: "/skills/writing/sentence", icon: Hammer },
                    { label: "Paragraph Logic", href: "/skills/writing/logic", icon: BookA },
                    { label: "Vocabulary Builder", href: "/skills/writing/vocab", icon: Languages },
                    { label: "Grammar Fix", href: "/skills/writing/grammar", icon: Sparkles },
                ]
            }
        ]
    },
    {
        label: "Speaking",
        icon: Mic,
        href: "/skills/speaking",
        color: "text-purple-500",
        sections: [
            {
                title: "Skill Home",
                items: [
                    { label: "Speaking Dashboard", href: "/skills/speaking", icon: LayoutDashboard },
                ]
            },
            {
                title: "Simulation",
                items: [
                    { label: "Test Simulator", href: "/skills/speaking/1", icon: Mic },
                ]
            },
            {
                title: "Improvement",
                items: [
                    { label: "Pronunciation IPA", href: "/skills/speaking/ipa", icon: Dna },
                    { label: "Fluency Drills", href: "/skills/speaking/fluency", icon: Mic2 },
                    { label: "Shadowing", href: "/skills/speaking/shadowing", icon: BrainCircuit },
                ]
            }
        ]
    }
];
