"use client";

import { PointsBalance } from "@/components/points/PointsBalance";
import { RewardsGrid } from "@/components/points/RewardsGrid";
import { EarnMethods } from "@/components/points/EarnMethods";
import { PointsHistory } from "@/components/points/PointsHistory";

export default function PointsPage() {
    return (
        <div className="min-h-screen pb-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
                <h1 className="text-3xl font-bold text-foreground font-outfit mb-8">Points & Rewards</h1>

                <PointsBalance />

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <RewardsGrid />
                        <EarnMethods />
                    </div>
                    <div className="w-full lg:w-96 shrink-0">
                        <PointsHistory />
                    </div>
                </div>
            </div>
        </div>
    );
}
