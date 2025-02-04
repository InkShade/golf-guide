import React from "react";
import "./globals.css";

export const metadata = {
  title: "Golf Guide",
  charSet: "utf-8",
  description: "Golf Guide",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <img src="/assets/logo.png" alt="HackMotion Logo" />
        </header>
        {children}
        <footer>
          <p>Copyright 2025 © HackMotion | All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
