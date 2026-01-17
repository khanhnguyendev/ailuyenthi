"use client";

import { useState } from "react";
import { PricingCard, PricingTier } from "@/components/subscription/PricingCard";
import { PricingToggle } from "@/components/subscription/PricingToggle";
import { FAQSection } from "@/components/subscription/FAQSection";
import { PlanComparison } from "@/components/subscription/PlanComparison";

const tiers: PricingTier[] = [
    {
        name: "Free",
        description: "Essential tools to start your IELTS journey.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        ctaText: "Get Started",
        ctaLink: "/auth/signup",
        features: ["1 Full Mock Test per week", "Basic Grammar Checker", "Access to Community", "Progress Tracking"],
        notIncluded: ["AI Speaking Examiner", "Deep Writing Analysis", "Offline Mode"],
    },
    {
        name: "Standard",
        description: "Perfect for dedicated students focusing on core skills.",
        monthlyPrice: 19,
        yearlyPrice: 15,
        highlight: true,
        ctaText: "Upgrade to Standard",
        ctaLink: "/checkout/standard",
        features: [
            "Unlimited Mock Tests",
            "Advanced Writing Feedback",
            "Unlimited Speaking Drills",
            "No Ads",
            "Priority Support",
        ],
    },
    {
        name: "Premium",
        description: "The ultimate toolkit for Band 8.0+ ambition.",
        monthlyPrice: 39,
        yearlyPrice: 29,
        ctaText: "Go Premium",
        ctaLink: "/checkout/premium",
        features: [
            "Everything in Standard",
            "1-on-1 AI Examiner Mode",
            "Personalized Improvement Roadmap",
            "Phoneme-level Pronunciation Fixes",
            "Essay Rewrite Suggestions",
        ],
    },
];

export default function SubscriptionPage() {
    const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="text-center py-16 px-4">
                <h1 className="text-4xl md:text-5xl font-bold font-outfit text-foreground mb-4">
                    Invest in Your Future
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Unlock the full potential of AI-driven IELTS preparation. Choose the plan that fits your ambition.
                </p>
            </div>

            {/* Toggle */}
            <PricingToggle period={period} onChange={setPeriod} />

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <PricingCard key={tier.name} tier={tier} period={period} />
                    ))}
                </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                <h2 className="text-2xl font-bold text-foreground text-center mb-8">Compare Plans</h2>
                <PlanComparison />
            </div>

            {/* FAQ */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 bg-secondary/20 rounded-[3rem] py-16">
                <FAQSection />
            </div>
        </div>
    );
}
