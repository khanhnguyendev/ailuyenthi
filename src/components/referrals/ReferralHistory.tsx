"use client";

import { CheckCircle, Clock, XCircle } from "lucide-react";

const referrals = [
    { email: "alex.d***@gmail.com", date: "Jan 15, 2026", status: "completed", reward: "7 Days" },
    { email: "sarah.win***@yahoo.com", date: "Jan 12, 2026", status: "pending", reward: "-" },
    { email: "mike.t***@hotmail.com", date: "Jan 10, 2026", status: "completed", reward: "7 Days" },
    { email: "jessica.l***@gmail.com", date: "Jan 05, 2026", status: "expired", reward: "-" },
];

export function ReferralHistory() {
    return (
        <div className="glass rounded-2xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
                <h3 className="font-bold text-foreground">Referral History</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-secondary/30">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold uppercase text-muted-foreground tracking-wider">User</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase text-muted-foreground tracking-wider">Date Invited</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase text-muted-foreground tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase text-muted-foreground tracking-wider">Reward Earned</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {referrals.map((ref, i) => (
                            <tr key={i} className="hover:bg-secondary/20 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-foreground">{ref.email}</td>
                                <td className="px-6 py-4 text-sm text-muted-foreground">{ref.date}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${ref.status === "completed"
                                                ? "bg-green-500/10 text-green-500"
                                                : ref.status === "pending"
                                                    ? "bg-orange-500/10 text-orange-500"
                                                    : "bg-muted text-muted-foreground"
                                            }`}
                                    >
                                        {ref.status === "completed" && <CheckCircle className="w-3 h-3" />}
                                        {ref.status === "pending" && <Clock className="w-3 h-3" />}
                                        {ref.status === "expired" && <XCircle className="w-3 h-3" />}
                                        {ref.status.charAt(0).toUpperCase() + ref.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-foreground">{ref.reward}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
