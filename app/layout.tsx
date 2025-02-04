import React from "react";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Golf Guide",
  charSet: "utf-8",
  description: "Golf Guide",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="body-content">
        <header>
            <Image
              src="/assets/logo.png"
              alt="HackMotion Logo"
              width="214"
              height="32"
              className="hidden md:block"
            />
          </header>
          {children}
        </div>
        <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
          <div className="bg-black p-4 text-center text-surface dark:text-white">
            Copyright 2025 ©<a href="https://hackmotion.com/"> HackMotion </a>|
            All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}
