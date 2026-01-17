"use client";

import { BookA, GripVertical, CheckCircle2, ArrowDown } from "lucide-react";
import { useState } from "react";
import { motion, Reorder } from "framer-motion";

export default function WritingLogicPage() {
    const initialItems = [
        { id: "1", text: "Firstly, solar energy is a renewable resource that can reduce dependence on fossil fuels." },
        { id: "2", text: "Consequently, the initial investment is often offset by long-term savings." },
        { id: "3", text: "The transition to sustainable energy sources is critical for the environment." },
        { id: "4", text: "However, the installation costs of solar panels can be prohibitive for many households." },
    ];

    // Correct Order: 3 -> 1 -> 4 -> 2
    // 3. The transition... (Topic Sentence)
    // 1. Firstly... (Point 1)
    // 4. However... (Contrast)
    // 2. Consequently... (Result)

    const [items, setItems] = useState(initialItems);
    const [isChecked, setIsChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleCheck = () => {
        const currentOrder = items.map(i => i.id).join("-");
        const correctOrder = "3-1-4-2";
        setIsChecked(true);
        if (currentOrder === correctOrder) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-3xl space-y-8 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
            <div className="text-center space-y-4 mb-8">
                <div className="inline-flex p-3 bg-green-500/10 rounded-full mb-2">
                    <BookA className="w-8 h-8 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold font-outfit text-foreground">Paragraph Logic</h1>
                <p className="text-muted-foreground">Arrange the sentences to form a coherent paragraph.</p>
            </div>

            <Reorder.Group axis="y" values={items} onReorder={setItems} className="w-full space-y-4">
                {items.map((item, index) => (
                    <Reorder.Item key={item.id} value={item}>
                        <div className={`glass p-6 rounded-2xl border flex items-center gap-4 cursor-grab active:cursor-grabbing hover:bg-secondary/30 transition-colors ${isChecked && isCorrect ? 'border-green-500/50 bg-green-500/5' :
                                isChecked ? 'border-red-500/50 bg-red-500/5' : 'border-border'
                            }`}>
                            <div className="flex flex-col items-center gap-1 text-muted-foreground/30">
                                <GripVertical className="w-5 h-5" />
                            </div>

                            <div className="flex-1">
                                <p className="text-foreground font-medium inter leading-relaxed">{item.text}</p>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-sm text-muted-foreground">
                                {index + 1}
                            </div>
                        </div>
                        {index < items.length - 1 && (
                            <div className="flex justify-center py-1">
                                <ArrowDown className="w-4 h-4 text-muted-foreground/20" />
                            </div>
                        )}
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <div className="flex justify-center mt-8">
                <button
                    onClick={handleCheck}
                    className={`px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all flex items-center gap-2 ${isCorrect ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-primary/90'
                        }`}
                >
                    {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : null}
                    {isCorrect ? "Correct! Well done." : "Check Logic"}
                </button>
            </div>

            {isChecked && !isCorrect && (
                <p className="text-red-500 text-sm font-bold text-center animate-pulse">
                    The flow doesn't seem right. Look for cohesive devices like "However" or "Firstly".
                </p>
            )}

        </div>
    );
}
