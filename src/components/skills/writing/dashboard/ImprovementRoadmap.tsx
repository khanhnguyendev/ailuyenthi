"use client";

import { CheckCircle2, Lock, ArrowRight, Map } from "lucide-react";

export function ImprovementRoadmap() {
    const steps = [
        { id: 1, title: "Fix Sentence Fragments", status: "completed" },
        { id: 2, title: "Master Complex Sentences", status: "completed" },
        { id: 3, title: "Expand Linking Words", status: "current" },
        { id: 4, title: "Advanced Paraphrasing", status: "locked" },
    ];

    return (
        <div className="glass p-6 rounded-2xl h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                    <Map className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold text-foreground text-lg">Road to Band 6.5</h3>
            </div>

            <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-border rounded-full" />

                {steps.map((step, index) => (
                    <div key={step.id} className="relative pl-10 flex items-center justify-between group">

                        {/* Icon */}
                        <div className={`
                        absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center bg-background transition-colors z-10
                        ${step.status === 'completed' ? 'border-green-500 text-green-500' : ''}
                        ${step.status === 'current' ? 'border-blue-500 text-primary-foreground bg-blue-500 ring-4 ring-blue-500/20' : ''}
                        ${step.status === 'locked' ? 'border-muted text-muted-foreground' : ''}
                    `}>
                            {step.status === 'completed' && <CheckCircle2 className="w-4 h-4" />}
                            {step.status === 'current' && <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />}
                            {step.status === 'locked' && <Lock className="w-3 h-3" />}
                        </div>

                        <div>
                            <h4 className={`text-sm font-bold ${step.status === 'locked' ? 'text-muted-foreground' : 'text-foreground'}`}>
                                {step.title}
                            </h4>
                            {step.status === 'current' && (
                                <span className="text-xs text-blue-500 font-medium">In Progress • 60%</span>
                            )}
                        </div>

                        {step.status === 'current' && (
                            <button className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-1 cursor-pointer">
                                Continue <ArrowRight className="w-3 h-3" />
                            </button>
                        )}

                    </div>
                ))}
            </div>

        </div>
    );
}
