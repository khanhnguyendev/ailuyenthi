import Link from "next/link";
import { ArrowRight, Target, Sparkles } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="glass-card p-8 border-t border-white/20 shadow-2xl animate-in fade-in zoom-in duration-500">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-growth-green to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-growth-green/30">
                    <Sparkles className="text-white w-7 h-7" />
                </div>
                <h1 className="text-3xl font-outfit font-bold text-white mb-2">Start Your Journey</h1>
                <p className="text-slate-400">Join thousands of students aiming for Band 7.0+</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1">Full Name</label>
                    <input
                        type="text"
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-growth-green/50 focus:border-growth-green transition-all"
                        placeholder="Nguyen Van A"
                    />
                </div>

                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1">Email Address</label>
                    <input
                        type="email"
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-growth-green/50 focus:border-growth-green transition-all"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1">Create Password</label>
                    <input
                        type="password"
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-growth-green/50 focus:border-growth-green transition-all"
                        placeholder="••••••••"
                    />
                </div>

                <button className="w-full bg-gradient-to-r from-growth-green to-emerald-600 hover:from-emerald-500 hover:to-growth-green text-white font-bold py-3.5 rounded-xl shadow-lg shadow-growth-green/25 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-2">
                    Create Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            {/* Footer */}
            <p className="text-center text-slate-500 text-sm mt-8">
                Already have an account? <Link href="/login" className="text-growth-green font-semibold hover:text-white transition-colors">Sign In</Link>
            </p>
        </div>
    );
}
