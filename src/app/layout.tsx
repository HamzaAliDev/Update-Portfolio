import type { Metadata } from "next";
import { Funnel_Sans, Roboto } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  icons: {
    icon: "logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  ${funnelSans.className}  antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className="bg-theme flex flex-col items-center p-4 max-w-[1500px] mx-auto">
            <Navbar />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
