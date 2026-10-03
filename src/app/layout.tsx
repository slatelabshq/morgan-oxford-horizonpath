import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";
import { defaultShareImage, getSiteUrl } from "@/lib/site-url";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { Providers } from "@/components/layout/providers";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Expert university admissions guidance for undergraduate, postgraduate, foundation, ESL, and study-abroad pathways across the UK, Canada, USA, and Europe.",
  keywords: [
    "university admissions",
    "study abroad",
    "HorizonPath Education",
    "international students",
    "postgraduate",
    "undergraduate",
  ],
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Your bridge to global universities. Expert guidance from first enquiry to enrolment.",
    type: "website",
    locale: "en_GB",
    siteName: brand.name,
    images: [
      {
        url: defaultShareImage.path,
        width: defaultShareImage.width,
        height: defaultShareImage.height,
        alt: defaultShareImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Your bridge to global universities. Expert guidance from first enquiry to enrolment.",
    images: [defaultShareImage.path],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="blue"
      suppressHydrationWarning
      className={`${newsreader.variable} ${instrumentSans.variable} h-full scroll-smooth`}
    >
      {/* Theme locked to blue — toggle commented out in header */}
      {/* <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("horizonpath-theme");if(t==="white"||t==="blue"||t==="teal"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`,
          }}
        />
      </head> */}
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          <SmoothScroll>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
