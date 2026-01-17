"use client";

import { CheckCircle, Calendar, Edit3, Mic } from "lucide-react";

const methods = [
    {
        icon: Calendar,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        title: "Daily Login",
        reward: "+50 PTS",
        frequency: "Once daily",
    },
    {
        icon: Edit3,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        title: "Complete Writing Task",
        reward: "+200 PTS",
        frequency: "Unlimited",
    },
    {
        icon: Mic,
        color: "text-red-500",
        bg: "bg-red-500/10",
        title: "Speaking Practice",
        reward: "+150 PTS",
        frequency: "Unlimited",
    },
    {
        icon: CheckCircle,
        color: "text-green-500",
        bg: "bg-green-500/10",
        title: "Full Mock Test",
        reward: "+500 PTS",
        frequency: "Weekly bonus",
    },
];

export function EarnMethods() {
    return (
        <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                How to Earn
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {methods.map((method, i) => (
                    <div
                        key={i}
                        className="p-4 rounded-xl glass border border-border transition-colors hover:bg-secondary/40 flex flex-col items-center text-center gap-3"
                    >
                        <div className={`w-12 h-12 rounded-full ${method.bg} flex items-center justify-center ${method.color}`}>
                            <method.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-foreground">{method.title}</p>
                            <p className="text-xs text-muted-foreground">{method.frequency}</p>
                        </div>
                        <div className="mt-auto pt-2">
                            <span className="inline-block bg-background border border-border px-3 py-1 rounded-full text-xs font-bold text-amber-500">
                                {method.reward}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
