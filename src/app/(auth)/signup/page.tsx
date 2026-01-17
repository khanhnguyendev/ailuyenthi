import Link from "next/link";
import { ArrowRight, Target, Sparkles } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="glass p-8 rounded-3xl animate-in fade-in zoom-in duration-500">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                    <Sparkles className="text-white w-7 h-7" />
                </div>
                <h1 className="text-3xl font-outfit font-bold text-foreground mb-2">Start Your Journey</h1>
                <p className="text-muted-foreground">Join thousands of students aiming for Band 7.0+</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
                <div>
                    <label className="block text-muted-foreground text-sm font-medium mb-1.5 ml-1">Full Name</label>
                    <input
                        type="text"
                        className="w-full bg-secondary/50 border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all placeholder:text-muted-foreground/50"
                        placeholder="Nguyen Van A"
                    />
                </div>

                <div>
                    <label className="block text-muted-foreground text-sm font-medium mb-1.5 ml-1">Email Address</label>
                    <input
                        type="email"
                        className="w-full bg-secondary/50 border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all placeholder:text-muted-foreground/50"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block text-muted-foreground text-sm font-medium mb-1.5 ml-1">Create Password</label>
                    <input
                        type="password"
                        className="w-full bg-secondary/50 border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all placeholder:text-muted-foreground/50"
                        placeholder="••••••••"
                    />
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-2 cursor-pointer">
                    Create Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            {/* Footer */}
            <p className="text-center text-muted-foreground text-sm mt-8">
                Already have an account? <Link href="/login" className="text-primary font-semibold hover:text-primary/80 transition-colors">Sign In</Link>
            </p>
        </div>
    );
}
