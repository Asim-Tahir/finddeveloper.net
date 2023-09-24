import "@/assets/styles/normalize.css";
import "@/assets/styles/variables.css";
import "@/assets/styles/globals.css";
import "@/assets/styles/layers/index.css";

import { markPro } from "@/assets/fonts";

import type { Metadata } from "next";

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
