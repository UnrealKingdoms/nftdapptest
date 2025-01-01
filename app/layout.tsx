import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Ape Yacht Club",
  description: "Cyber Ape Yacht Club (CAYC) is all about Utility, Reimagined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
