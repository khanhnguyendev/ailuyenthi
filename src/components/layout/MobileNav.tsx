"use client";


import { Menu, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "./nav-items";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Portal the menu to the body to avoid z-index/clipping issues with the sticky header
    const menuContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-background/95 backdrop-blur-3xl border-r border-border z-[9999] overflow-y-auto"
                    >
                        <div className="p-6">
                            <h2 className="font-bold text-xl font-outfit mb-8">Menu</h2>

                            <div className="space-y-4">
                                {NAV_ITEMS.map((item) => (
                                    <div key={item.label} className="border border-border rounded-2xl overflow-hidden bg-card/30">
                                        <button
                                            onClick={() => setExpandedSkill(expandedSkill === item.label ? null : item.label)}
                                            className="w-full flex items-center justify-between p-4"
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon className={`w-5 h-5 ${item.color}`} />
                                                <span className="font-bold text-foreground">{item.label}</span>
                                            </div>
                                            <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${expandedSkill === item.label ? "rotate-90" : ""}`} />
                                        </button>

                                        <AnimatePresence>
                                            {expandedSkill === item.label && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: "auto" }}
                                                    exit={{ height: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-4 pt-0 space-y-4">
                                                        {item.sections.map((section, idx) => (
                                                            <div key={idx}>
                                                                <h4 className="text-xs font-bold text-muted-foreground uppercase mb-2">{section.title}</h4>
                                                                <div className="space-y-2 pl-2 border-l border-border ml-1">
                                                                    {section.items.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.label}
                                                                            href={subItem.href}
                                                                            onClick={() => setIsOpen(false)}
                                                                            className="block text-sm text-foreground/80 py-1 hover:text-primary transition-colors pl-3"
                                                                        >
                                                                            {subItem.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <div className="pt-4 border-t border-border mt-4 space-y-2">
                                    <Link href="/points" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-4 rounded-xl hover:bg-secondary/50 font-bold text-foreground">
                                        <span>Points & Rewards</span>
                                    </Link>
                                    <Link href="/subscription" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-4 rounded-xl hover:bg-secondary/50 font-bold text-foreground">
                                        <span>Upgrade Plan</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-xl hover:bg-secondary/50 transition-colors"
            >
                <Menu className="w-6 h-6 text-foreground" />
            </button>
            {mounted && createPortal(menuContent, document.body)}
        </div>
    );
}
