import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RatesPopup } from "@/components/ExchangeRates";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/Parallax";
import { SectionTilt } from "@/components/SectionTilt";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ausghanexchange.com.au"),
  title: {
    default: "Ausghan – Exchange",
    template: "%s – Ausghan",
  },
  description:
    "At Ausghan Exchange, we make it easy to send money to loved ones overseas and exchange foreign currency with confidence. AUSTRAC registered, with branches in Adelaide and Melbourne.",
  icons: { icon: "/images/AE-LOGO-1-outline-HOR-HR-150x150.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main className="overflow-x-clip">{children}</main>
          <SectionTilt />
          <Footer />
          <RatesPopup />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
