"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "./nav-items";
import { motion, AnimatePresence } from "framer-motion";

export function NavMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <nav className="hidden lg:flex items-center gap-1 h-full">
            {NAV_ITEMS.map((item) => (
                <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setActiveMenu(item.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <Link
                        href={item.href}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${activeMenu === item.label
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        <item.icon className={`w-4 h-4 ${activeMenu === item.label ? item.color : ""}`} />
                        {item.label}
                        <ChevronDown
                            className={`w-3 h-3 transition-transform ${activeMenu === item.label ? "rotate-180" : ""
                                }`}
                        />
                    </Link>

                    <AnimatePresence>
                        {activeMenu === item.label && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-popover backdrop-blur-3xl rounded-3xl border border-border p-6 grid grid-cols-2 gap-8 shadow-2xl z-50"
                            >
                                {/* Background Decor */}
                                <div className={`absolute -top-10 -left-10 w-40 h-40 ${item.color.replace('text-', 'bg-')}/10 blur-3xl rounded-full pointer-events-none`} />

                                {item.sections.map((section, idx) => (
                                    <div key={idx} className={idx === 2 ? "col-span-2 border-t border-border/50 pt-4" : ""}>
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                                            {section.title}
                                        </h4>
                                        <div className={idx === 2 ? "grid grid-cols-2 gap-4" : "space-y-2"}>
                                            {section.items.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-secondary/50 transition-colors group"
                                                >
                                                    <div className={`p-2 rounded-lg bg-background border border-border group-hover:scale-110 transition-transform ${item.color}`}>
                                                        <subItem.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <span className="text-sm font-bold text-foreground block">
                                                            {subItem.label}
                                                        </span>
                                                        {subItem.badge && (
                                                            <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded-full mt-0.5 inline-block">
                                                                {subItem.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}

            {/* Practice & Progress Links */}
            <Link href="/practice" className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-foreground">
                Practice
            </Link>
            <Link href="/progress" className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-foreground">
                Progress
            </Link>
        </nav>
    );
}
