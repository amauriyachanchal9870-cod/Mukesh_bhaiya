import type { Metadata } from "next";
import { Hind, Poppins } from "next/font/google";
import "./globals.css";

const hind = Hind({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-hind",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mukesh Bhaiya - Gram Pradhan Candidate",
  description: "Official portfolio for Mukesh Bhaiya, Gram Pradhan candidate. Gaon ka beta, gaon ke liye.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${hind.variable} ${poppins.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
