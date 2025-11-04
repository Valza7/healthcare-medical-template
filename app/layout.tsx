import type { Metadata } from "next";
import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HealthCare Medical Practice - Compassionate Care, Advanced Medicine",
    template: "%s | HealthCare Medical Practice",
  },
  description:
    "Experience exceptional healthcare with our board-certified physicians. Offering comprehensive medical services, telehealth consultations, and patient-centered care. HIPAA-compliant patient portal available 24/7.",
  keywords: [
    "medical practice",
    "healthcare",
    "primary care",
    "telehealth",
    "patient portal",
    "board certified physicians",
    "medical services",
    "health clinic",
  ],
  authors: [{ name: "HealthCare Medical Practice" }],
  creator: "HealthCare Medical Practice",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "HealthCare Medical Practice - Compassionate Care, Advanced Medicine",
    description:
      "Experience exceptional healthcare with our board-certified physicians. Offering comprehensive medical services, telehealth consultations, and patient-centered care.",
    siteName: "HealthCare Medical Practice",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthCare Medical Practice",
    description:
      "Experience exceptional healthcare with our board-certified physicians.",
    creator: "@healthcaremp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html lang="en" className="smooth-scroll">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sourceSans.variable,
          merriweather.variable
        )}
      >
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
