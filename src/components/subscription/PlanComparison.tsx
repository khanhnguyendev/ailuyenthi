"use client";

import { Fragment } from "react";
import { Check, Minus, HelpCircle } from "lucide-react";

const features = [
    {
        category: "Practice",
        items: [
            { name: "Full Mock Tests", free: "1/week", standard: "Unlimited", premium: "Unlimited", tooltip: "Complete 3-hour exam simulations" },
            { name: "Skill-Focused Drills", free: "Limited", standard: "Unlimited", premium: "Unlimited", tooltip: "Short exercises for specific skills" },
            { name: "Offline Mode", free: false, standard: true, premium: true },
        ],
    },
    {
        category: "AI Feedback",
        items: [
            { name: "Writing Scoring", free: "Basic Band", standard: "Detailed", premium: "Advanced + Rewrite", tooltip: "AI analysis of your essay" },
            { name: "Speaking Fluency", free: "Basic", standard: "Standard", premium: "Phoneme-level", tooltip: "Pronunciation and fluency analysis" },
            { name: "Grammar Correction", free: true, standard: true, premium: true },
        ],
    },
    {
        category: "Premium",
        items: [
            { name: "Personalized Roadmap", free: false, standard: false, premium: true, tooltip: "Custom study plan based on weak areas" },
            { name: "Examiner Mode", free: false, standard: false, premium: true, tooltip: "Real-time voice interaction with AI examiner" },
            { name: "Priority Support", free: false, standard: true, premium: true },
        ],
    },
];

export function PlanComparison() {
    return (
        <div className="w-full overflow-hidden rounded-3xl border border-border glass hidden lg:block">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-secondary/50 border-b border-border">
                        <th className="p-6 text-sm font-bold text-muted-foreground w-2/5">Compare Plans</th>
                        <th className="p-6 text-sm font-bold text-foreground w-1/5 text-center">Free</th>
                        <th className="p-6 text-sm font-bold text-blue-500 w-1/5 text-center">Standard</th>
                        <th className="p-6 text-sm font-bold text-purple-500 w-1/5 text-center">Premium</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                    {features.map((section) => (
                        <Fragment key={section.category}>
                            <tr className="bg-muted/20">
                                <td colSpan={4} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    {section.category}
                                </td>
                            </tr>
                            {section.items.map((item) => (
                                <tr key={item.name} className="hover:bg-muted/10 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-foreground flex items-center gap-2">
                                        {item.name}
                                        {item.tooltip && (
                                            <span title={item.tooltip} className="cursor-help inline-flex items-center">
                                                <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground text-center">
                                        {renderValue(item.free)}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-foreground text-center bg-blue-500/5">
                                        {renderValue(item.standard)}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-foreground text-center bg-purple-500/5">
                                        {renderValue(item.premium)}
                                    </td>
                                </tr>
                            ))}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function renderValue(value: string | boolean) {
    if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    if (value === false) return <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />;
    return value;
}
