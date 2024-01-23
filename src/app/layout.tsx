import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.css";
import JsWrapper from "@/components/JsWrapper";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/tiny-slider.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grace Furniture",
  description: "Grace Furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <JsWrapper /> */}
        <Script src="/assets/js/bootstrap.bundle.min.js" />
        <Script src="/assets/js/custom.js" />
        <Script src="/assets/js/tiny-slider.js" />
      </body>
    </html>
  );
}
