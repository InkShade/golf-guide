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
          <h1>Golf Guide</h1>
        </header>
        {children}
        <footer>
          <p>TO UPDATE</p>
        </footer>
      </body>
    </html>
  );
}
