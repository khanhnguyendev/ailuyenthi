export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden font-inter transition-colors duration-300">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-md">
                {children}
            </div>
        </div>
    );
}
