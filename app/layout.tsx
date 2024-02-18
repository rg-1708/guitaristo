import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { GridBackground } from "./components/ui/backgrounds";
import { FloatingNav } from "./components/ui/navigation/floating-navbar";
import { navItems } from "./components/ui/navigation/nav-item";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black", inter.className)}>
        <nav>
          <FloatingNav navItems={navItems} />
        </nav>
        {children}
      </body>
    </html>
  );
}
