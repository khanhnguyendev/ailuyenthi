import { TopNavbar } from "@/components/layout/TopNavbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-void font-inter">
            <TopNavbar />
            <main className="pt-20 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
