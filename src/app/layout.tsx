import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const halenoir = localFont({
  src: [
    { path: "../../public/font/Halenoir-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/font/Halenoir-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../../public/font/Halenoir-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/font/Halenoir-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/font/Halenoir-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/font/Halenoir-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../../public/font/Halenoir-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/font/Halenoir-Thin.otf", weight: "100", style: "normal" },
    { path: "../../public/font/Halenoir-UltraLight.otf", weight: "200", style: "normal" },
    { path: "../../public/font/Halenoir-ExtraLight.otf", weight: "300", style: "normal" },
    { path: "../../public/font/Halenoir-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-halenoir",
  display: "swap",
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
      <body className={`${halenoir.className} ${halenoir.variable} antialiased tracking-tighter`}>
        {children}
      </body>
    </html>
  );
}
