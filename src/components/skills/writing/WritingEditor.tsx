"use client";

import { useMemo } from "react";
import { AlignLeft } from "lucide-react";

interface WritingEditorProps {
    content: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export function WritingEditor({ content, onChange, disabled }: WritingEditorProps) {
    const wordCount = useMemo(() => {
        return content.trim().split(/\s+/).filter(w => w.length > 0).length;
    }, [content]);

    // Guidelines: Task 2 ~250 words
    const getWordCountColor = () => {
        if (wordCount < 150) return "text-destructive";
        if (wordCount < 250) return "text-orange-500";
        return "text-green-500";
    };

    return (
        <div className="flex flex-col h-full bg-card border border-border shadow-sm rounded-2xl overflow-hidden">
            {/* Editor Toolbar (Minimal) */}
            <div className="px-4 py-2 bg-muted/50 border-b border-border flex justify-between items-center">
                <div className="flex gap-2">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <AlignLeft className="w-3 h-3" /> Editor
                    </span>
                </div>
                <div className={`text-xs font-mono font-bold transition-colors ${getWordCountColor()}`}>
                    {wordCount} Words
                </div>
            </div>

            {/* Text Area */}
            <textarea
                className="flex-1 w-full bg-transparent p-6 text-foreground text-lg leading-relaxed focus:outline-none resize-none font-serif placeholder:text-muted-foreground/50"
                placeholder="Start writing your essay here..."
                value={content}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                spellCheck={false}
            />
        </div>
    );
}
