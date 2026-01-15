import type { Metadata } from "next";
import { Josefin_Slab, Quicksand } from "next/font/google";
import "./globals.css";




const josefinSlab = Josefin_Slab({
  variable: "--font-josefin-slab",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Clara Vilela",
  description: "Portfólio da estudante de aruqitetura Clara Vilela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${josefinSlab.variable}`}>
        {children}
      </body>
    </html>
  );
}
