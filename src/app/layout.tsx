import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const montserratMono = Montserrat({
  variable: "--font-montserrat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "openQuanta",
  description: "Publish your research on-chain, create authorship NFT with metadata, earn recognition without gatekeepers, and join a global community redefining publishing collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${montserrat.className} ${montserratMono.variable} antialiased tracking-tighter`}
      >
        {children}
      </body>
    </html>
  );
}
