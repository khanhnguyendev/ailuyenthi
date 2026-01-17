"use client";

interface ReadingPassageProps {
    title: string;
    content: string; // HTML string or Markdown
}

export function ReadingPassage({ title, content }: ReadingPassageProps) {
    return (
        <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="bg-white text-slate-900 p-8 min-h-full shadow-sm">
                <h2 className="font-bold text-2xl font-serif mb-6">{title}</h2>

                <div className="prose prose-slate max-w-none font-serif text-lg leading-relaxed marker:text-slate-400">
                    {/* Simulating paragraph logic (would be parsed in real app) */}
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    );
}
