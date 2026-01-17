import type { Metadata } from "next";
import { Outfit, Inter, Crimson_Pro } from "next/font/google"; // Start of Selection
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Luyện Thi - IELTS Training Platform",
  description: "Master IELTS with AI-driven feedback and realistic exam simulation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} ${crimsonPro.variable} antialiased bg-void text-white`}
      >
        {children}
      </body>
    </html>
  );
}
