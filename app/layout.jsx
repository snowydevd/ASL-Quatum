/* eslint-disable @next/next/no-sync-scripts */
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "ASL Quantum",
  description: "Growth Partner association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased `} id="root">
        <Navbar />
        {children}
        <Analytics />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
