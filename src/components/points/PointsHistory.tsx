"use client";

import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export function PointsHistory() {
    const transactions = [
        { id: 1, action: "Completed Writing Task 2", date: "Jan 17, 2026", type: "earn", amount: 200 },
        { id: 2, action: "Daily Login Bonus", date: "Jan 17, 2026", type: "earn", amount: 50 },
        { id: 3, action: "Redeemed: 1 Essay Review", date: "Jan 15, 2026", type: "spend", amount: -800 },
        { id: 4, action: "Weekly Streak Bonus", date: "Jan 14, 2026", type: "earn", amount: 500 },
    ];

    return (
        <div className="glass rounded-2xl border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">Recent History</h3>
            <div className="space-y-4">
                {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/30 transition-colors">
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === "earn" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                                    }`}
                            >
                                {tx.type === "earn" ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
                            </div>
                            <div>
                                <p className="font-medium text-foreground text-sm md:text-base">{tx.action}</p>
                                <p className="text-xs text-muted-foreground">{tx.date}</p>
                            </div>
                        </div>
                        <span
                            className={`font-bold text-sm md:text-base ${tx.type === "earn" ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {tx.amount > 0 ? "+" : ""}
                            {tx.amount}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
