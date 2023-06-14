import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s - ${SiteConfig.name}`,
  },
  description: SiteConfig.description,
  keywords: [
    "Bridge",
    "Bidding",
    "Cards",
    "Tools",
    "Calculator",
    "Hand Diagram",
  ],
  authors: [
    {
      name: "Aaron Hutton",
      url: "https://aaronhutton.co.uk",
    },
  ],
  creator: "Aaron Hutton",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SiteConfig.url,
    title: SiteConfig.name,
    description: SiteConfig.description,
    siteName: SiteConfig.name,
    images: [
      {
        url: SiteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: SiteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SiteConfig.name,
    description: SiteConfig.description,
    images: [SiteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${SiteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`/favicon.ico`} key="favicon" />
      </head>
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className=" flex-1 bg-gray-100 dark:bg-gray-900/50">
              {children}
            </div>
            <SiteFooter />
          </div>
        </ThemeProvider>
        {/* <StyleSwitcher /> */}
        <Analytics />
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
