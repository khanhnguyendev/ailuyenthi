import {
    User,
    CreditCard,
    Gift,
    Settings,
    Camera,
    ShieldAlert
} from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-outfit font-bold text-white mb-2">Profile & Settings</h1>
                <p className="text-slate-400">Manage your personal information and subscription.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Navigation & Quick Stats */}
                <div className="space-y-6">
                    {/* User Card */}
                    <div className="glass-card p-6 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-ai-violet/20 to-electric-blue/20" />

                        <div className="relative mt-8 mb-4">
                            <div className="w-24 h-24 rounded-full bg-slate-700 border-4 border-slate-800 flex items-center justify-center overflow-hidden">
                                <span className="text-4xl font-bold text-slate-500">RL</span>
                            </div>
                            <button className="absolute bottom-0 right-0 p-2 bg-ai-violet rounded-full text-white hover:bg-violet-600 transition-colors shadow-lg">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>

                        <h2 className="text-xl font-bold font-outfit text-white">Ryan Learner</h2>
                        <p className="text-slate-400 text-sm mb-4">ryan@example.com</p>
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg shadow-amber-500/20">
                            PRO MEMBER
                        </span>
                    </div>

                    {/* Navigation */}
                    <div className="glass-panel p-2 rounded-2xl flex flex-col gap-1">
                        <button className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-white font-medium transition-all">
                            <User className="w-4 h-4" />
                            General
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-all">
                            <CreditCard className="w-4 h-4" />
                            Subscription
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-all">
                            <Gift className="w-4 h-4" />
                            Referrals
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-all">
                            <Settings className="w-4 h-4" />
                            Preferences
                        </button>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-2 space-y-8">

                    {/* General Section */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-outfit font-bold text-white mb-6 flex items-center gap-2">
                            <User className="w-5 h-5 text-ai-violet" />
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Full Name</label>
                                <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ai-violet transition-colors" defaultValue="Ryan Learner" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Target Band</label>
                                <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ai-violet transition-colors" defaultValue="7.5" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email</label>
                                <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-500 cursor-not-allowed" defaultValue="ryan@example.com" disabled />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Exam Date</label>
                                <input type="date" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ai-violet transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="glass-panel p-8 border-alert-rose/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-alert-rose/5 group-hover:bg-alert-rose/10 transition-colors" />
                        <div className="relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-alert-rose/10 rounded-xl">
                                    <ShieldAlert className="w-6 h-6 text-alert-rose" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-1">Delete Account</h3>
                                    <p className="text-slate-400 text-sm mb-4">Permanently remove your account and all practice data. This action cannot be undone.</p>
                                    <button className="px-4 py-2 bg-alert-rose/10 hover:bg-alert-rose text-alert-rose hover:text-white border border-alert-rose/20 rounded-lg font-medium transition-all text-sm">
                                        Delete my account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
