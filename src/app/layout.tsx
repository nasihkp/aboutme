import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Nasih K P | Full Stack Developer & Cybersecurity Enthusiast",
  description: "Portfolio of Muhammed Nasih K P - Full Stack Developer, Frontend Engineer, and Cybersecurity Enthusiast building secure and scalable digital experiences.",
  keywords: ["Muhammed Nasih K P", "Full Stack Developer", "Cybersecurity", "Frontend Engineer", "Portfolio", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#030014] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

