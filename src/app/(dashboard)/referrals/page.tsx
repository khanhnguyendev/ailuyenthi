"use client";

import { ReferralStats } from "@/components/referrals/ReferralStats";
import { ShareLink } from "@/components/referrals/ShareLink";
import { ReferralHistory } from "@/components/referrals/ReferralHistory";

export default function ReferralsPage() {
    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="text-center py-12 px-4">
                <h1 className="text-4xl font-bold font-outfit text-foreground mb-4">
                    Invite Friends, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Get Free Premium</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Help your friends achieve their IELTS goals. When they subscribe to Premium, you both get rewarded.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Stats */}
                <ReferralStats />

                {/* Share Section */}
                <ShareLink />

                {/* History Table */}
                <ReferralHistory />
            </div>
        </div>
    );
}
