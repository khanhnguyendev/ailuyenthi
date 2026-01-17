"use client";

import { useState } from "react";
import { Copy, Check, Twitter, Facebook, Linkedin } from "lucide-react";

export function ShareLink() {
    const [copied, setCopied] = useState(false);
    const referralLink = "https://ailuyenthi.com/invite/ryan123";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="glass p-8 rounded-3xl border border-border mb-12">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Share Your Unique Link</h2>
                <p className="text-muted-foreground">Give your friends 3 days of Premium, and get 7 days when they subscribe.</p>
            </div>

            <div className="max-w-xl mx-auto">
                <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-xl border border-border mb-6">
                    <input
                        type="text"
                        readOnly
                        value={referralLink}
                        className="flex-1 bg-transparent border-none outline-none px-4 text-foreground font-medium text-sm md:text-base"
                    />
                    <button
                        onClick={handleCopy}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all active:scale-95"
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>

                <div className="flex justify-center gap-4">
                    <button className="p-3 rounded-full bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                        <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-blue-700/10 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
