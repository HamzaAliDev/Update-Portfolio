import type { Metadata } from "next";
import { Funnel_Sans, Roboto } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-funnel-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Ali Hamza",
  description: "Ali Hamza's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Title and meta are optional here if you're using metadata API above */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body
        className={`${roboto.className}  ${funnelSans.className}  antialiased`}
      >
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />

          <main className="bg-theme flex flex-col items-center p-4 max-w-[1500px] mx-auto">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
