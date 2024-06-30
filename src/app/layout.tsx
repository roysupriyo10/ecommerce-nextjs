import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, TempCartCookieSetter } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Platform",
  description: "Best products available here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
        `}
      >
        <Header />
        <div
          className="
            grow
            px-4
            sm:px-6
            md:px-8
            lg:px-20
            xl:px-40
            z-[-1]
          "
        >
          {children}
        </div>
        {
          <TempCartCookieSetter />
        }
        <Footer />
      </body>
    </html>
  );
}
