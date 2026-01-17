"use client";

import { LogOut, User, Settings, CreditCard, Gift } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-full hover:bg-secondary/30 transition-colors border border-transparent hover:border-border"
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                    R
                </div>
                <span className="text-sm font-bold text-foreground hidden md:block">Ryan</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                            className="absolute right-0 top-full mt-2 w-64 glass rounded-2xl border border-border p-2 shadow-2xl z-50 origin-top-right"
                        >
                            <div className="px-4 py-3 border-b border-border/50 mb-2">
                                <p className="text-sm font-bold text-foreground">Ryan Nguyen</p>
                                <p className="text-xs text-muted-foreground">ryan@example.com</p>
                            </div>

                            <div className="space-y-1">
                                <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-secondary/50 text-sm font-medium text-foreground transition-colors group">
                                    <User className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                    Profile
                                </Link>
                                <Link href="/subscription" className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-secondary/50 text-sm font-medium text-foreground transition-colors group">
                                    <CreditCard className="w-4 h-4 text-muted-foreground group-hover:text-purple-500" />
                                    Subscription
                                </Link>
                                <Link href="/referrals" className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-secondary/50 text-sm font-medium text-foreground transition-colors group">
                                    <Gift className="w-4 h-4 text-muted-foreground group-hover:text-green-500" />
                                    Referrals
                                </Link>
                                <div className="px-4 py-2 flex items-center justify-between">
                                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                                    <ThemeToggle />
                                </div>
                            </div>

                            <div className="border-t border-border/50 mt-2 pt-2">
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-destructive/10 text-sm font-medium text-muted-foreground hover:text-destructive transition-colors">
                                    <LogOut className="w-4 h-4" />
                                    Sign Out
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
