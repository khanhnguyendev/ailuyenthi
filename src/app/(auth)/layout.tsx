export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-void flex items-center justify-center p-4 relative overflow-hidden font-inter">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-ai-violet/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-electric-blue/20 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-md">
                {children}
            </div>
        </div>
    );
}
