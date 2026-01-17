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
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 pt-10 px-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-outfit font-bold text-foreground mb-2">Profile & Settings</h1>
                <p className="text-muted-foreground">Manage your personal information and subscription.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Navigation & Quick Stats */}
                <div className="space-y-6">
                    {/* User Card */}
                    <div className="glass p-6 flex flex-col items-center text-center relative overflow-hidden rounded-2xl">
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/20 to-blue-500/20" />

                        <div className="relative mt-8 mb-4">
                            <div className="w-24 h-24 rounded-full bg-card border-4 border-background flex items-center justify-center overflow-hidden">
                                <span className="text-4xl font-bold text-muted-foreground">RL</span>
                            </div>
                            <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg cursor-pointer">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>

                        <h2 className="text-xl font-bold font-outfit text-foreground">Ryan Learner</h2>
                        <p className="text-muted-foreground text-sm mb-4">ryan@example.com</p>
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg shadow-amber-500/20">
                            PRO MEMBER
                        </span>
                    </div>

                    {/* Navigation */}
                    <div className="glass p-2 rounded-2xl flex flex-col gap-1">
                        <button className="flex items-center gap-3 px-4 py-3 bg-secondary/50 rounded-xl text-foreground font-medium transition-all">
                            <User className="w-4 h-4" />
                            General
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary/30 hover:text-foreground rounded-xl font-medium transition-all cursor-pointer">
                            <CreditCard className="w-4 h-4" />
                            Subscription
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary/30 hover:text-foreground rounded-xl font-medium transition-all cursor-pointer">
                            <Gift className="w-4 h-4" />
                            Referrals
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary/30 hover:text-foreground rounded-xl font-medium transition-all cursor-pointer">
                            <Settings className="w-4 h-4" />
                            Preferences
                        </button>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-2 space-y-8">

                    {/* General Section */}
                    <div className="glass p-8 rounded-2xl">
                        <h3 className="text-xl font-outfit font-bold text-foreground mb-6 flex items-center gap-2">
                            <User className="w-5 h-5 text-primary" />
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                                <input type="text" className="w-full bg-secondary/50 border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors" defaultValue="Ryan Learner" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Target Band</label>
                                <input type="text" className="w-full bg-secondary/50 border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors" defaultValue="7.5" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Email</label>
                                <input type="email" className="w-full bg-secondary/50 border border-input rounded-xl px-4 py-3 text-muted-foreground/70 cursor-not-allowed" defaultValue="ryan@example.com" disabled />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Exam Date</label>
                                <input type="date" className="w-full bg-secondary/50 border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="glass p-8 rounded-2xl border-destructive/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-destructive/5 group-hover:bg-destructive/10 transition-colors" />
                        <div className="relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-destructive/10 rounded-xl">
                                    <ShieldAlert className="w-6 h-6 text-destructive" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-1">Delete Account</h3>
                                    <p className="text-muted-foreground text-sm mb-4">Permanently remove your account and all practice data. This action cannot be undone.</p>
                                    <button className="px-4 py-2 bg-destructive/10 hover:bg-destructive text-destructive hover:text-white border border-destructive/20 rounded-lg font-medium transition-all text-sm cursor-pointer">
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
