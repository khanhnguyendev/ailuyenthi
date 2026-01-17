"use client";

import { Trophy, Crown, TrendingUp, TrendingDown, Timer, Flame, Medal, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeaderboardPage() {
    const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

    const [showPrizes, setShowPrizes] = useState(false);

    // Mock Data
    const rankingData = {
        daily: [
            { id: 1, name: "Sarah K.", xp: 2450, avatar: "bg-pink-500", trend: "up" },
            { id: 2, name: "Mike R.", xp: 2100, avatar: "bg-blue-500", trend: "same" },
            { id: 3, name: "Alex T.", xp: 1950, avatar: "bg-green-500", trend: "up" },
            { id: 4, name: "You", xp: 1800, avatar: "bg-primary", trend: "up" },
            { id: 5, name: "John D.", xp: 1600, avatar: "bg-orange-500", trend: "down" },
        ],
        weekly: [
            { id: 1, name: "David L.", xp: 15400, avatar: "bg-purple-500", trend: "up", league: "Diamond" },
            { id: 2, name: "Sarah K.", xp: 14200, avatar: "bg-pink-500", trend: "up", league: "Diamond" },
            { id: 3, name: "You", xp: 13800, avatar: "bg-primary", trend: "up", league: "Diamond" },
            { id: 4, name: "Mike R.", xp: 12100, avatar: "bg-blue-500", trend: "down", league: "Diamond" },
            { id: 5, name: "Emma W.", xp: 11500, avatar: "bg-cyan-500", trend: "same", league: "Platinum" },
        ],
        monthly: [
            { id: 1, name: "Best User 2024", xp: 45000, avatar: "bg-yellow-500", trend: "same" },
            { id: 2, name: "Study Master", xp: 42000, avatar: "bg-red-500", trend: "up" },
            { id: 3, name: "IELTS Pro", xp: 40500, avatar: "bg-indigo-500", trend: "down" },
        ]
    };

    const currentData = rankingData[timeframe] || rankingData.daily;

    const getThemeColor = () => {
        if (timeframe === 'daily') return 'text-orange-500 border-orange-500 bg-orange-500';
        if (timeframe === 'weekly') return 'text-purple-500 border-purple-500 bg-purple-500';
        return 'text-yellow-500 border-yellow-500 bg-yellow-500'; // Monthly
    };

    const prizes = {
        daily: { title: "Daily Sprint", reward: "+50 Bonus Points", icon: Timer },
        weekly: { title: "Weekly League", reward: "+500 Points & Diamond Frame", icon: Trophy },
        monthly: { title: "Monthly Grand Prix", reward: "1 Month Premium Subscription", icon: Crown },
    };

    return (
        <div className="container mx-auto p-6 max-w-5xl space-y-8 min-h-screen pb-24">

            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h1 className="text-4xl font-bold font-outfit text-foreground flex items-center gap-3">
                        <Trophy className={`w-10 h-10 ${getThemeColor().split(' ')[0]}`} />
                        Leaderboard
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Compete with others and earn exclusive rewards.
                    </p>
                </div>

                {/* Event Timer Card */}
                <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4 border border-border bg-gradient-to-r from-secondary to-transparent">
                    <div className={`p-2 rounded-lg ${getThemeColor().split(' ')[2]}/10`}>
                        <Timer className={`w-6 h-6 ${getThemeColor().split(' ')[0]}`} />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-0.5">
                            {timeframe === 'daily' ? 'Daily Sprint Ends' : timeframe === 'weekly' ? 'Weekly League Reset' : 'Season Ends'}
                        </div>
                        <div className="text-xl font-black font-mono text-foreground">
                            04 : 12 : 45
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex p-1 rounded-2xl bg-secondary/50 backdrop-blur border border-border w-fit mx-auto md:mx-0">
                {(['daily', 'weekly', 'monthly'] as const).map((t) => (
                    <button
                        key={t}
                        onClick={() => setTimeframe(t)}
                        className={`px-8 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${timeframe === t
                                ? 'bg-background text-foreground shadow-lg scale-105'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Podium (Top 3) */}
            <div className="relative h-96 flex items-end justify-center gap-4 md:gap-8 pt-12 pb-8">
                {/* 2nd Place */}
                <div className="flex flex-col items-center gap-4 w-1/3 max-w-[150px]">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <div className="w-20 h-20 rounded-full border-4 border-slate-300 bg-slate-200 overflow-hidden shadow-xl">
                            <div className={`w-full h-full ${currentData[1]?.avatar || 'bg-gray-400'}`} />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-slate-300">
                            #2
                        </div>
                    </motion.div>
                    <div className="text-center">
                        <div className="font-bold text-foreground truncate w-full">{currentData[1]?.name || "N/A"}</div>
                        <div className="text-sm font-bold text-slate-500">{currentData[1]?.xp.toLocaleString()} XP</div>
                    </div>
                    <motion.div
                        initial={{ height: 0 }} animate={{ height: '140px' }}
                        className="w-full bg-gradient-to-t from-slate-300/20 to-slate-300/50 rounded-t-3xl border-t border-x border-slate-300/30 backdrop-blur"
                    />
                </div>

                {/* 1st Place */}
                <div className="flex flex-col items-center gap-4 w-1/3 max-w-[150px] z-10 -mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        <Crown className="w-12 h-12 text-yellow-400 absolute -top-14 left-1/2 -translate-x-1/2 animate-bounce" />
                        <div className="w-24 h-24 rounded-full border-4 border-yellow-400 bg-yellow-100 overflow-hidden shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                            <div className={`w-full h-full ${currentData[0]?.avatar || 'bg-gray-400'}`} />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-0.5 rounded-full border-2 border-yellow-300">
                            #1
                        </div>
                    </motion.div>
                    <div className="text-center">
                        <div className="font-bold text-xl text-foreground truncate w-full">{currentData[0]?.name || "N/A"}</div>
                        <div className="font-bold text-yellow-500">{currentData[0]?.xp.toLocaleString()} XP</div>
                    </div>
                    <motion.div
                        initial={{ height: 0 }} animate={{ height: '180px' }}
                        className="w-full bg-gradient-to-t from-yellow-400/20 to-yellow-400/50 rounded-t-3xl border-t border-x border-yellow-400/30 backdrop-blur relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-yellow-400/10 animate-pulse" />
                    </motion.div>
                </div>

                {/* 3rd Place */}
                <div className="flex flex-col items-center gap-4 w-1/3 max-w-[150px]">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="w-20 h-20 rounded-full border-4 border-orange-300 bg-orange-200 overflow-hidden shadow-xl">
                            <div className={`w-full h-full ${currentData[2]?.avatar || 'bg-gray-400'}`} />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-700 text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-orange-300">
                            #3
                        </div>
                    </motion.div>
                    <div className="text-center">
                        <div className="font-bold text-foreground truncate w-full">{currentData[2]?.name || "N/A"}</div>
                        <div className="text-sm font-bold text-orange-500">{currentData[2]?.xp.toLocaleString()} XP</div>
                    </div>
                    <motion.div
                        initial={{ height: 0 }} animate={{ height: '100px' }}
                        className="w-full bg-gradient-to-t from-orange-300/20 to-orange-300/50 rounded-t-3xl border-t border-x border-orange-300/30 backdrop-blur"
                    />
                </div>
            </div>

            {/* List & Promotion Zone */}
            <div className="space-y-4 relative">
                <div className="flex items-center justify-between px-6 text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    <span>Rank</span>
                    <span>User</span>
                    <span>XP Earned</span>
                </div>

                {currentData.slice(3).map((user, idx) => (
                    <motion.div
                        key={user.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all hover:scale-[1.01] ${user.name === 'You'
                                ? `bg-background border-${getThemeColor().split('-')[1]}-500 shadow-xl ring-2 ring-${getThemeColor().split('-')[1]}-500/20 z-10 relative`
                                : 'glass border-border hover:bg-secondary/40'
                            }`}
                    >
                        <div className="flex items-center gap-6">
                            <span className={`font-mono font-bold w-8 text-center ${user.name === 'You' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                #{idx + 4}
                            </span>

                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full ${user.avatar} flex items-center justify-center text-white font-bold`}>
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground flex items-center gap-2">
                                        {user.name}
                                        {user.name === 'You' && <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full uppercase">Me</span>}
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                        {user.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-500" />}
                                        {user.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-500" />}
                                        {user.trend === 'same' && <span className="text-gray-400">-</span>}
                                        <span>Rank {user.trend === 'up' ? 'Rising' : user.trend === 'down' ? 'Falling' : 'Stable'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="font-bold font-mono text-lg text-foreground">
                            {user.xp.toLocaleString()}
                        </div>
                    </motion.div>
                ))}

                {/* Promotion Line Visual */}
                {timeframe === 'weekly' && (
                    <div className="mt-8 flex items-center gap-4 opacity-50">
                        <div className="h-px bg-green-500/50 flex-1" />
                        <span className="text-xs font-bold text-green-500 uppercase">Promotion Zone (Top 10)</span>
                        <div className="h-px bg-green-500/50 flex-1" />
                    </div>
                )}
            </div>

            {/* Sticky Personal Stats (Mobile only typically, but good for context) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg glass p-4 rounded-full border border-primary/30 shadow-2xl flex items-center justify-between backdrop-blur-xl z-50">
                <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground font-bold px-3 py-1 rounded-full text-sm">
                        #3
                    </div>
                    <div className="text-sm">
                        <span className="text-muted-foreground">You are in the</span>
                        <span className="font-bold text-foreground mx-1">Promotion Zone</span>
                    </div>
                </div>
                <button
                    onClick={() => setShowPrizes(true)}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                    View Prizes <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Prizes Modal */}
            <AnimatePresence>
                {showPrizes && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                            onClick={() => setShowPrizes(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-card border border-border p-8 rounded-[2rem] shadow-2xl max-w-md w-full"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-center">Season Rewards</h2>
                            <div className="space-y-4">
                                {(['daily', 'weekly', 'monthly'] as const).map(key => (
                                    <div key={key} className={`p-4 rounded-xl border flex items-center gap-4 ${key === timeframe ? 'bg-primary/10 border-primary' : 'bg-secondary/20 border-border'}`}>
                                        <div className={`p-3 rounded-full ${key === 'daily' ? 'bg-orange-500/20 text-orange-500' : key === 'weekly' ? 'bg-purple-500/20 text-purple-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                            {key === 'daily' ? <Timer className="w-6 h-6" /> : key === 'weekly' ? <Trophy className="w-6 h-6" /> : <Crown className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold capitalize">{prizes[key].title}</h3>
                                            <p className="text-sm text-muted-foreground">{prizes[key].reward}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setShowPrizes(false)}
                                className="w-full mt-8 bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
