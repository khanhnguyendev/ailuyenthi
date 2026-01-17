"use client";

import { CheckCircle2, Lock, ArrowRight, Mic } from "lucide-react";

export function ConfidenceRoadmap() {
    const steps = [
        { id: 1, title: "Reduce 'Umm' & 'Ahh'", status: "completed" },
        { id: 2, title: "Answering in Full Sentences", status: "completed" },
        { id: 3, title: "Part 2 Time Management", status: "current" },
        { id: 4, title: "Idiomatic Expressions", status: "locked" },
    ];

    return (
        <div className="glass-card p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-electric-blue/10 p-2 rounded-lg">
                    <Mic className="w-5 h-5 text-electric-blue" />
                </div>
                <h3 className="font-bold text-white text-lg">Confidence Journey</h3>
            </div>

            <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-slate-800 rounded-full" />

                {steps.map((step, index) => (
                    <div key={step.id} className="relative pl-10 flex items-center justify-between group">

                        {/* Icon */}
                        <div className={`
                        absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center bg-slate-900 transition-colors z-10
                        ${step.status === 'completed' ? 'border-growth-green text-growth-green' : ''}
                        ${step.status === 'current' ? 'border-electric-blue text-white ring-4 ring-electric-blue/20' : ''}
                        ${step.status === 'locked' ? 'border-slate-700 text-slate-600' : ''}
                    `}>
                            {step.status === 'completed' && <CheckCircle2 className="w-4 h-4" />}
                            {step.status === 'current' && <span className="w-2.5 h-2.5 bg-electric-blue rounded-full animate-pulse" />}
                            {step.status === 'locked' && <Lock className="w-3 h-3" />}
                        </div>

                        <div>
                            <h4 className={`text-sm font-bold ${step.status === 'locked' ? 'text-slate-500' : 'text-white'}`}>
                                {step.title}
                            </h4>
                            {step.status === 'current' && (
                                <span className="text-xs text-electric-blue font-medium">In Progress • 40%</span>
                            )}
                        </div>

                        {step.status === 'current' && (
                            <button className="bg-electric-blue text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-electric-blue/90 transition-colors flex items-center gap-1">
                                Practice <ArrowRight className="w-3 h-3" />
                            </button>
                        )}

                    </div>
                ))}
            </div>

        </div>
    );
}
