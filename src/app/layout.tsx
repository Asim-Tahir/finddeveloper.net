import "./globals.css";
import type { Metadata } from "next";
import { markPro } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Find Developer",
  description: "find your teammate",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={markPro.className}>{children}</body>
    </html>
  );
}
