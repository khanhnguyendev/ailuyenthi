"use client";

import { Gift, Lock } from "lucide-react";

export interface Reward {
    id: string;
    title: string;
    points: number;
    image: string; // Using colors/icons for now
    locked?: boolean;
}

const rewards: Reward[] = [
    { id: "1", title: "7 Days Premium", points: 2500, image: "bg-gradient-to-br from-purple-500 to-indigo-600" },
    { id: "2", title: "Review 1 Essay", points: 800, image: "bg-gradient-to-br from-blue-400 to-blue-600" },
    { id: "3", title: "Speaking Mock Test", points: 1200, image: "bg-gradient-to-br from-red-400 to-red-600" },
    { id: "4", title: "Remove Ads (30 Days)", points: 5000, image: "bg-gradient-to-br from-emerald-400 to-teal-600", locked: true },
];

export function RewardsGrid() {
    const userPoints = 1250;

    return (
        <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-500" />
                Rewards Store
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rewards.map((reward) => {
                    const canAfford = userPoints >= reward.points;
                    return (
                        <div
                            key={reward.id}
                            className="glass rounded-2xl overflow-hidden border border-border group relative hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className={`h-32 w-full ${reward.image} flex items-center justify-center`}>
                                <Gift className="w-10 h-10 text-white/50" />
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-foreground mb-1">{reward.title}</h4>
                                <p className="text-sm font-bold text-amber-500 mb-4">{reward.points.toLocaleString()} PTS</p>

                                <button
                                    disabled={!canAfford || reward.locked}
                                    className={`w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${canAfford && !reward.locked
                                            ? "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25"
                                            : "bg-secondary text-muted-foreground cursor-not-allowed"
                                        }`}
                                >
                                    {reward.locked ? (
                                        <>
                                            <Lock className="w-4 h-4" /> Locked
                                        </>
                                    ) : canAfford ? (
                                        "Redeem"
                                    ) : (
                                        "Not enough points"
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
