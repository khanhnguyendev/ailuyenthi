"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period.",
    },
    {
        question: "How accurate is the AI scoring?",
        answer: "Our AI is trained on thousands of real IELTS exams and typically scores within 0.5 bands of official examiner scores. It focuses heavily on lexical resource, coherence, and grammatical accuracy.",
    },
    {
        question: "What is the difference between Standard and Premium?",
        answer: "Standard gives you unlimited practice tests and basic AI feedback. Premium unlocks deep analysis, including pronunciation coaching, detailed writing corrections, and a personalized improvement roadmap.",
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer a 7-day money-back guarantee if you're not satisfied with the Premium features.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="glass rounded-xl overflow-hidden border border-border transition-colors hover:bg-secondary/20"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full p-6 flex items-center justify-between text-left cursor-pointer"
                        >
                            <span className="font-bold text-foreground pr-8">{faq.question}</span>
                            <span className="shrink-0">
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-blue-500" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground" />
                                )}
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
