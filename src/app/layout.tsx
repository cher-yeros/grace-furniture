import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import JsWrapper from "@/components/JsWrapper";

import "../assets/css/style.css";
import "../assets/css/tiny-slider.css";

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
        {children} <JsWrapper />
      </body>
    </html>
  );
}
