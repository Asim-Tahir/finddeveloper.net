import "@/assets/styles/globals.css";

import { markPro } from "@/assets/fonts";

import type { Metadata, NextLayoutProps } from "next";

export const metadata: Metadata = {
  title: "Find Developer",
  description: "find your teammate",
};

export default function RootLayout({ children }: NextLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={markPro.className}>{children}</body>
    </html>
  );
}
