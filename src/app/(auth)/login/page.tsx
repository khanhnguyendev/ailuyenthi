import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="glass-card p-8 border-t border-white/20 shadow-2xl animate-in fade-in zoom-in duration-500">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-ai-violet to-electric-blue rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-ai-violet/30">
                    <Target className="text-white w-7 h-7" />
                </div>
                <h1 className="text-3xl font-outfit font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-slate-400">Your journey to Band 8.0 continues here.</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1">Email Address</label>
                    <input
                        type="email"
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ai-violet/50 focus:border-ai-violet transition-all"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1">
                        <div className="flex justify-between">
                            <span>Password</span>
                            <Link href="#" className="text-ai-violet hover:text-white transition-colors text-xs">Forgot?</Link>
                        </div>
                    </label>
                    <input
                        type="password"
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ai-violet/50 focus:border-ai-violet transition-all"
                        placeholder="••••••••"
                    />
                </div>

                <button className="w-full bg-gradient-to-r from-ai-violet to-violet-600 hover:from-violet-500 hover:to-ai-violet text-white font-bold py-3.5 rounded-xl shadow-lg shadow-ai-violet/25 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-2">
                    Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-800 px-3 text-slate-500 font-medium tracking-wider">Or continue with</span>
                </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 text-sm font-medium transition-all text-slate-300 hover:text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                    </svg>
                    Google
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 text-sm font-medium transition-all text-slate-300 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                    Facebook
                </button>
            </div>

            {/* Footer */}
            <p className="text-center text-slate-500 text-sm mt-8">
                Don't have an account? <Link href="/signup" className="text-ai-violet font-semibold hover:text-white transition-colors">Create Step-by-Step</Link>
            </p>
        </div>
    );
}
