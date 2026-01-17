import { Target, Flame, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex w-full justify-between items-center glass-panel p-6 rounded-3xl">
        <div>
          <h1 className="text-3xl font-outfit font-bold text-white mb-2">Good Evening, Learner</h1>
          <p className="text-slate-400">Your Band 7.0 journey continues.</p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-2 rounded-full border border-orange-500/20">
          <Flame className="w-6 h-6 text-focus-amber animate-pulse" />
          <span className="text-focus-amber font-bold text-xl">12 Days</span>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Daily Goal */}
        <div className="glass-card p-6 flex flex-col justify-between h-64 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-ai-violet/20 rounded-xl text-ai-violet">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded-lg text-slate-300">DAILY GOAL</span>
          </div>
          <div>
            <h2 className="text-2xl font-outfit font-bold mb-2">Writing Task 2 Intro</h2>
            <p className="text-slate-400 text-sm mb-4">Practice writing a strong introduction for an Agree/Disagree essay.</p>
            <button className="w-full py-3 bg-ai-violet hover:bg-violet-600 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-ai-violet/20">
              Start Practice <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress/Stats Placeholder */}
        <div className="glass-card p-6 flex flex-col justify-center items-center h-64 border-electric-blue/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-outfit font-bold text-slate-300 mb-2">Current Estimate</h3>
          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-ai-violet text-glow">
            6.5
          </div>
          <p className="text-slate-500 mt-2 text-sm">Target: 7.5</p>
          <div className="mt-4 flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`h-1 w-6 rounded-full ${i <= 3 ? 'bg-electric-blue' : 'bg-slate-700'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
