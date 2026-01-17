"use client";

import { Check, X } from "lucide-react";
import Link from "next/link";

export interface PricingTier {
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    notIncluded?: string[];
    highlight?: boolean;
    ctaText: string;
    ctaLink: string;
}

interface PricingCardProps {
    tier: PricingTier;
    period: "monthly" | "yearly";
}

export function PricingCard({ tier, period }: PricingCardProps) {
    const price = period === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
    const periodText = period === "monthly" ? "/month" : "/month"; // Display monthly equivalent even for yearly

    return (
        <div
            className={`relative glass p-8 rounded-3xl flex flex-col h-full border transition-all duration-300 hover:shadow-2xl ${tier.highlight
                    ? "border-blue-500/50 bg-blue-500/5 shadow-blue-500/10 hover:shadow-blue-500/20 scale-105 z-10"
                    : "border-border hover:border-blue-500/30"
                }`}
        >
            {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/20">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground min-h-[40px]">{tier.description}</p>
            </div>

            <div className="mb-8">
                <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-foreground">
                        ${price === 0 ? "0" : price}
                    </span>
                    <span className="text-muted-foreground mb-1">{periodText}</span>
                </div>
                {period === "yearly" && price > 0 && (
                    <p className="text-xs text-green-500 font-bold mt-2">
                        Billed ${(price * 12).toFixed(0)} yearly
                    </p>
                )}
            </div>

            <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                    </div>
                ))}
                {tier.notIncluded?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground/60">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                            <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <span className="line-through">{feature}</span>
                    </div>
                ))}
            </div>

            <Link
                href={tier.ctaLink}
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${tier.highlight
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                        : "bg-secondary hover:bg-secondary/80 text-foreground border border-border"
                    }`}
            >
                {tier.ctaText}
            </Link>
        </div>
    );
}
