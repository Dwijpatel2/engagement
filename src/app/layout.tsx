import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "RSVP Form",
  description:
    "Chhaya & Dwij are inviting you to their engagement celebration!",
  icons: {
    icon: "/ganpati.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
  className={`${cormorant.variable} ${cinzel.variable} font-body antialiased bg-[#FCE4EC] text-[#4A3B32]`}
>
        {children}
      </body>
    </html>
  );
}
