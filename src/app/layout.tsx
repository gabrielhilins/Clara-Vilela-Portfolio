import ConditionalBodyClass from "./components/ConditionalBodyClass";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import type { Metadata } from "next";
import { Josefin_Slab, Quicksand } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
  title: "Clara Vilela - Portfólio de Arquitetura",
  description: "Portfólio da estudante de arquitetura e urbanismo Clara Vilela, apresentando projetos inovadores e experiências complementares em design e urbanismo.",
  keywords: ["Clara Vilela", "arquitetura", "portfólio", "design", "urbanismo", "projetos de arquitetura", "estudante de arquitetura"],
  openGraph: {
    title: "Clara Vilela - Portfólio de Arquitetura",
    description: "Portfólio da estudante de arquitetura Clara Vilela, apresentando projetos inovadores e experiências complementares em design e urbanismo.",
    url: "https://claravilela.com",
    siteName: "Clara Vilela Portfólio",
    images: [
      {
        url: "https://clara-vilela-portfolio.com/MariaClaraPreview.png",
        width: 1200,
        height: 630,
        alt: "Clara Vilela Portfólio Preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clara Vilela - Portfólio de Arquitetura",
    description: "Portfólio da estudante de arquitetura Clara Vilela, apresentando projetos inovadores e experiências complementares em design e urbanismo.",
    images: ["https://clara-vilela-portfolio.com/MariaClaraPreview.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${josefinSlab.variable}`}>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalBodyClass>
            {children}
            <Analytics />
          </ConditionalBodyClass>
        </ThemeProvider>
      </body>
    </html>
  );
}
