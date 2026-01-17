"use client";

import { motion } from "framer-motion";

interface PricingToggleProps {
    period: "monthly" | "yearly";
    onChange: (period: "monthly" | "yearly") => void;
}

export function PricingToggle({ period, onChange }: PricingToggleProps) {
    return (
        <div className="flex justify-center items-center mb-12">
            <div className="bg-secondary/50 p-1 rounded-xl flex items-center relative">
                {/* Sliding Indicator */}
                <motion.div
                    className="absolute top-1 bottom-1 w-[120px] bg-background rounded-lg shadow-sm border border-border"
                    initial={false}
                    animate={{
                        x: period === "monthly" ? 0 : 120,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                {/* Monthly Button */}
                <button
                    onClick={() => onChange("monthly")}
                    className={`relative z-10 w-[120px] py-2 text-sm font-bold transition-colors ${period === "monthly" ? "text-foreground" : "text-muted-foreground"
                        }`}
                >
                    Monthly
                </button>

                {/* Yearly Button */}
                <button
                    onClick={() => onChange("yearly")}
                    className={`relative z-10 w-[120px] py-2 text-sm font-bold transition-colors flex items-center justify-center gap-2 ${period === "yearly" ? "text-foreground" : "text-muted-foreground"
                        }`}
                >
                    Yearly
                    <span className="text-[10px] bg-green-500/10 text-green-500 border border-green-500/20 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                        -20%
                    </span>
                </button>
            </div>
        </div>
    );
}
