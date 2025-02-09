import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proposal Website",
  description: "A beautifully animated proposal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-pink-400 to-purple-600 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
