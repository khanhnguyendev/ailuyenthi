"use client";

import { Users, Gift, Clock } from "lucide-react";

export function ReferralStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass p-6 rounded-2xl border border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Users className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Invited</p>
                    <p className="text-2xl font-bold text-foreground">12</p>
                </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-green-500/20 flex items-center gap-4 bg-green-500/5">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <Gift className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Premium Days Earned</p>
                    <p className="text-2xl font-bold text-foreground">30 Days</p>
                </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Clock className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Signups</p>
                    <p className="text-2xl font-bold text-foreground">3</p>
                </div>
            </div>
        </div>
    );
}
