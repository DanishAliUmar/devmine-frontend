import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devmine - Leading Global AI & Software Development Company",
  description:
    "We harness the power of AI to create intelligent solutions that enhance efficiency, decision-making, and user experience. Transform your business with innovative technology.",
  keywords: [
    "AI Development",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Custom Software",
    "Staff Augmentation",
    "DevOps",
    "Blockchain",
  ],
  authors: [{ name: "Devmine" }],
  openGraph: {
    title: "Devmine - Leading Global AI & Software Development Company",
    description:
      "Transform your business with intelligent AI and software solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Devmine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devmine - Leading Global AI & Software Development Company",
    description:
      "Transform your business with intelligent AI and software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
