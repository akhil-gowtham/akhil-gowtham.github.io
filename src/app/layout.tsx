import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gowtham Senthamilselvan | Senior Operations Executive",
  description:
    "Portfolio of Gowtham Senthamilselvan — Senior Operations Executive with 6+ years of experience in journal publication and logistics. Specializing in process optimization, team leadership, and quality delivery.",
  keywords: [
    "Operations Executive",
    "Journal Publication",
    "Logistics",
    "Project Management",
    "Chennai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
